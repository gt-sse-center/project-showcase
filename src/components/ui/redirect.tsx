import { useEffect } from "react";
import { Redirect } from "wouter";

interface ExternalRedirectProps {
  to: string;
}

/**
 * Helper component to redirect to an external URL.
 *
 * @param to: The URL to open in a new window.
 * @returns A Redirect component to go back to the home page.
 */
export default function ExternalRedirect({ to }: ExternalRedirectProps) {
  useEffect(() => {
    window.open(
      to,
      "_blank" // <- This is what makes it open in a new window.
    );
  }, [to]);

  return <Redirect to="/" />;
}
