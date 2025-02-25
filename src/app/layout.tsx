import { Lato } from 'next/font/google';
import './global.css';
import { Layout } from '@/components/common/layout/Layout';
import { Header } from '@/components/common/headerNav/HeaderNav';
import { Footer } from '@/components/common/footer/Footer';

const lato = Lato({
  display: 'swap',
  weight: ['300', '400', '700'],
  subsets: ['latin-ext'],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={lato.className}>
      <head>
        <link rel="icon" href="/images/logoMini.png" sizes="any" />
      </head>
      <body>
        <Header />
        <Layout>{children}</Layout>
        <Footer />
      </body>
    </html>
  );
}
