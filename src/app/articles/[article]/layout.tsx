import { ArticleStructuredData } from '@/utils/structuredData/ArticleStructuredData';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ article: string }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const articleURL = (await params).article;

  return (
    <>
      <ArticleStructuredData articleURL={articleURL} />
      {children}
    </>
  );
}
