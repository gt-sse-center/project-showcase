import React from "react";

interface FooterLinkProps {
  href: string;
  rel?: string;
  target?: string;
  children: React.ReactNode;
}

function FooterLink(
  { href, target = "", rel = "", children }: FooterLinkProps,
  isExternal: boolean = false
) {
  return (
    <li>
      <a
        href={href}
        target={target}
        rel={rel}
        className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
        {children}
      </a>
    </li>
  );
}

function ExternalFooterLink({ href, children }: FooterLinkProps) {
  return FooterLink(
    {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      children: children,
    },
    true
  );
}

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
      {children}
    </a>
  );
}

export { ExternalFooterLink, FooterLink, SocialLink };
