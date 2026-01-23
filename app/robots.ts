export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/app/*', '/api/*', '/_next/*', '/admin/*'],
      },
    ],
    // Keep relative to avoid env/type issues in tooling
    sitemap: '/sitemap.xml',
  }
}
