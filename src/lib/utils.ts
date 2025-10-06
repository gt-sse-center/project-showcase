import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import sanitizeHtml from 'sanitize-html';
import { type Partner, type Project, type SoftwareEngineer, type Technology } from "@/schema";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseTextWithLinks(text: string): string {
  // First, handle markdown-style links [text](url)
  let processedText = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">$1</a>');

  // Then, handle plain URLs (but not ones already inside HTML tags)
  processedText = processedText.replace(/(?<!href=")(?<!href=')(?<!">)https?:\/\/[^\s<]+/g, (match) => {
    return `<a href="${match}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">${match}</a>`;
  });

  return processedText;
}

export function stripHtmlTags(text: string): string {
  // Use sanitize-html to strip all HTML tags, returning only safe text
  return sanitizeHtml(text, { allowedTags: [], allowedAttributes: {} });
}

/**
 * Truncates a string to the first `maxLength` characters,
 * and appends "..." if the original string was longer.
 *
 * @param input – the string to truncate
 * @param maxLength – the maximum number of characters to keep
 * @returns the truncated string, with "..." if it was cut off
 */
export function truncate(input: string, maxLength: number): string {
  if (maxLength < 0) {
    throw new Error("maxLength must be non-negative");
  }
  return input.length > maxLength
    ? input.substring(0, maxLength) + "..."
    : input;
}

/**
 * Counts all unique technologies used across all projects
 * @param projects - Array of projects to analyze
 * @returns Number of unique technologies
 */
export function countUniqueTechnologies(projects: Project[]): number {
  const allTechnologies = new Set<string>();

  projects.forEach(project => {
    // Count technologies from detailedTechnologies object
    if (project.detailedTechnologies) {
      Object.values(project.detailedTechnologies).forEach((techCategory: Array<string | Technology>) => {
        if (Array.isArray(techCategory)) {
          techCategory.forEach((tech: string | Technology) => {
            if (typeof tech === 'string') {
              allTechnologies.add(tech);
            } else if (tech && tech.name) {
              allTechnologies.add(tech.name);
            }
          });
        }
      });
    }
  });

  return allTechnologies.size;
}

/**
 * Counts all unique collaborators (partners and software engineers) across all projects
 * @param projects - Array of projects to analyze
 * @returns Number of unique collaborators
 */
export function countUniqueCollaborators(projects: Project[]): number {
  const allCollaborators = new Set<string>();

  projects.forEach(project => {
    // Count partners from projectDetails
    if (project.projectDetails?.partners) {
      project.projectDetails.partners.forEach((partner: Partner) => {
        if (typeof partner === 'string') {
          allCollaborators.add(partner);
        } else if (partner && partner.name) {
          allCollaborators.add(partner.name);
        }
      });
    }

    // Count software engineers from projectDetails
    if (project.projectDetails?.softwareEngineers) {
      project.projectDetails.softwareEngineers.forEach((engineer: SoftwareEngineer) => {
        if (typeof engineer === 'string') {
          allCollaborators.add(engineer);
        } else if (engineer && engineer.name) {
          allCollaborators.add(engineer.name);
        }
      });
    }
  });

  return allCollaborators.size;
}

export function extractTechnologiesFromDetailed(detailedTechnologies?: { [key: string]: Array<string | Technology> }): string[] {
  if (!detailedTechnologies) return [];

  const allTechnologies: string[] = [];

  // Extract technologies from all categories
  Object.values(detailedTechnologies).forEach(categoryTechs => {
    categoryTechs.forEach(tech => {
      if (typeof tech === 'string') {
        allTechnologies.push(tech);
      } else {
        allTechnologies.push(tech.name);
      }
    });
  });

  return allTechnologies;
}

export function getAllTechnologiesFromProjects(projects: Project[]): {
  allTechnologies: string[],
  categorizedTechnologies: { [category: string]: string[] }
} {
  const allTechSet = new Set<string>();
  const categorizedTechnologies: { [category: string]: string[] } = {};

  projects.forEach(project => {
    // Extract from detailedTechnologies
    if (project.detailedTechnologies) {
      Object.entries(project.detailedTechnologies).forEach(([category, techs]: [string, Array<string | Technology>]) => {
        if (!categorizedTechnologies[category]) {
          categorizedTechnologies[category] = [];
        }

        if (Array.isArray(techs)) {
          techs.forEach((tech: string | Technology) => {
            const techName = typeof tech === 'string' ? tech : tech.name;
            allTechSet.add(techName);
            if (!categorizedTechnologies[category].includes(techName)) {
              categorizedTechnologies[category].push(techName);
            }
          });
        }
      });
    }
  });

  // Sort categories and technologies
  Object.keys(categorizedTechnologies).forEach(category => {
    categorizedTechnologies[category].sort();
  });

  return {
    allTechnologies: Array.from(allTechSet).sort(),
    categorizedTechnologies
  };
}

export function getAllCategoriesFromProjects(projects: Project[]): string[] {
  const allCategories = new Set<string>();

  projects.forEach(project => {
    if (project.category && Array.isArray(project.category)) {
      project.category.forEach((cat: string) => allCategories.add(cat));
    }
  });

  return Array.from(allCategories).sort();
}

export function getCategoryDisplayName(category: string): string {
  const displayNames: { [key: string]: string } = {
    'ai-ml': 'AI/ML',
    'biomedical-engineering': 'Biomedical Engineering',
    'data-science': 'Data Science',
    'psychology': 'Psychology',
    'computer-science': 'Computer Science',
    'computational-science': 'Computational Science',
    'mathematics': 'Mathematics',
    'material-science': 'Material Science',
    'chemistry-biochemistry': 'Chemistry/Biochemistry',
    'earth-atmospheric-sciences': 'Earth/Atmospheric Sciences',
    'bioinformatics': 'Bioinformatics',
    'electrical-engineering': 'Electrical Engineering',
    'chemistry': 'Chemistry',
    'human-computer-interaction': 'Human-Computer Interaction'
  };

  return displayNames[category] || category;
}

export function sortProjects(projects: Project[], sortBy: string): Project[] {
  const sorted = [...projects];

  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => {
        const dateA = new Date(a.projectDetails?.startDate || '2020-01-01');
        const dateB = new Date(b.projectDetails?.startDate || '2020-01-01');
        return dateB.getTime() - dateA.getTime();
      });

    case 'oldest':
      return sorted.sort((a, b) => {
        const dateA = new Date(a.projectDetails?.startDate || '2020-01-01');
        const dateB = new Date(b.projectDetails?.startDate || '2020-01-01');
        return dateA.getTime() - dateB.getTime();
      });

    case 'alphabetical':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));

    case 'category':
      return sorted.sort((a, b) => {
        const categoryA = a.category?.[0] || 'zzz';
        const categoryB = b.category?.[0] || 'zzz';
        return categoryA.localeCompare(categoryB);
      });

    default:
      return sorted;
  }
}
