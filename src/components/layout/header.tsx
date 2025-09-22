import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';

interface HeaderProps {
  toggleMobileMenu: () => void;
}

export default function Header({ toggleMobileMenu }: HeaderProps) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/project-images/gt-logo-color.png"
                alt="Georgia Tech Logo"
                className="h-10 mr-3"
              />
              <div>
                <div className="text-[#003057] font-sans font-bold text-xl">Center for Scientific</div>
                <div className="text-[#003057] font-sans font-bold text-xl">Software Engineering</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <NavLink href="/" current={location === "/"}>Home</NavLink>
            <NavLink href="/projects" current={location.startsWith("/projects")}>Projects</NavLink>
            <a
              href="https://ssecenter.cc.gatech.edu/people/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003057] hover:text-[#B3A369] transition duration-150 ease-in-out"
            >
              Team
            </a>
            <a
              href="https://ssecenter.cc.gatech.edu/events/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003057] hover:text-[#B3A369] transition duration-150 ease-in-out"
            >
              Events
            </a>
            <a
              href="https://ssecenter.cc.gatech.edu/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003057] hover:text-[#B3A369] transition duration-150 ease-in-out"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden text-[#003057]"
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  current: boolean;
  children: React.ReactNode;
}

function NavLink({ href, current, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${current
        ? 'text-[#B3A369] font-medium'
        : 'text-[#003057] hover:text-[#B3A369]'
        } transition duration-150 ease-in-out`}
    >
      {children}
    </Link>
  );
}
