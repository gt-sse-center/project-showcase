import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import imgGtLogoColor from "/images/gt-logo-color.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  let closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src={imgGtLogoColor} alt="Georgia Tech Logo" className="h-10 mr-3" />
            <div className="text-[var(--gt-navy)] font-sans font-bold text-xl">
              Center for Scientific Software Engineering
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 items-center">{getMenuItems()}</nav>

        {/* Mobile Menu from here on.
            Only visible on smaller viewports
        */}
        <div className="flex lg:hidden">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden text-[var(--gt-navy)]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu">
            <Menu aria-hidden="true" className="h-6 w-6" />
          </Button>
        </div>
        <div
          className={`fixed inset-0 bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          {/* Close mobile menu button */}
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              onClick={closeMobileMenu}
              className="text-[var(--gt-navy)]"
              aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col items-center space-y-6 p-8">
            {getMenuItems("text-xl", true, closeMobileMenu)}
          </nav>
        </div>
      </nav>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  current: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  isMobile?: boolean;
}

function NavLink({ href, current, children, onClick, isMobile = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${
        current
          ? "text-[var(--gt-gold)] font-medium"
          : "text-[var(--gt-navy)] hover:text-[var(--gt-gold)]"
      }
    ${isMobile ? "text-xl" : ""} transition duration-150 ease-in-out`}>
      {children}
    </Link>
  );
}

/**
 * Helper function to get the menu items for a <nav> bar in the header.
 *
 * @param classNames Extra class names to add to <a> tags.
 * @param isMobile Flag indicating if the menu items are for a mobile menu.
 * @param closeMobileMenu Function to close the mobile menu.
 * @returns Returns the <nav> menu items for desktop or mobile based on flags.
 */
function getMenuItems(
  classNames: string = "",
  isMobile: boolean = false,
  closeMobileMenu?: () => void
) {
  const [location] = useLocation();
  return (
    <>
      <NavLink href="/" current={location === "/"} onClick={closeMobileMenu} isMobile={isMobile}>
        Home
      </NavLink>
      <NavLink
        href="/projects"
        current={location.startsWith("/projects")}
        onClick={closeMobileMenu}
        isMobile={isMobile}>
        Projects
      </NavLink>
      <a
        href="https://ssecenter.cc.gatech.edu/people/"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-[var(--gt-navy)] hover:text-[var(--gt-gold)] ${classNames} transition duration-150 ease-in-out`}
        onClick={closeMobileMenu}>
        Team
      </a>
      <a
        href="https://ssecenter.cc.gatech.edu/events/"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-[var(--gt-navy)] hover:text-[var(--gt-gold)] ${classNames} transition duration-150 ease-in-out`}
        onClick={closeMobileMenu}>
        Events
      </a>
      <a
        href="https://ssecenter.cc.gatech.edu/contact/"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-[var(--gt-navy)] hover:text-[var(--gt-gold)] ${classNames} transition duration-150 ease-in-out`}
        onClick={closeMobileMenu}>
        Contact
      </a>
    </>
  );
}
