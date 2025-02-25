import { PATHS } from '@/utils/common/urls';
import { getMetadataURLBase } from '@/utils/metadata/utils';

interface HomeMetaTags {
  title: string;
  description: string;
  canonical: string;
  metadataBase: string;
}

const getMetadataTitle = () => 'Language blog - alternative approach to learn languages';

const getMetadataDescription = () =>
  'Learn about alternative apporaches to learn languages. Forget about boring grammar exercsises and heavy textbooks. See how to learn languages as native speakers do.';

const getCanonical = () => PATHS.HOME;

const generateHomePageMetaTags = (): HomeMetaTags => {
  const title = getMetadataTitle();
  const description = getMetadataDescription();
  const canonical = getCanonical();
  const metadataBase = getMetadataURLBase();

  return { title, description, metadataBase, canonical };
};

export async function getHomePageMetadata() {
  const meta = generateHomePageMetaTags();

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(meta.metadataBase),
    alternates: {
      canonical: meta.canonical,
    },
  };
}
