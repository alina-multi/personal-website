import { seoConfig } from '$lib/data/seo.js';

// Static pages in your website
const staticPages = [
  {
    url: '',
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 1.0
  },
  {
    url: '/resume',
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly', 
    priority: 0.8
  }
];

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(page => `
          <url>
            <loc>${seoConfig.siteUrl}${page.url}</loc>
            <lastmod>${page.lastModified}</lastmod>
            <changefreq>${page.changeFrequency}</changefreq>
            <priority>${page.priority}</priority>
          </url>
        `)
        .join('')}
    </urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=86400' // Cache for 24 hours
    }
  });
}
