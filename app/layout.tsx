import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ron",
  description: "i'm ron, a back-end developer from Israel.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ron.is-a.dev",
    title: "ron",
    description: "a back-end developer.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/132187043?v=10",
        width: 1200,
        height: 630,
        alt: "Ron",
      },
    ],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-neutral-900 text-neutral-100",
          inter.className,
          "font-sans selection:bg-white selection:text-neutral-900"
        )}
      >
        {children}
      </body>
    </html>
  );
}
