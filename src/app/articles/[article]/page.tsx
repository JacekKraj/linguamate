import { SpeakBrittishAccentArticle } from '@/components/articles/articles/SpeakBrittishAccentArticle';
import { ArticleURLS } from '@/utils/articleData/articles';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ article: string }>;
}

export default async function Page(props: PageProps) {
  const articleName = (await props.params).article;

  if (articleName === ArticleURLS.BRITISH_ACCENT) return <SpeakBrittishAccentArticle />;

  notFound();
}
