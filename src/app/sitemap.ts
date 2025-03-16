import { articlesData } from '@/utils/articleData/articles';
import { PATHS } from '@/utils/common/urls';
import { getMetadataURLBase } from '@/utils/metadata/utils';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const metadataBase = getMetadataURLBase();

  const latestArticleTimestamp = Object.values(articlesData).sort(
    (a, b) => b.publicationTimestamp - a.publicationTimestamp,
  )[0].publicationTimestamp;

  const articleLinks = Object.values(articlesData).map(({ url, modificationTimestamp }) => {
    return {
      url: `${metadataBase}${PATHS.ARTICLES}/${url}`,
      lastModified: new Date(modificationTimestamp),
      changeFrequency: 'yearly' as const,
      priority: 1,
    };
  });

  return [
    {
      url: metadataBase,
      lastModified: new Date(latestArticleTimestamp),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${metadataBase}${PATHS.ARTICLES}`,
      lastModified: new Date(latestArticleTimestamp),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...articleLinks,
  ];
}
