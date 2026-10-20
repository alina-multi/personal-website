<script lang="ts">
  import { seoConfig } from '#lib/data/seo.js';
  
  interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    canonical?: string;
    noindex?: boolean;
  }

  let { 
    title = seoConfig.defaultTitle,
    description = seoConfig.defaultDescription, 
    keywords = seoConfig.keywords,
    image = seoConfig.image.url,
    canonical,
    noindex = false
  }: SEOProps = $props();

  const keywordsString = $derived(keywords.join(', '));
  const imageUrl = $derived(`${seoConfig.siteUrl}${image}`);
  const canonicalUrl = $derived(
    canonical ? `${seoConfig.siteUrl}${canonical}` : seoConfig.siteUrl
  );

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: seoConfig.author,
    url: seoConfig.siteUrl,
    jobTitle: 'Frontend Developer',
    address: [
      {
        '@type': 'PostalAddress',
        addressCountry: 'Portugal'
      },
      {
        '@type': 'PostalAddress',
        addressCountry: 'Ukraine'
      }
    ],
    knowsAbout: [
      'TypeScript',
      'Svelte',
      'Svelte 5',
      'SvelteKit',
      'React',
      'Adobe Experience Manager',
      'AEM Frontend Developer',
      'Accessibility',
      'SEO'
    ],
    sameAs: [seoConfig.social.linkedin, seoConfig.social.github]
  };

  const websiteSchema = {
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

  const personJsonLd = JSON.stringify(personSchema).replace(/</g, '\\u003c');
  const websiteJsonLd = JSON.stringify(websiteSchema).replace(/</g, '\\u003c');
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywordsString} />
  <meta name="author" content={seoConfig.author} />
  <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
  <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
  
  {#if canonical}
    <link rel="canonical" href={canonicalUrl} />
  {/if}

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:alt" content={seoConfig.image.alt} />
  <meta property="og:image:width" content={seoConfig.image.width.toString()} />
  <meta property="og:image:height" content={seoConfig.image.height.toString()} />
  <meta property="og:site_name" content={seoConfig.siteName} />
  <meta property="og:locale" content="en_US" />

  <!-- General Social Media (works for Instagram, LinkedIn, etc.) -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={imageUrl} />
  <meta property="twitter:image:alt" content={seoConfig.image.alt} />

  <!-- Structured Data -->
  {@html `<script type="application/ld+json">${personJsonLd}</script>`}
  {@html `<script type="application/ld+json">${websiteJsonLd}</script>`}
</svelte:head>
