import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'wouter';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [location] = useLocation();

  // Close the menu when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location, isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="flex justify-end p-4">
        <Button
          variant="ghost"
          onClick={onClose}
          className="text-[var(--gt-navy)]"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex flex-col items-center space-y-6 p-8">
        <MobileNavLink href="/" current={location === "/"} onClick={onClose}>Home</MobileNavLink>
        <MobileNavLink href="/projects" current={location.startsWith("/projects")} onClick={onClose}>Projects</MobileNavLink>
        <a
          href="https://ssecenter.cc.gatech.edu/people/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--gt-navy)] hover:text-[var(--gt-gold)] text-xl transition duration-150 ease-in-out"
          onClick={onClose}
        >
          Team
        </a>

        <a
          href="https://ssecenter.cc.gatech.edu/events/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--gt-navy)] hover:text-[var(--gt-gold)] text-xl transition duration-150 ease-in-out"
          onClick={onClose}
        >
          Events
        </a>

        <a
          href="https://ssecenter.cc.gatech.edu/contact/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--gt-navy)] hover:text-[var(--gt-gold)] text-xl transition duration-150 ease-in-out"
          onClick={onClose}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

interface MobileNavLinkProps {
  href: string;
  current: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function MobileNavLink({ href, current, onClick, children }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${current
        ? 'text-[var(--gt-gold)] font-medium'
        : 'text-[var(--gt-navy)] hover:text-[var(--gt-gold)]'}
        text-xl transition duration-150 ease-in-out`}
    >
      {children}
    </Link>
  );
}
