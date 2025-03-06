import { ArticleWrapper } from '@/components/articles/articleWrapper/ArticleWrapper';
import { PageHeader } from '@/components/common/pageHeader/PageHeader';
import { articlesData, ArticleURLS } from '@/utils/articleData/articles';

export const ImproveSpellingArticle = () => {
  const article = articlesData[ArticleURLS.IMPROVE_SPELLING];

  return (
    <ArticleWrapper>
      <PageHeader
        articleData={{
          publicationTimestamp: article.publicationTimestamp,
          minsRead: article.minsRead,
        }}
      >
        {article.name}
      </PageHeader>
    </ArticleWrapper>
  );
};
