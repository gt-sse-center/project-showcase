import { Button } from "@/components/ui/button";
import { GitBranch, GraduationCap, Handshake } from "lucide-react";
import React from "react";
import { parseTextWithLinks } from "../../lib/utils";

export default function GetInvolvedSection() {
  return (
    <section className="py-16 bg-[var(--gt-navy)] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-sans mb-6">Get Involved</h2>
          <p className="text-xl mb-8">
            Join us in advancing scientific software engineering at Georgia Tech. We offer multiple
            ways to collaborate.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <InvolvementCard
              icon={<Handshake className="text-white text-2xl" />}
              title="Research Partnerships"
              description="Collaborate with our team on your software-intensive research projects."
              linkText="Learn More"
              linkUrl={`${import.meta.env.CSSE_GT_PAGE}/contact`}
            />

            <InvolvementCard
              icon={<GraduationCap className="text-white text-2xl" />}
              title="Training & Workshops"
              description="Participate in our software engineering workshops and training sessions."
              linkText="View Schedule"
              linkUrl={`${import.meta.env.CSSE_GT_PAGE}/events`}
            />

            <InvolvementCard
              icon={<GitBranch className="text-white text-2xl" />}
              title="Open Source"
              description="Contribute to our open source scientific software projects."
              linkText="View Projects"
              linkUrl="/projects"
            />
          </div>

          <div className="mt-12">
            <Button
              size="lg"
              className="bg-[var(--gt-gold)] hover:bg-[var(--gt-tech-light-gold)] hover:text-[var(--gt-navy)] text-white"
              asChild>
              <a
                href={`${import.meta.env.CSSE_GT_PAGE}/contact`}
                target="_blank"
                rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface InvolvementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

function InvolvementCard({ icon, title, description, linkText, linkUrl }: InvolvementCardProps) {
  return (
    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-xs hover:bg-white/20 transition-colors duration-300">
      <div className="w-16 h-16 mx-auto bg-[var(--gt-gold)] rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p
        className="text-gray-100 mb-4"
        dangerouslySetInnerHTML={{ __html: parseTextWithLinks(description) }}></p>
      <a
        href={linkUrl}
        className="text-[var(--gt-gold)] hover:text-[var(--gt-tech-light-gold)] font-medium inline-flex items-center">
        {linkText} →
      </a>
    </div>
  );
}
