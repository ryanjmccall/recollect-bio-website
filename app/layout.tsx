import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recollect Bio | Your Biological Operating System",
  description: "Recollect Bio identifies non-obvious platform targets that current models miss, turning unknown moonshots into clinical grade assets. Join our waitlist.",
  keywords: ["biotech", "drug discovery", "platform targets", "clinical assets", "research", "life sciences"],
  authors: [{ name: "Recollect Bio" }],
  openGraph: {
    title: "Recollect Bio | Your Biological Operating System",
    description: "We identify non-obvious platform targets that current models miss, and turn unknown moonshots into clinical grade assets.",
    type: "website",
    locale: "en_US",
    siteName: "Recollect Bio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recollect Bio | Your Biological Operating System",
    description: "We identify non-obvious platform targets that current models miss, and turn unknown moonshots into clinical grade assets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
