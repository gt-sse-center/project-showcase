import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import MobileMenu from '@/components/layout/mobile-menu';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/home';
import NotFound from '@/pages/not-found';
import ProjectDetail from '@/pages/project-detail';
import Projects from '@/pages/projects';
import { Route, Router, Switch, useLocation } from 'wouter';

import { useEffect, useState } from 'react';
import { useHashLocation } from 'wouter/use-hash-location';

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
      {/* Since Vite generates a Single Page Application (SPA)
          we need to use hash based routing
      */}
      <Router hook={useHashLocation}>
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
