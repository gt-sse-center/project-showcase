import { Button } from "@/components/ui/button";
import imgProjectHeader from "@/images/general/project-header-bg.png";
import { type Project } from "@/lib/schema";
import { parseTextWithLinks } from "@/lib/utils";

interface FeaturedProjectSectionProps {
  project: Project;
}

export default function FeaturedProjectSection({ project }: FeaturedProjectSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="md:w-1/2">
            <img
              src={`${import.meta.env.BASE_URL}/${project.imageUrl || imgProjectHeader.src}`}
              alt={`Featured project: ${project.title}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-block bg-[var(--gt-tech-light-gold)] text-[var(--gt-navy)] text-sm font-bold px-3 py-1 rounded mb-4">
              Featured Project
            </div>
            <h2 className="text-3xl font-bold text-[var(--gt-navy)] font-sans mb-4">
              {project.title}
            </h2>
            <p
              className="text-gray-600 mb-6"
              dangerouslySetInnerHTML={{ __html: parseTextWithLinks(project.description) }}></p>

            {project.achievements && project.achievements.length > 0 && (
              <div className="mb-6">
                <h4 className="font-bold text-[var(--gt-navy)] mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {project.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: parseTextWithLinks(achievement) }}></li>
                  ))}
                </ul>
              </div>
            )}

            <Button
              variant="link"
              className="text-[var(--gt-navy)] hover:text-[var(--gt-gold)] p-0 justify-start"
              asChild>
              <a href={`${import.meta.env.BASE_URL}/projects/${project.id}`}>
                Explore Project Details <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
