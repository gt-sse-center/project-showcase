import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-[var(--gt-navy)] text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-pattern">
        <div className="absolute inset-0 bg-linear-to-r from-[var(--gt-navy)]/95 via-[var(--gt-navy)]/90 to-[var(--gt-navy)]/95"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 z-0">
        <svg viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#B3A369"
            d="M42.9,-49.2C55.3,-34.4,65,-17.2,68.1,2.9C71.2,23,67.8,46,54.4,58.9C41,71.8,17.6,74.6,-3.9,77.8C-25.5,81,-51,84.5,-65.9,72.1C-80.9,59.6,-85.3,31.2,-81.5,7.8C-77.7,-15.6,-65.7,-34.1,-50.6,-48.9C-35.5,-63.7,-17.7,-74.9,0,-74.9C17.7,-74.9,35.5,-63.7,42.9,-49.2Z"
            transform="translate(150 300)"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 opacity-10 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#B3A369"
            d="M48.2,-46.1C63.2,-35.1,76.8,-17.5,79.5,3.1C82.2,23.7,74,47.4,59,62.3C43.9,77.1,22,83.1,1.8,81.6C-18.3,80,-36.7,71,-50.6,56.3C-64.5,41.7,-74,21.3,-75.2,-0.7C-76.4,-22.7,-69.3,-45.3,-54.9,-56.3C-40.4,-67.3,-20.2,-66.7,-1.4,-65.5C17.5,-64.3,35,-57.1,48.2,-46.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left md:mx-0">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-sans mb-6 leading-tight">
            Advancing Scientific
            <br className="hidden md:block" /> Software Engineering
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto md:mx-0">
            Creating robust, sustainable, and usable software for scientific research at Georgia
            Tech
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-[var(--gt-gold)] hover:bg-[var(--gt-tech-light-gold)] hover:text-[var(--gt-navy)] text-white transition-colors text-lg px-6 py-6"
              asChild>
              <a href="/projects">Explore Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
