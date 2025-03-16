import { articlesData } from '@/utils/articleData/articles';

interface ArticleStructuredDataProps {
  articleURL: string;
}

export const ArticleStructuredData = ({ articleURL }: ArticleStructuredDataProps) => {
  const articleData = articlesData[articleURL];

  if (!articleData) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleData.name,
    image: [articleData.imageURL],
    datePublished: new Date(articleData.publicationTimestamp),
    dateModified: new Date(articleData.modificationTimestamp),
    author: [
      {
        '@type': 'Person',
        name: 'Jacek Krajewski',
        url: 'https://www.linkedin.com/in/jacek-krajewski-963415205/',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
