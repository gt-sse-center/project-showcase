import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { type Project } from "@/lib/schema";
import ProjectCard from "./project-card";

interface ProjectGridProps {
  projects: Project[];
  isLoading?: boolean;
  showViewAll?: boolean;
  viewAllLink?: string;
}

export default function ProjectGrid({
  projects,
  isLoading = false,
  showViewAll = false,
  viewAllLink = "/projects"
}: ProjectGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {showViewAll && (
        <div className="text-center mt-12">
          <Button
            className="bg-[var(--gt-navy)] hover:bg-[var(--gt-gold)] text-white"
            size="lg"
            asChild>
            <a href={viewAllLink}>
              View All Projects <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </Button>
        </div>
      )}
    </>
  );
}

function ProjectCardSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-[460px]">
      <div className="h-48 bg-gray-200">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="p-6">
        <Skeleton className="h-7 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-2/3 mb-4" />

        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>

        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-6 w-24" />
        </div>
      </div>
    </div>
  );
}
