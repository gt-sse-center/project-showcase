import { Badge } from "@/components/ui/badge";
import { type Project } from "@/lib/schema";
import { extractTechnologiesFromDetailed, stripHtmlTags, truncate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

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

    let labels = categories.map((category: string) => {
      return categoryLabels[category] || "Research";
    });
    if (labels.length > 2) {
      labels = [labels[0], labels[1], "..."];
    }
    return labels.join(", ");
  };

  return (
    <a href={`${import.meta.env.BASE_URL}/projects/${project.id}`}>
      <div
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full cursor-pointer"
        data-category={project.category.join(" ")}>
        <div className="relative h-48 bg-gray-100">
          <img
            src={`${import.meta.env.BASE_URL}/${
              project.imageUrl ||
              "https://images.unsplash.com/photo-1581093196277-9f608732aac8?auto=format&fit=crop&q=80"
            }`}
            alt={`Project: ${project.title}`}
            className="w-full h-full object-contain p-2"
          />
          <div className="absolute top-0 right-0 bg-[var(--gt-navy)] text-white text-xs font-bold px-3 py-1 m-2 rounded">
            {getCategoryLabel(project.category)}
          </div>
        </div>
        <div className="p-6 flex flex-col grow">
          <h3 className="text-xl font-bold text-[var(--gt-navy)] mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4 grow">{truncate(stripHtmlTags(project.summary), 240)}</p>
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
                    className="bg-[var(--gt-tech-light-gold)] text-[var(--gt-navy)] hover:bg-[var(--gt-tech-light-gold)] hover:text-[var(--gt-navy)] cursor-default">
                    {tech}
                  </Badge>
                ));
              })()}
            </div>
            <div className="flex justify-end items-center">
              <span className="text-[var(--gt-navy)] hover:text-[var(--gt-gold)] font-medium flex items-center transition-colors">
                View Project <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
