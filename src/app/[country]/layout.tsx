import { Countries } from '@/utils/common/countries';
import { notFound } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ country: Countries }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const country = (await params).country;

  if (!Object.values(Countries).includes(country)) notFound();

  return <>{children}</>;
}
