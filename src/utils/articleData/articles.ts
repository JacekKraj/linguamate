import { ImproveSpellingArticle } from '@/components/articles/articles/ImproveSpelling';
import { MistakesInLearningArticle } from '@/components/articles/articles/MistakesInLearning';
import { SpeakBrittishAccentArticle } from '@/components/articles/articles/SpeakBrittishAccentArticle';

export enum ArticleURLS {
  BRITISH_ACCENT = 'how-to-speak-with-british-accent-2-home-exercises',
  MISTAKES_IN_LEARNING = 'common-mistakes-in-learning-a-language',
  IMPROVE_SPELLING = 'how-to-improve-your-spelling',
}

export enum ArticleNames {
  BRITISH_ACCENT = 'How to speak with a British accent: 2 home exercises',
  MISTAKES_IN_LEARNING = 'Common mistakes in learning a language',
  IMPROVE_SPELLING = 'How to improve your spelling?',
}

interface ArticleDataType {
  name: ArticleNames;
  publicationTimestamp: number;
  minsRead: number;
  url: ArticleURLS;
  component: React.FC;
}

export const articlesData: Record<string, ArticleDataType> = {
  [ArticleURLS.MISTAKES_IN_LEARNING]: {
    name: ArticleNames.MISTAKES_IN_LEARNING,
    publicationTimestamp: 1741283661560,
    minsRead: 6,
    url: ArticleURLS.MISTAKES_IN_LEARNING,
    component: MistakesInLearningArticle,
  },
  [ArticleURLS.BRITISH_ACCENT]: {
    name: ArticleNames.BRITISH_ACCENT,
    publicationTimestamp: 1740417160660,
    minsRead: 5,
    url: ArticleURLS.BRITISH_ACCENT,
    component: SpeakBrittishAccentArticle,
  },
  [ArticleURLS.IMPROVE_SPELLING]: {
    name: ArticleNames.IMPROVE_SPELLING,
    publicationTimestamp: Date.now(),
    minsRead: 4,
    url: ArticleURLS.IMPROVE_SPELLING,
    component: ImproveSpellingArticle,
  },
};
