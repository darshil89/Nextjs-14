import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next-revision-Darsh",
  description: "A quick revision of Next.js 14.0.1",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://next-revision-darsh.vercel.app/",
    siteName: "next-revision-Darsh",
    images: [
      {
        url: "/images/coverimage.jpg",
        width: 1260,
        height: 800,
        alt: "image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
