/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://silveradosdogpark.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*', '/private/*', '/_next/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/', '/_next/']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/']
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/']
      }
    ],
    additionalSitemaps: [
      'https://silveradosdogpark.com/server-sitemap.xml'
    ]
  },
  transform: async (config, path) => {
    // Custom transform function for dynamic priorities
    const defaultPriority = config.priority;
    const defaultChangefreq = config.changefreq;

    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
      };
    }

    if (path === '/events') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.9,
      };
    }

    if (path === '/menu') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
      };
    }

    return {
      loc: path,
      changefreq: defaultChangefreq,
      priority: defaultPriority,
    };
  },
};
