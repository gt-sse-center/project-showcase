import { Badge } from "@/components/ui/badge";
import {
  extractTechnologiesFromDetailed,
  stripHtmlTags,
  truncate
} from "@/lib/utils";
import { type Project } from "@/schema";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getCategoryLabel = (categories: string[]): string => {
    const categoryLabels: Record<string, string> = {
      "computational-science": "Computational Science",
      "data-science": "Data Science",
      "ai-ml": "AI & Machine Learning",
      visualization: "Visualization",
      "biomedical-engineering": "Biomedical Engineering",
      psychology: "Psychology",
      "computer-science": "Computer Science",
      mathematics: "Mathematics",
      "material-science": "Material Science",
      "chemistry-biochemistry": "Chemistry & Biochemistry",
      "earth-atmospheric-sciences": "Earth & Atmospheric Sciences",
      bioinformatics: "Bioinformatics",
      "electrical-engineering": "Electrical Engineering",
      chemistry: "Chemistry",
      "human-computer-interaction": "Human-Computer Interaction",
    };

    // Use the first category as the primary label
    const primaryCategory = categories[0] || "research";

    // If we have a mapping, use it
    if (categoryLabels[primaryCategory]) {
      return categoryLabels[primaryCategory];
    }

    // Otherwise, convert kebab-case to Title Case
    return primaryCategory
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full cursor-pointer"
        data-category={project.category.join(" ")}
      >
        <div className="relative h-48 bg-gray-100">
          <img
            src={
              project.imageUrl ||
              "https://images.unsplash.com/photo-1581093196277-9f608732aac8?auto=format&fit=crop&q=80"
            }
            alt={`Project: ${project.title}`}
            className="w-full h-full object-contain p-2"
          />
          <div className="absolute top-0 right-0 bg-[#003057] text-white text-xs font-bold px-3 py-1 m-2 rounded">
            {getCategoryLabel(project.category)}
          </div>
        </div>
        <div className="p-6 flex flex-col grow">
          <h3 className="text-xl font-bold text-[#003057] mb-2 hover:text-[#B3A369] transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 grow">
            {truncate(stripHtmlTags(project.summary), 240)}
          </p>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {(() => {
                // Use detailedTechnologies if available
                const technologies = project.detailedTechnologies
                  ? extractTechnologiesFromDetailed(project.detailedTechnologies)
                  : [];

                return technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-[#E5D6A2] text-[#003057] hover:bg-[#E5D6A2] hover:text-[#003057] cursor-default"
                  >
                    {tech}
                  </Badge>
                ));
              })()}
            </div>
            <div className="flex justify-end items-center">
              <span className="text-[#003057] hover:text-[#B3A369] font-medium flex items-center transition-colors">
                View Project <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
