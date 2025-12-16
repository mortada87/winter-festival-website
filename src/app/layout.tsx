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
  title: "Winter Festival - Magic, Stories & Cacao",
  description: "Join our magical winter festival featuring fortune telling, enchanting storytelling, and delicious cacao recipe challenges. A cozy celebration of the festive season.",
  keywords: "winter festival, fortune telling, storytelling, cacao recipes, winter celebration, festive season",
  openGraph: {
    title: "Winter Festival - Magic, Stories & Cacao",
    description: "Join our magical winter festival featuring fortune telling, enchanting storytelling, and delicious cacao recipe challenges.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
