import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Glorx | We Build Digital Products That Scale",
  description: "Websites, Software, AI Agents, and Marketing — built by founders, for founders. Glorx is a digital agency for international clients.",
  openGraph: {
    title: "Glorx | We Build Digital Products That Scale",
    description: "Websites, Software, AI Agents, and Marketing — built by founders, for founders. Glorx is a digital agency for international clients.",
    url: "https://glorx.com",
    siteName: "Glorx",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
