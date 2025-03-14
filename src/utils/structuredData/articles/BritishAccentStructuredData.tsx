import { articlesData, ArticleURLS } from '@/utils/articleData/articles';

export const BritishAccentArticleStructuredData = () => {
  const article = articlesData[ArticleURLS.BRITISH_ACCENT];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.name,
    image: [
      'https://linguolog.com/_next/image?url=%2Fimages%2Farticles%2FbritishAccent.webp&w=828&q=75',
    ],
    datePublished: new Date(article.publicationTimestamp),
    dateModified: new Date(article.publicationTimestamp),
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
