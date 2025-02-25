import { ArticleNames } from '@/utils/articleData/articles';
import { PATHS } from '@/utils/common/urls';
import { getMetadataURLBase } from '@/utils/metadata/utils';

interface ArticlesMetaTags {
  title: string;
  description: string;
  canonical: string;
  metadataBase: string;
}

const getMetadataTitle = () => 'Browse blog posts about alternative language learning methods';

const getMetadataDescription = () => `Browse posts like: ${ArticleNames.BRITISH_ACCENT};`;

const getCanonical = () => `/${PATHS.ARTICLES}`;

const generateArticlesPageMetaTags = (): ArticlesMetaTags => {
  const title = getMetadataTitle();
  const description = getMetadataDescription();
  const canonical = getCanonical();
  const metadataBase = getMetadataURLBase();

  return { title, description, metadataBase, canonical };
};

export async function getArticlesPageMetadata() {
  const meta = generateArticlesPageMetaTags();

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(meta.metadataBase),
    alternates: {
      canonical: meta.canonical,
    },
  };
}
