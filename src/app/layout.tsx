import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TopNavBar } from "@/components/TopNavBar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BharatPCPrice - Real-time Hardware Intelligence",
  description: "Find Your Perfect PC Build. Instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-surface text-on-surface font-body-md antialiased relative min-h-screen flex flex-col"
      >
        <div className="bg-pattern"></div>
        <div className="bg-grid"></div>
        <TopNavBar />
        <div className="flex-1 flex flex-col w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
