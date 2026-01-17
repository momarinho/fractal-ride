import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://doeframework.com';

    // Static pages
    const staticPages = [
        '',
        '/produtos',
        '/checkout',
        '/termos',
        '/privacidade',
    ];

    // Product pages
    const productSlugs = [
        'seo-calculator',
        'lead-scraper',
        'proposal-engine',
        'research-dossier',
    ];

    const staticRoutes = staticPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const productRoutes = productSlugs.map((slug) => ({
        url: `${baseUrl}/produtos/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...productRoutes];
}
