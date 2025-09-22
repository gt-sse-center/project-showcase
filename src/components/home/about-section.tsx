import { parseTextWithLinks } from '@/lib/utils';
import { Code, FlaskRound, GraduationCap } from 'lucide-react';
import imgAtlanta from '/images/atlanta.png';
import imgBuilding from '/images/building.png';
import imgCollaboration from '/images/collaboration.png';
import imgTechTower from '/images/tech-tower.png';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#003057] font-sans mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              The Center for Scientific Software Engineering (CSSE) at Georgia Tech is part of the <a href="https://www.schmidtsciences.org/viss/" target="_blank" rel="noopener noreferrer" className="text-[#003057] hover:text-[#B3A369] font-medium">Virtual Institute for Scientific Software (VISS)</a>, launched by Schmidt Sciences to address the need for training and educating software engineers. CSSE helps researchers build and maintain high-quality software for scientific discovery. We partner with scientists to apply software engineering best practices to scientific software development.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team consists of professional software engineers, computer scientists, and domain experts who collaborate with researchers across disciplines to create sustainable, reusable, and efficient research software.
            </p>
            <div className="flex flex-wrap gap-4">
              <FeatureItem
                icon={<Code className="h-5 w-5 text-[#003057]" />}
                title="Software Engineering"
                description="Best practices & methodologies"
              />
              <FeatureItem
                icon={<FlaskRound className="h-5 w-5 text-[#003057]" />}
                title="Research Collaboration"
                description="Cross-disciplinary partnerships"
              />
              <FeatureItem
                icon={<GraduationCap className="h-5 w-5 text-[#003057]" />}
                title="Education"
                description="Training & skill development"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg shadow-lg h-48 w-full overflow-hidden">
              <img
                src={imgBuilding}
                alt="Georgia Tech College of Computing"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="rounded-lg shadow-lg h-48 w-full overflow-hidden mt-8">
              <img
                src={imgCollaboration}
                alt="Software engineering collaboration"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="rounded-lg shadow-lg h-48 w-full overflow-hidden">
              <img
                src={imgTechTower}
                alt="Georgia Tech Tower with blossoms"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="rounded-lg shadow-lg h-48 w-full overflow-hidden mt-8">
              <img
                src={imgAtlanta}
                alt="Atlanta tech skyline"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-[#E5D6A2] flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-[#003057]">{title}</h3>
        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: parseTextWithLinks(description) }}></p>
      </div>
    </div>
  );
}