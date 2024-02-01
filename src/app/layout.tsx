import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer, Header, Navigation } from '@components';
import './globals.css';
import { Suspense } from 'react';
import { CATEGORIES_MAP } from '@constants';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    applicationName: 'Headlines',
    creator: 'Carlos Sardina',
    keywords: [
      'news',
      'headlines',
      'world',
      'latest',
      'breaking',
      ...Object.values(CATEGORIES_MAP).map((category) => category.label)
    ],
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://headlines.vercel.app'
    }
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <Suspense>
          <Header />
          <Navigation />
        </Suspense>
        <div className="flex flex-1 overflow-x-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
