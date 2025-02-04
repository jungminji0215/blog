import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Tilt_Neon } from "next/font/google";

const font = Tilt_Neon({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minji's Devlog",
  description: "개발자 정민지의 개발 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={font.className}>
      <body className="flex flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
