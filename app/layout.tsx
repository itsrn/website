import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Ron Nuss",
  description: "I'm Ron, a Back-End Developer that turns ideas into projects.",
  icons: ["./favicon.ico"],
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "min-h-screen bg-[#F2F2F2] text-[#403F3E] " +
          playfairDisplay.className
        }
      >
        {children}
      </body>
    </html>
  );
}
