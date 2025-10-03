import { useEffect } from 'react';

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export function useSEO(seoData: SEOData) {
  useEffect(() => {
    // Update document title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          element.setAttribute('property', selector.split('"')[1]);
        } else if (selector.includes('name=')) {
          element.setAttribute('name', selector.split('"')[1]);
        }
        element.content = content;
        document.head.appendChild(element);
      }
    };

    // Update meta tags
    if (seoData.description) {
      updateMetaTag('meta[name="description"]', seoData.description);
    }
    
    if (seoData.keywords) {
      updateMetaTag('meta[name="keywords"]', seoData.keywords);
    }

    // Update Open Graph tags
    if (seoData.ogTitle) {
      updateMetaTag('meta[property="og:title"]', seoData.ogTitle);
    }
    
    if (seoData.ogDescription) {
      updateMetaTag('meta[property="og:description"]', seoData.ogDescription);
    }
    
    if (seoData.ogImage) {
      updateMetaTag('meta[property="og:image"]', seoData.ogImage);
    }
    
    if (seoData.ogUrl) {
      updateMetaTag('meta[property="og:url"]', seoData.ogUrl);
    }

    // Update Twitter Card tags
    if (seoData.twitterTitle) {
      updateMetaTag('meta[name="twitter:title"]', seoData.twitterTitle);
    }
    
    if (seoData.twitterDescription) {
      updateMetaTag('meta[name="twitter:description"]', seoData.twitterDescription);
    }
    
    if (seoData.twitterImage) {
      updateMetaTag('meta[name="twitter:image"]', seoData.twitterImage);
    }

    // Update canonical link
    if (seoData.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonicalLink) {
        canonicalLink.href = seoData.canonical;
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        canonicalLink.href = seoData.canonical;
        document.head.appendChild(canonicalLink);
      }
    }
  }, [seoData]);
}

// Default SEO data for the site
export const defaultSEOData: SEOData = {
  title: 'SSEC Project Showcase | Scientific Software Engineering Center',
  description: 'Explore cutting-edge research projects from Georgia Tech\'s Scientific Software Engineering Center (SSEC). Discover innovative software solutions in AI/ML, computational science, and data visualization.',
  keywords: 'Georgia Tech, SSEC, Scientific Software Engineering, Research Projects, AI, Machine Learning, Computational Science, Data Visualization, Open Source',
  canonical: 'https://ssec-showcase.gatech.edu/',
  ogTitle: 'SSEC Project Showcase | Scientific Software Engineering Center',
  ogDescription: 'Explore cutting-edge research projects from Georgia Tech\'s Scientific Software Engineering Center (SSEC). Discover innovative software solutions in AI/ML, computational science, and data visualization.',
  ogImage: 'https://ssec-showcase.gatech.edu/project-images/gt-logo-color.png',
  ogUrl: 'https://ssec-showcase.gatech.edu/',
  twitterTitle: 'SSEC Project Showcase | Scientific Software Engineering Center',
  twitterDescription: 'Explore cutting-edge research projects from Georgia Tech\'s Scientific Software Engineering Center (SSEC).',
  twitterImage: 'https://ssec-showcase.gatech.edu/project-images/gt-logo-color.png',
};