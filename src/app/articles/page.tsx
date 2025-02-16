import { ArticleLinks } from '@/components/common/articleLinks/ArticleLinks';
import { PageHeader } from '@/components/common/pageHeader/PageHeader';

export default function Page() {
  return (
    <>
      <PageHeader>
        Browse all our articles explaining allternative approaches of learning languages.
      </PageHeader>
      <ArticleLinks isSeeMore={false} />
    </>
  );
}
