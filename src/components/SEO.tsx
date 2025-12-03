import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

export function SEO({
  title,
  description,
  keywords,
  canonical = "https://www.sagestoneinc.com",
  ogTitle,
  ogDescription,
  ogImage = "https://www.sagestoneinc.com/og-image.png",
  twitterTitle,
  twitterDescription,
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Canonical URL
    let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      document.head.appendChild(linkElement);
    }
    linkElement.setAttribute('href', canonical);

    // Open Graph tags
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:type', 'website', true);

    // Twitter tags
    updateMetaTag('twitter:title', twitterTitle || ogTitle || title, false);
    updateMetaTag('twitter:description', twitterDescription || ogDescription || description, false);
    updateMetaTag('twitter:image', ogImage, false);
    updateMetaTag('twitter:card', 'summary_large_image', false);
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription]);

  return null;
}
