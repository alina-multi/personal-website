import type { MetaTagsProps } from 'svelte-meta-tags';
import { seoConfig } from '$lib/data/seo.js';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
  noindex?: boolean;
  canonical?: string;
}

export function generateSEOTags(data: SEOData = {}): MetaTagsProps {
  const title = data.title || seoConfig.defaultTitle;
  const description = data.description || seoConfig.defaultDescription;
  const keywords = data.keywords || seoConfig.keywords;
  const image = data.image || seoConfig.image;
  const canonical = data.canonical ? `${seoConfig.siteUrl}${data.canonical}` : undefined;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    canonical,
    noindex: data.noindex,
    
    openGraph: {
      type: 'website',
      url: canonical || seoConfig.siteUrl,
      title,
      description,
      siteName: seoConfig.siteName,
      images: [
        {
          url: `${seoConfig.siteUrl}${image.url}`,
          alt: image.alt,
          width: image.width || 1200,
          height: image.height || 630,
          type: 'image/jpeg'
        }
      ]
    },

    twitter: {
      card: 'summary_large_image',
      site: seoConfig.social.twitter,
      creator: seoConfig.social.twitter,
      title,
      description,
      image: `${seoConfig.siteUrl}${image.url}`,
      imageAlt: image.alt
    },

    additionalMetaTags: [
      {
        name: 'author',
        content: seoConfig.author
      },
      {
        name: 'robots',
        content: data.noindex ? 'noindex, nofollow' : 'index, follow'
      },
      {
        name: 'googlebot',
        content: data.noindex ? 'noindex, nofollow' : 'index, follow'
      },
      {
        property: 'og:locale',
        content: 'en_US'
      },
      {
        name: 'theme-color',
        content: '#0d9488' // Teal color from your design
      }
    ],

    additionalLinkTags: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg'
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      }
    ]
  };
}

// JSON-LD structured data for better SEO
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: seoConfig.author,
    url: seoConfig.siteUrl,
    jobTitle: 'Frontend Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Arts.Center'
    },
    knowsAbout: [
      'Svelte',
      'SvelteKit', 
      'TypeScript',
      'JavaScript',
      'Frontend Development',
      'Web Development',
      'React',
      'Tailwind CSS'
    ],
    sameAs: [
      seoConfig.social.linkedin,
      seoConfig.social.github
    ]
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    author: {
      '@type': 'Person',
      name: seoConfig.author
    },
    inLanguage: 'en-US'
  };
}
