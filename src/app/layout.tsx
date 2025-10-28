import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Sanny – Officiell sida',
  description: 'Officiell webbplats för Sanny, svensk fighter och personlig tränare.',
  openGraph: {
    title: 'Sanny – Officiell sida',
    description: 'Svensk fighter och personlig tränare.',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
    siteName: 'Sanny',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    locale: 'sv_SE',
    type: 'website'
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-zinc-950 text-zinc-100`}
      >
        <Header />
        <main className="flex-1">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
