import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.deeptrack.io'
  
  // Core Routes
  const coreRoutes = [
    {
      route: '',
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      route: '/media-use-case',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      route: '/finance-use-case',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      route: '/government-use-case',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Authentication Service Routes
  const authenticationRoutes = [
    {
      route: '/image-authentication',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      route: '/audio-authentication',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      route: '/text-detection',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Executive & Specialized Routes
  const specializedRoutes = [
    {
      route: '/executive-identity-shielding',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Content & Information Routes
  const contentRoutes = [
    {
      route: '/events',
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      route: '/company-and-culture',
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      route: '/about',
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Supporting Routes
  const supportingRoutes = [
    {
      route: '/contact',
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      route: '/privacy',
      changeFrequency: 'yearly' as const,
      priority: 0.1,
    },
    {
      route: '/terms',
      changeFrequency: 'yearly' as const,
      priority: 0.1,
    },
  ]

  // Blog Routes (Dynamic)
  const blogRoutes = [
    {
      route: '/blogs/the-age-of-coordinated-attack',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      route: '/blogs/the-state-of-ai',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      route: '/blogs/the-gotham-blog',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Combine all routes
  const allRoutes = [
    ...coreRoutes,
    ...authenticationRoutes,
    ...specializedRoutes,
    ...contentRoutes,
    ...supportingRoutes,
    ...blogRoutes,
  ]

  // Transform routes to sitemap format
  return allRoutes.map(({ route, changeFrequency, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  }))
}