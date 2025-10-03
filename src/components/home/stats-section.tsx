import { projects } from "@/data/projects";
import { countUniqueCollaborators, countUniqueTechnologies } from "@/lib/utils";

export default function StatsSection() {
  const projectCount = projects.length;
  const uniqueTechCount = countUniqueTechnologies(projects);
  const collaboratorCount = countUniqueCollaborators(projects);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <StatCard number={`${projectCount}`} label="Research Projects" />
          <StatCard number="6+" label="Engineers" />
          <StatCard number={`${uniqueTechCount}`} label="Technologies" />
          <StatCard number={`${collaboratorCount}`} label="Partners" />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xs transform hover:translate-y-[-5px] transition-transform duration-300 relative">
      <div className="text-4xl font-bold text-[#B3A369] mb-2">{number}</div>
      <div className="text-[#003057] font-medium">{label}</div>
    </div>
  );
}
