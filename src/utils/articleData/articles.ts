export enum ArticleURLS {
  BRITISH_ACCENT = 'how-to-speak-with-british-accent-2-home-exercises',
}

export enum ArticleNames {
  BRITISH_ACCENT = 'How to speak with a British accent: 2 home exercises',
}

interface ArticleDataType {
  name: ArticleNames;
  publicationTimestamp: number;
  minsRead: number;
  url: ArticleURLS;
}

export const articlesData: Record<string, ArticleDataType> = {
  [ArticleURLS.BRITISH_ACCENT]: {
    name: ArticleNames.BRITISH_ACCENT,
    publicationTimestamp: 1740417160660,
    minsRead: 5,
    url: ArticleURLS.BRITISH_ACCENT,
  },
};
