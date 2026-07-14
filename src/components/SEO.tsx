import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const SEO = ({ title, description, image, url, ogTitle, ogDescription }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (description) {
      updateMeta('description', description);
      updateMeta('og:description', ogDescription || description, true);
      updateMeta('twitter:description', ogDescription || description);
    } else if (ogDescription) {
      updateMeta('og:description', ogDescription, true);
      updateMeta('twitter:description', ogDescription);
    }

    updateMeta('og:title', ogTitle || title, true);
    updateMeta('twitter:title', ogTitle || title);
    updateMeta('og:type', 'website', true);
    updateMeta('og:site_name', 'Orvelo', true);
    updateMeta('og:locale', 'en_US', true);

    if (image) {
      updateMeta('og:image', image, true);
      updateMeta('og:image:secure_url', image, true);
      updateMeta('twitter:image', image);
    } else {
      // Default OG image if none provided
      const defaultImage = 'https://www.orvelo.ai/Orvelo.png';
      updateMeta('og:image', defaultImage, true);
      updateMeta('og:image:secure_url', defaultImage, true);
      updateMeta('og:image:type', 'image/png', true);
      updateMeta('og:image:width', '1200', true);
      updateMeta('og:image:height', '630', true);
      updateMeta('og:image:alt', 'Orvelo - AI Consulting and Execution Partner for Growing Businesses', true);
      updateMeta('twitter:image', defaultImage);
    }

    if (url) {
      updateMeta('og:url', url, true);
    } else if (typeof window !== 'undefined') {
      updateMeta('og:url', window.location.href, true);
    }

    updateMeta('twitter:card', 'summary_large_image');
  }, [title, description, image, url]);

  return null;
};
