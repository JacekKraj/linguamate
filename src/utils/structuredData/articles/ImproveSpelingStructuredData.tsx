import { articlesData, ArticleURLS } from '@/utils/articleData/articles';

export const ImproveSpellingArticleStructuredData = () => {
  const article = articlesData[ArticleURLS.IMPROVE_SPELLING];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.name,
    image: [
      'https://linguolog.com/_next/image?url=%2Fimages%2Farticles%2FimproveSpelling.webp&w=1920&q=75',
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
