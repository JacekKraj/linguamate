import { ArticleURLS } from '@/utils/articleData/articles';
import { BritishAccentArticleStructuredData } from '@/utils/structuredData/articles/BritishAccentStructuredData';
import { ImproveSpellingArticleStructuredData } from '@/utils/structuredData/articles/ImproveSpelingStructuredData';
import { MistakesInLearningArticleStructuredData } from '@/utils/structuredData/articles/MistakesInLearningStructuredData';

interface ArticleStructuredDataProps {
  articleURL: string;
}

export const ArticleStructuredData = ({ articleURL }: ArticleStructuredDataProps) => {
  if (articleURL === ArticleURLS.BRITISH_ACCENT) return <BritishAccentArticleStructuredData />;
  if (articleURL === ArticleURLS.IMPROVE_SPELLING) return <ImproveSpellingArticleStructuredData />;
  if (articleURL === ArticleURLS.MISTAKES_IN_LEARNING)
    return <MistakesInLearningArticleStructuredData />;

  return null;
};
