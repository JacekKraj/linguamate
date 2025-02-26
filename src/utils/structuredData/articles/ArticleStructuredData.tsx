import { ArticleURLS } from '@/utils/articleData/articles';
import { BritishAccentArticleStructuredData } from '@/utils/structuredData/articles/BritishAccent.StructuredData';

interface ArticleStructuredDataProps {
  articleURL: string;
}

export const ArticleStructuredData = ({ articleURL }: ArticleStructuredDataProps) => {
  if (articleURL === ArticleURLS.BRITISH_ACCENT) return <BritishAccentArticleStructuredData />;

  return null;
};
