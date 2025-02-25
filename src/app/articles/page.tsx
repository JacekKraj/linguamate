import { ArticleLinks } from '@/components/common/articleLinks/ArticleLinks';
import { PageHeader } from '@/components/common/pageHeader/PageHeader';
import { getArticlesPageMetadata } from '@/utils/metadata/getArticlesPageMetadata';

export function generateMetadata() {
  return getArticlesPageMetadata();
}

export default function Page() {
  return (
    <>
      <PageHeader>
        Browse all our articles explaining alternative approaches to learning languages.
      </PageHeader>
      <ArticleLinks isSeeMore={false} />
    </>
  );
}
