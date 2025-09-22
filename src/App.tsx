import { Router, Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MobileMenu from "@/components/layout/mobile-menu";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import ProjectDetail from "@/pages/project-detail";

import { useState, useEffect } from "react";

function RouterLocationHook() {
  const [location] = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:id" component={ProjectDetail} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Read the `base` set in the vite.config.ts.
          Needed for Github project pages.
      */}
      <Router base={import.meta.env.BASE_URL}>
        <div className="flex flex-col min-h-screen">
          <Header toggleMobileMenu={toggleMobileMenu} />
          <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
          <main className="grow">
            <RouterLocationHook />
          </main>
          <Footer />
        </div>
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
