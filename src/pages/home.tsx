import AboutSection from "@/components/home/about-section";
import FeaturedProjectSection from "@/components/home/featured-project-section";
import GetInvolvedSection from "@/components/home/get-involved-section";
import HeroSection from "@/components/home/hero-section";
import StatsSection from "@/components/home/stats-section";
import ProjectGrid from "@/components/projects/project-grid";
import { projects } from "@/data/projects";
import { defaultSEOData, useSEO } from "@/hooks/use-seo";
import { generateOrganizationStructuredData } from "@/lib/seo-utils";
import { useEffect } from "react";

export default function Home() {
  // SEO setup for home page
  useSEO(defaultSEOData);

  // Add structured data for organization
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(generateOrganizationStructuredData());
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Get all projects and featured projects from our static data
  const allProjects = projects;
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <StatsSection />

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--gt-navy)] font-sans mb-4">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse portfolio of scientific software engineering projects across
              multiple disciplines
            </p>
          </div>

          <ProjectGrid
            projects={allProjects.slice(0, 6)}
            showViewAll={true}
            viewAllLink="/projects"
          />
        </div>
      </section>

      {featuredProjects.length > 0 && <FeaturedProjectSection project={featuredProjects[0]} />}

      <GetInvolvedSection />
    </div>
  );
}
