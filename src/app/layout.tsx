import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Minji's Devlog",
  description: "웹 개발자 정민지의 기술 블로그",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    title: "Minji's Devlog",
    description: "웹 개발자 정민지의 기술 블로그",
    url: "https://www.jungminji.com/",
    siteName: "Minji's Devlog",
    images: [
      {
        url: "/jungminji.png",
        width: 1200,
        height: 630,
        alt: "jungminji image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex flex-col font-content">
        <Header />
        <main className="grow mb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
