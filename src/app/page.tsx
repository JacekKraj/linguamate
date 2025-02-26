import { PageHeader } from '@/components/common/pageHeader/PageHeader';
import { HomePageArticleLinks } from '@/components/homePage/homePageArticeLinks/HomePageArticleLinks';
import { getHomePageMetadata } from '@/utils/metadata/getHomePageMetadata';

export function generateMetadata() {
  return getHomePageMetadata();
}

export default function Page() {
  return (
    <>
      <PageHeader>
        Explaining alternative ways of learning languages. Forget about boring grammar and textbooks
        to become a real language master.
      </PageHeader>
      <HomePageArticleLinks />
    </>
  );
}
