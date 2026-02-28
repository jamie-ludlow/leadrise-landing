import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lead Rise - Never miss a lead again",
  description: "We respond to every lead in under 60 seconds—by phone and SMS—qualify them using AI, and book appointments straight into your diary. You focus on closing deals. We handle the rest.",
  keywords: "lead response, estate agents, lead automation, SMS automation, AI voice calls, lead qualification, appointment booking",
  authors: [{ name: "Lead Rise" }],
  openGraph: {
    title: "Lead Rise - Never miss a lead again",
    description: "We respond to every lead in under 60 seconds—by phone and SMS—qualify them using AI, and book appointments straight into your diary.",
    url: "https://www.leadrise.co.uk",
    siteName: "Lead Rise",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
