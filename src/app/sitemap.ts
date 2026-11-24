import { MetadataRoute } from 'next';
import { places, locales } from '@/data/nearby';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || 'parquejipiro.com'}`;

  const paths = ["/nearby", ...places.map(p => "/nearby/"+p.slug)];
  const guides = paths.flatMap(path => {
    const languages=Object.fromEntries(locales.map(l=>[l, `${baseUrl}/${l}${path}`]));
    return Object.values(languages).map(url=>({url,alternates:{languages}}));
  });
  return [
    ...guides,
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          zh: `${baseUrl}/zh`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          zh: `${baseUrl}/zh`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          zh: `${baseUrl}/zh`,
          en: `${baseUrl}/en`,
        },
      },
    },
  ];
}
