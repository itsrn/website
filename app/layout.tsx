import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Ron Nuss",
  description: "I'm Ron, a Back-End Developer that turns ideas into projects.",
  icons: ["https://avatars.githubusercontent.com/u/132187043?v=4"],
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
          "min-h-screen fixed bg-[#F0F2AE] text-[#0D0D0D] " +
          playfairDisplay.className
        }
      >
        {children}
      </body>
    </html>
  );
}
