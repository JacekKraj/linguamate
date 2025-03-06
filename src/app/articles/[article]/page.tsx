import { MistakesInLearningArticle } from '@/components/articles/articles/MistakesInLearning';
import { SpeakBrittishAccentArticle } from '@/components/articles/articles/SpeakBrittishAccentArticle';
import { ArticleURLS } from '@/utils/articleData/articles';
import { getArticlePageMetadata } from '@/utils/metadata/getArticlePageMetadata';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ article: string }>;
}

export async function generateMetadata(props: PageProps) {
  const articleURL = (await props.params).article;

  return getArticlePageMetadata(articleURL);
}

export default async function Page(props: PageProps) {
  const articleURL = (await props.params).article;

  if (articleURL === ArticleURLS.BRITISH_ACCENT) return <SpeakBrittishAccentArticle />;
  if (articleURL === ArticleURLS.MISTAKES_IN_LEARNING) return <MistakesInLearningArticle />;

  notFound();
}
