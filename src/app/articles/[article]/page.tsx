import { articlesData, ArticleURLS } from '@/utils/articleData/articles';
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

  const matchingArticleURL = Object.values(ArticleURLS).find((url) => url === articleURL);

  if (matchingArticleURL) return articlesData[matchingArticleURL].component({ props: {} });

  notFound();
}
