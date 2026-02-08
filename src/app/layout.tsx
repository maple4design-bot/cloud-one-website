import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keep these if they exist, or remove if not needed.
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Cloud One Technologies',
    default: 'Cloud One Technologies | Dubai Web Design & Development',
  },
  description: "Cloud One Technologies - Premier Web Design, Development, App Design, and Graphics Design services in Dubai. Transform your business with our digital solutions.",
  keywords: ['Web Design Dubai', 'Web Development', 'App Design', 'Graphics Design', 'SEO', 'Cloud One Technologies'],
  openGraph: {
    title: 'Cloud One Technologies | Dubai Web Design & Development',
    description: 'Premier Web Design, Development, App Design, and Graphics Design services in Dubai.',
    url: 'https://cloudone.ae',
    siteName: 'Cloud One Technologies',
    images: [
      {
        url: 'https://placehold.co/1200x630/1e293b/FFF?text=Cloud+One+Technologies', // Replace with actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
