export default function sitemap() {
  const baseUrl = 'https://ivanleguizamonproduc.vercel.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
