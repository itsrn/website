import "./globals.css";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ron Nuss",
  description: "I'm Ron, a back-end developer from Israel.",
  icons: ["https://avatars.githubusercontent.com/u/132187043?v=4"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
