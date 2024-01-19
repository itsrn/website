import "./globals.css";
import type { Metadata } from "next";
import localFonts from "next/font/local";

export const metadata: Metadata = {
  title: "Ron Nuss",
  description: "I'm Ron, 16 years old, full-stack developer.",
  icons: ["https://avatars.githubusercontent.com/u/132187043?v=4"],
};

const websiteFont = localFonts({
  src: "./Font.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"min-h-screen bg-neutral-950 " + websiteFont.className}>
        <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {children}
      </body>
    </html>
  );
}
