import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Photo Feed App",
    template: "%s | Photo Feed App",
  },
  description:
    "A modern and scalable photo feed application built with Next.js App Router. Features include API routes, demo JSON data, internationalization (i18n), and a globalized responsive UI.",
  keywords: [
    "Next.js Photo Feed",
    "Next.js App Router",
    "Photo Gallery App",
    "Next.js API Routes",
    "i18n Next.js",
    "Tailwind CSS",
    "Responsive Photo Feed",
  ],
  authors: [{ name: "Liton Roy" }],
  creator: "Liton Roy",
  metadataBase: new URL("http://localhost:3000"), // production এ domain বসাবে
  openGraph: {
    title: "Photo Feed App",
    description:
      "A modern photo feed application built with Next.js, featuring API routes, demo data, and internationalization support.",
    url: "http://localhost:3000",
    siteName: "Photo Feed App",
    images: [
      {
        url: "/og-image.png", // public folder এ image রাখলে ভালো
        width: 1200,
        height: 630,
        alt: "Photo Feed App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Feed App",
    description:
      "A modern and scalable photo feed application built with Next.js App Router and Tailwind CSS.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
