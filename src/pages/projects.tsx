import ProjectFilters from '@/components/projects/project-filters';
import ProjectGrid from '@/components/projects/project-grid';
import PageHeader from '@/components/ui/page-header';
import { projects as allProjects } from '@/data/projects';
import { useSEO } from "@/hooks/use-seo";
import { extractTechnologiesFromDetailed, sortProjects } from '@/lib/utils';
import { useEffect, useState } from 'react';
import imgProjectHeaderBackground from '/images/project-header-bg.png';

export default function Projects() {
  // SEO setup for projects page
  useSEO({
    title: 'Research Projects | CSSE Project Showcase',
    description: 'Browse all research projects from Georgia Tech\'s Center for Scientific Software Engineering. Filter by category, technology, and domain to find innovative software solutions.',
    keywords: 'Georgia Tech, CSSE, Research Projects, Scientific Software, AI, Machine Learning, Computational Science, Data Science',
    canonical: 'https://ssec-showcase.gatech.edu/projects',
    ogTitle: 'Research Projects | CSSE Project Showcase',
    ogDescription: 'Browse all research projects from Georgia Tech\'s Center for Scientific Software Engineering.',
    ogUrl: 'https://ssec-showcase.gatech.edu/projects',
  });

  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    // Apply filtering and searching
    let result = [...allProjects];

    // Apply category filter
    if (activeFilter !== 'all') {
      if (activeFilter === 'featured') {
        result = result.filter(project => project.featured === true);
      } else {
        result = result.filter(project => project.category.includes(activeFilter));
      }
    }

    // Apply technology filter
    if (selectedTechnologies.length > 0) {
      result = result.filter(project => {
        const projectTechnologies = extractTechnologiesFromDetailed(project.detailedTechnologies) || [];
        return selectedTechnologies.some(selectedTech =>
          projectTechnologies.some(projectTech =>
            projectTech.toLowerCase().includes(selectedTech.toLowerCase())
          )
        );
      });
    }

    // Apply search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(project => {
        const projectTechnologies = extractTechnologiesFromDetailed(project.detailedTechnologies) || [];

        // Search in partner names
        const partnerMatches = project.projectDetails?.partners?.some(partner =>
          partner?.name?.toLowerCase().includes(search)
        ) || false;

        // Search in software engineer names
        const engineerMatches = project.projectDetails?.softwareEngineers?.some(engineer =>
          engineer?.name?.toLowerCase().includes(search)
        ) || false;

        return (
          project.title.toLowerCase().includes(search) ||
          project.description.toLowerCase().includes(search) ||
          projectTechnologies.some(tech =>
            tech.toLowerCase().includes(search)
          ) ||
          partnerMatches ||
          engineerMatches
        );
      });
    }

    // Apply sorting
    const sortedResult = sortProjects(result, sortBy);

    setFilteredProjects(sortedResult);
  }, [activeFilter, searchTerm, selectedTechnologies, sortBy]);

  return (
    <div>
      <PageHeader
        title="Projects"
        description="Explore our diverse portfolio of scientific software engineering projects across multiple disciplines"
        backgroundImage={imgProjectHeaderBackground}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ProjectFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
            sortBy={sortBy}
            setSortBy={setSortBy}
            allProjects={allProjects}
          />

          <ProjectGrid
            projects={filteredProjects}
          />

          {
            filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-600">No projects match your criteria</h3>
                <p className="mt-2 text-gray-500">Try adjusting your filters or search term</p>
              </div>)
          }
        </div >
      </section >
    </div >
  );
}
