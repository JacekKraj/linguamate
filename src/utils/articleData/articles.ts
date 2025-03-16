import { FearOfSpeakingArticle } from '@/components/articles/articles/FearOfSpeaking';
import { ImproveSpellingArticle } from '@/components/articles/articles/ImproveSpelling';
import { MistakesInLearningArticle } from '@/components/articles/articles/MistakesInLearning';
import { SpeakBrittishAccentArticle } from '@/components/articles/articles/SpeakBrittishAccentArticle';

export enum ArticleURLS {
  BRITISH_ACCENT = 'how-to-speak-with-british-accent-2-home-exercises',
  MISTAKES_IN_LEARNING = 'common-mistakes-in-learning-a-language',
  IMPROVE_SPELLING = 'how-to-improve-your-spelling-5-home-exercises',
  FEAR_OF_SPEAKING = 'fear-of-speaking-english-how-to-overcome-it',
}

export enum ArticleNames {
  BRITISH_ACCENT = 'How to speak with a British accent: 2 home exercises',
  MISTAKES_IN_LEARNING = 'Common mistakes in learning a language',
  IMPROVE_SPELLING = 'How to improve your spelling: 5 home exercises',
  FEAR_OF_SPEAKING = 'Fear of speaking English: how to overcome it?',
}

export interface ArticleDataType {
  name: ArticleNames;
  publicationTimestamp: number;
  modificationTimestamp: number;
  minsRead: number;
  url: ArticleURLS;
  component: React.FC;
  metaDescription: string;
  imageURL: string;
}

export const articlesData: Record<string, ArticleDataType> = {
  [ArticleURLS.FEAR_OF_SPEAKING]: {
    name: ArticleNames.FEAR_OF_SPEAKING,
    publicationTimestamp: 1742116299205,
    modificationTimestamp: 1742116299205,
    minsRead: 6,
    url: ArticleURLS.FEAR_OF_SPEAKING,
    component: FearOfSpeakingArticle,
    metaDescription:
      'Are you afraid of speaking English? Here are some simple home exercises that can help you overcome your fear of making mistakes while speaking English.',
    imageURL:
      'https://linguolog.com/_next/image?url=%2Fimages%2Farticles%2FfearOfSpeaking.webp&w=1920&q=75',
  },
  [ArticleURLS.IMPROVE_SPELLING]: {
    name: ArticleNames.IMPROVE_SPELLING,
    publicationTimestamp: 1741632719302,
    modificationTimestamp: 1742116299205,
    minsRead: 7,
    url: ArticleURLS.IMPROVE_SPELLING,
    component: ImproveSpellingArticle,
    metaDescription:
      'Here are 5 simple home exercises that will help you improve your spelling. Stop focusing on grammar rules and discover real-life solutions that will bring lasting results.',
    imageURL:
      'https://linguolog.com/_next/image?url=%2Fimages%2Farticles%2FimproveSpelling.webp&w=1920&q=75',
  },
  [ArticleURLS.MISTAKES_IN_LEARNING]: {
    name: ArticleNames.MISTAKES_IN_LEARNING,
    publicationTimestamp: 1741283661560,
    modificationTimestamp: 1741283661560,
    minsRead: 6,
    url: ArticleURLS.MISTAKES_IN_LEARNING,
    component: MistakesInLearningArticle,
    metaDescription:
      'Learn about the most common mistakes in language learning. Find out which exercises to avoid and which ones can help you.',
    imageURL:
      'https://linguolog.com/_next/image?url=%2Fimages%2Farticles%2FcommonMistakes.webp&w=1920&q=75',
  },
  [ArticleURLS.BRITISH_ACCENT]: {
    name: ArticleNames.BRITISH_ACCENT,
    publicationTimestamp: 1740417160660,
    modificationTimestamp: 1740417160660,
    minsRead: 5,
    url: ArticleURLS.BRITISH_ACCENT,
    component: SpeakBrittishAccentArticle,
    metaDescription:
      'Explaining 2 simple home exercises that have helped thousands of people speak with a British accent.',
    imageURL:
      'https://linguolog.com/_next/image?url=%2Fimages%2Farticles%2FbritishAccent.webp&w=828&q=75',
  },
};
