import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jungminji.com'),
  title: "Minji's Devlog",
  description: '정민지의 기술 블로그',
  verification: {
    google: '8NjREOg8xfvS2aWwB51syCKjsf5dfjg9DljIFEiqJT8',
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    title: "Minji's Devlog",
    description: '정민지의 기술 블로그',
    url: 'https://www.jungminji.com',
    siteName: "Minji's Devlog",
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: '정민지 이미지',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex flex-col font-content">
        <Header />
        <main className="mb-20 grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
