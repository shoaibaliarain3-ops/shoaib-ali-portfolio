import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shoaib Ali | AI & Web Developer",
  description:
    "Shoaib Ali — AI & Web Developer focused on Artificial Intelligence, Agentic AI, and modern web applications.",
  keywords: [
    "Shoaib Ali",
    "AI Developer",
    "Web Developer",
    "Artificial Intelligence",
    "Agentic AI",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
  ],
  openGraph: {
    title: "Shoaib Ali | AI & Web Developer",
    description:
      "Shoaib Ali — AI & Web Developer focused on Artificial Intelligence, Agentic AI, and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
