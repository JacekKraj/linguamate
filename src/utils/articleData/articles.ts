import { ImproveSpellingArticle } from '@/components/articles/articles/ImproveSpelling';
import { MistakesInLearningArticle } from '@/components/articles/articles/MistakesInLearning';
import { SpeakBrittishAccentArticle } from '@/components/articles/articles/SpeakBrittishAccentArticle';

export enum ArticleURLS {
  BRITISH_ACCENT = 'how-to-speak-with-british-accent-2-home-exercises',
  MISTAKES_IN_LEARNING = 'common-mistakes-in-learning-a-language',
  IMPROVE_SPELLING = 'how-to-improve-your-spelling-5-home-exercises',
}

export enum ArticleNames {
  BRITISH_ACCENT = 'How to speak with a British accent: 2 home exercises',
  MISTAKES_IN_LEARNING = 'Common mistakes in learning a language',
  IMPROVE_SPELLING = 'How to improve your spelling: 5 home exercises',
}

interface ArticleDataType {
  name: ArticleNames;
  publicationTimestamp: number;
  minsRead: number;
  url: ArticleURLS;
  component: React.FC;
  metaDescription: string;
}

export const articlesData: Record<string, ArticleDataType> = {
  [ArticleURLS.MISTAKES_IN_LEARNING]: {
    name: ArticleNames.MISTAKES_IN_LEARNING,
    publicationTimestamp: 1741283661560,
    minsRead: 6,
    url: ArticleURLS.MISTAKES_IN_LEARNING,
    component: MistakesInLearningArticle,
    metaDescription:
      'Learn about the most common mistakes in language learning. Find out which exercises to avoid and which ones can help you.',
  },
  [ArticleURLS.BRITISH_ACCENT]: {
    name: ArticleNames.BRITISH_ACCENT,
    publicationTimestamp: 1740417160660,
    minsRead: 5,
    url: ArticleURLS.BRITISH_ACCENT,
    component: SpeakBrittishAccentArticle,
    metaDescription:
      'Explaining 2 simple home exercises that have helped thousands of people speak with a British accent.',
  },
  [ArticleURLS.IMPROVE_SPELLING]: {
    name: ArticleNames.IMPROVE_SPELLING,
    publicationTimestamp: 1741632719302,
    minsRead: 7,
    url: ArticleURLS.IMPROVE_SPELLING,
    component: ImproveSpellingArticle,
    metaDescription:
      'Here are 5 simple home exercises that will help you improve your spelling. Stop focusing on grammar rules and discover real-life solutions that will bring lasting results.',
  },
};
