import ProjectOnePager from "@/components/projects/project-one-pager";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/page-header";
import { projects } from "@/data/projects";
import { useSEO } from "@/hooks/use-seo";
import { generateBreadcrumbStructuredData, generateProjectKeywords, generateProjectMetaDescription, generateProjectStructuredData } from "@/lib/seo-utils";
import { parseTextWithLinks } from "@/lib/utils";
import { SiGithub } from '@icons-pack/react-simple-icons';
import {
  ArrowLeft,
  Building,
  Calendar,
  ExternalLink,
  Target,
  Users,
} from "lucide-react";
import { useEffect } from "react";
import { useLocation, useParams } from "wouter";

export default function ProjectDetail() {
  const params = useParams();
  const [, navigate] = useLocation();
  const projectId = params.id ? parseInt(params.id, 10) : undefined;

  const getCategoryLabel = (category: string): string => {
    const categories: Record<string, string> = {
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
    };

    return categories[category] || "Research";
  };

  // Find the project in our static data by ID
  const project = projectId
    ? projects.find((p) => p.id === projectId)
    : undefined;

  // SEO setup for project detail page
  useSEO(project ? {
    title: `${project.title} | CSSE Project Showcase`,
    description: generateProjectMetaDescription(project),
    keywords: generateProjectKeywords(project),
    canonical: `https://ssec-showcase.gatech.edu/projects/${project.id}`,
    ogTitle: `${project.title} | CSSE Project Showcase`,
    ogDescription: project.summary,
    ogImage: project.imageUrl,
    ogUrl: `https://ssec-showcase.gatech.edu/projects/${project.id}`,
    twitterTitle: `${project.title} | CSSE`,
    twitterDescription: project.summary,
    twitterImage: project.imageUrl,
  } : {});

  // Add structured data for project
  useEffect(() => {
    if (!project) return;

    const projectStructuredData = generateProjectStructuredData(project);
    const breadcrumbStructuredData = generateBreadcrumbStructuredData([
      { name: "Home", url: "https://ssec-showcase.gatech.edu/" },
      { name: "Projects", url: "https://ssec-showcase.gatech.edu/projects" },
      { name: project.title, url: `https://ssec-showcase.gatech.edu/projects/${project.id}` }
    ]);

    const projectScript = document.createElement('script');
    projectScript.type = 'application/ld+json';
    projectScript.text = JSON.stringify(projectStructuredData);
    document.head.appendChild(projectScript);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbStructuredData);
    document.head.appendChild(breadcrumbScript);

    return () => {
      if (document.head.contains(projectScript)) {
        document.head.removeChild(projectScript);
      }
      if (document.head.contains(breadcrumbScript)) {
        document.head.removeChild(breadcrumbScript);
      }
    };
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-[#003057] mb-4">
          Project Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          We couldn't find the project you're looking for.
        </p>
        <Button onClick={() => navigate("/projects")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={project.title}
        description={project.summary}
        backgroundImage={project.imageUrl || "/images/project-header-bg.png"}
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Project Details section at the top */}
            {project.projectDetails && (
              <div className="mb-8">
                <div className="bg-linear-to-r from-gray-50 to-blue-50 p-5 rounded-lg border border-gray-200">
                  <h2 className="text-[#003057] text-2xl font-bold mb-6 flex items-center">
                    <span className="w-2 h-6 bg-[#B3A369] rounded-full mr-3"></span>
                    Project Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Timeline Card */}
                    {(project.projectDetails.startDate ||
                      project.projectDetails.endDate ||
                      project.projectDetails.source) && (
                        <div className="bg-white rounded-lg p-4 shadow-xs border border-gray-100 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                            <h3 className="font-semibold text-[#003057] flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              Timeline
                            </h3>
                          </div>
                          <div className="space-y-2 text-sm">
                            {project.projectDetails.startDate && (
                              <p className="flex justify-between">
                                <span className="text-gray-600">Start:</span>
                                <span className="font-medium">
                                  {project.projectDetails.startDate}
                                </span>
                              </p>
                            )}
                            {project.projectDetails.endDate && (
                              <p className="flex justify-between">
                                <span className="text-gray-600">End:</span>
                                <span className="font-medium">
                                  {project.projectDetails.endDate}
                                </span>
                              </p>
                            )}
                            {project.projectDetails.source && (
                              <p className="flex justify-between">
                                <span className="text-gray-600">Source:</span>
                                <span className="font-medium">
                                  {project.projectDetails.source}
                                </span>
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                    {/* Scientific Domain Card */}
                    {project.projectDetails.scientificDomain && (
                      <div className="bg-white rounded-lg p-4 shadow-xs border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                          <h3 className="font-semibold text-[#003057] flex items-center">
                            <Target className="w-4 h-4 mr-2" />
                            Scientific Domain
                          </h3>
                        </div>
                        <p className="text-sm font-medium">
                          {project.projectDetails.scientificDomain}
                        </p>
                      </div>
                    )}

                    {/* Partners Card */}
                    {project.projectDetails.partners &&
                      project.projectDetails.partners.length > 0 && (
                        <div className="bg-white rounded-lg p-4 shadow-xs border border-gray-100 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                            <h3 className="font-semibold text-[#003057] flex items-center">
                              <Building className="w-4 h-4 mr-2" />
                              Partners
                            </h3>
                          </div>
                          <div className="space-y-1">
                            {project.projectDetails.partners.map(
                              (partner, index) => (
                                <p key={index} className="text-sm font-medium">
                                  {typeof partner === "string" ? (
                                    partner
                                  ) : partner.profileUrl ? (
                                    <a
                                      href={partner.profileUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                      {partner.name}
                                    </a>
                                  ) : (
                                    partner.name
                                  )}
                                </p>
                              ),
                            )}
                          </div>
                        </div>
                      )}

                    {/* Software Engineers Card */}
                    {project.projectDetails.softwareEngineers &&
                      project.projectDetails.softwareEngineers.length > 0 && (
                        <div className="bg-white rounded-lg p-4 shadow-xs border border-gray-100 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                            <h3 className="font-semibold text-[#003057] flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                              Software Engineers
                            </h3>
                          </div>
                          <div className="space-y-1">
                            {project.projectDetails.softwareEngineers.map(
                              (engineer, index) => (
                                <p key={index} className="text-sm font-medium">
                                  {typeof engineer === "string" ? (
                                    engineer
                                  ) : engineer.profileUrl ? (
                                    <a
                                      href={engineer.profileUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                      {engineer.name}
                                    </a>
                                  ) : (
                                    engineer.name
                                  )}
                                </p>
                              ),
                            )}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            )}

            <div className="prose max-w-none mb-8">
              <h2 className="text-[#003057]">About this Project</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: parseTextWithLinks(project.description),
                }}
              ></p>

              {/* Goals section between About this Project and Key Achievements */}
              {project.goals && (
                <>
                  <h3 className="text-[#003057]">Goals</h3>
                  <ul>
                    {project.goals.map((goal, index) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: parseTextWithLinks(goal),
                        }}
                      ></li>
                    ))}
                  </ul>
                </>
              )}

              {/* Software Solution section after Goals */}
              {project.softwareSolution && (
                <>
                  <h3 className="text-[#003057]">Software Solution</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: parseTextWithLinks(project.softwareSolution),
                    }}
                  ></p>
                </>
              )}

              {project.achievements && project.achievements.length > 0 && (
                <>
                  <h3 className="text-[#003057]">Key Achievements</h3>
                  <ul>
                    {project.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: parseTextWithLinks(achievement),
                        }}
                      ></li>
                    ))}
                  </ul>
                </>
              )}

              {/* Add special section for PatientX screenshot */}

              {/* Add special section for AutoRA screenshot */}

              {/* Add special section for RL2Grid performance profiling */}

              {/* Add special section for Ramanujan Machine screenshot */}

              {/* Use the reusable one-pager component for projects with projectDetails */}
              <ProjectOnePager project={project} />

              {/* Add special section for IDPs protein comparison image */}

              <h3 className="text-[#003057]">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {project.category.map((cat, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#E5D6A2] text-[#003057] rounded-full text-sm"
                  >
                    {getCategoryLabel(cat)}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {project.githubUrl && (
                <>
                  {(Array.isArray(project.githubUrl) ? project.githubUrl : [project.githubUrl]).map((url, index) => (
                    <Button key={index} className="bg-[#003057] hover:bg-[#004F87]" asChild>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiGithub className="mr-2 h-4 w-4" />
                        {Array.isArray(project.githubUrl) && project.githubUrl.length > 1 ? `GitHub ${index + 1}` : 'View on GitHub'}
                      </a>
                    </Button>
                  ))}
                </>
              )}

              {project.demoUrl && (
                <>
                  {(Array.isArray(project.demoUrl) ? project.demoUrl : [project.demoUrl]).map((url, index) => (
                    <Button
                      key={index}
                      className="bg-[#B3A369] hover:bg-[#E5D6A2] hover:text-[#003057]"
                      asChild
                    >
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {Array.isArray(project.demoUrl) && project.demoUrl.length > 1 ? `Demo ${index + 1}` : 'Live Demo'}
                      </a>
                    </Button>
                  ))}
                </>
              )}

              <Button
                variant="outline"
                className="border-[#003057] text-[#003057]"
                onClick={() => navigate("/projects")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
