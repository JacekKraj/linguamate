import { ArticleURLS, articlesData } from '@/utils/articleData/articles';
import { PATHS } from '@/utils/common/urls';
import { getMetadataURLBase } from '@/utils/metadata/utils';

interface ArticleMetaTags {
  title: string;
  description: string;
  canonical: string;
  metadataBase: string;
}

const getMetadataTitle = (articleURL: string) => articlesData[articleURL].name || '';

const getMetadataDescription = (articleURL: string) => {
  if (articleURL === ArticleURLS.BRITISH_ACCENT)
    return 'Explaining 2 simple home exercises that have helped thousands of people speak with a British accent.';

  if (articleURL === ArticleURLS.MISTAKES_IN_LEARNING)
    return 'Learn about the most common mistakes in language learning. Find out which exercises to avoid and which ones can help you.';

  return '';
};

const getCanonical = (articleURL: string) => `/${PATHS.ARTICLES}/${articleURL}`;

const generateArticlePageMetaTags = (articleURL: string): ArticleMetaTags => {
  const title = getMetadataTitle(articleURL);
  const description = getMetadataDescription(articleURL);
  const canonical = getCanonical(articleURL);
  const metadataBase = getMetadataURLBase();

  return { title, description, metadataBase, canonical };
};

export async function getArticlePageMetadata(articleURL: string) {
  const meta = generateArticlePageMetaTags(articleURL);

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(meta.metadataBase),
    alternates: {
      canonical: meta.canonical,
    },
  };
}
