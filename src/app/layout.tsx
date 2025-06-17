import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jungminji.com'),
  title: {
    default: "Minji's Devlog",
    template: "%s - Minji's Devlog",
  },
  description: '정민지의 기술 블로그',
  verification: {
    google: '8NjREOg8xfvS2aWwB51syCKjsf5dfjg9DljIFEiqJT8',
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
