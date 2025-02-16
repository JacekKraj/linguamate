import { PageHeader } from '@/components/common/pageHeader/PageHeader';
import { HomePageArticleLinks } from '@/components/homePage/homePageArticeLinks/HomePageArticleLinks';

export default function Page() {
  return (
    <>
      <PageHeader>
        Explaining an alternative ways of learning languages. Forget about grammar and textbooks to
        become real language master.
      </PageHeader>
      <HomePageArticleLinks />
    </>
  );
}
