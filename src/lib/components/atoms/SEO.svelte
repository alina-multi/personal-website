<script lang="ts">
  import { seoConfig } from '$lib/data/seo.js';
  
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

  const fullTitle = title === seoConfig.defaultTitle ? title : `${title} | ${seoConfig.siteName}`;
  const keywordsString = keywords.join(', ');
  const imageUrl = `${seoConfig.siteUrl}${image}`;
  const canonicalUrl = canonical ? `${seoConfig.siteUrl}${canonical}` : seoConfig.siteUrl;

  // JSON-LD structured data
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const personSchema = {
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
      seoConfig.social.instagram,
      seoConfig.social.linkedin,
      seoConfig.social.github,
      seoConfig.social.telegram
    ]
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{fullTitle}</title>
  <meta name="title" content={fullTitle} />
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
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:alt" content={seoConfig.image.alt} />
  <meta property="og:image:width" content={seoConfig.image.width.toString()} />
  <meta property="og:image:height" content={seoConfig.image.height.toString()} />
  <meta property="og:site_name" content={seoConfig.siteName} />
  <meta property="og:locale" content="en_US" />

  <!-- General Social Media (works for Instagram, LinkedIn, etc.) -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={fullTitle} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={imageUrl} />
  <meta property="twitter:image:alt" content={seoConfig.image.alt} />

  <!-- Structured Data -->
  <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
  <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
</svelte:head>
