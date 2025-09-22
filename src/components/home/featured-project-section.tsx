import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { parseTextWithLinks } from '@/lib/utils';
import { type Project } from '@/schema';
import { parseTextWithLinks } from '@/utils';
import { Link } from 'wouter';

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
              src={project.imageUrl || "/images/project-header-bg.png"} 
              alt={`Featured project: ${project.title}`} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-block bg-[#E5D6A2] text-[#003057] text-sm font-bold px-3 py-1 rounded mb-4">
              Featured Project
            </div>
            <h2 className="text-3xl font-bold text-[#003057] font-sans mb-4">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: parseTextWithLinks(project.description) }}></p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies && project.technologies.map((tech, index) => (
                <Badge key={index} className="bg-[#003057] text-white">
                  {tech}
                </Badge>
              ))}
            </div>
            
            {project.achievements && project.achievements.length > 0 && (
              <div className="mb-6">
                <h4 className="font-bold text-[#003057] mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: parseTextWithLinks(achievement) }}></li>
                  ))}
                </ul>
              </div>
            )}
            
            <Button 
              variant="link" 
              className="text-[#003057] hover:text-[#B3A369] p-0 justify-start"
              asChild
            >
              <Link href={`/projects/${project.id}`}>
                Explore Project Details <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
