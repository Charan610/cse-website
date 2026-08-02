import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CSE Career & DSA Roadmap Guide | Lumina Developer Edition",
  description: "A cinematic interactive roadmap for CSE engineering students covering DSA, Web Development, Core CS fundamentals, company tiers, and career guidance.",
  keywords: ["DSA", "Web Development", "Computer Science", "CSE Roadmap", "SRKR", "JNTUK", "Engineering Placement", "Software Engineering"],
  authors: [{ name: "Charan" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#051424] text-[#d4e4fa] font-sans selection:bg-[#4de8f0]/30 selection:text-[#4de8f0]">
        {children}
      </body>
    </html>
  );
}
