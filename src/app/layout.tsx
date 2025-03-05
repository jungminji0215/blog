import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Minji's Devlog",
  description: "민지의 개발 블로그",
  icons: {
    icon: "/favicon.ico",
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
