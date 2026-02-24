import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Lead Rise - Your leads go cold in 5 minutes. We respond in 5 seconds.",
  description: "Lead Rise connects with your leads the moment they enquire — via SMS or AI voice call — asks the right questions, and books qualified meetings into your calendar. Automatically.",
  keywords: "lead response, estate agents, lead automation, SMS automation, AI voice calls, lead qualification",
  authors: [{ name: "Lead Rise" }],
  openGraph: {
    title: "Lead Rise - Instant Lead Response Automation",
    description: "Connect with leads in 5 seconds via SMS or AI voice. Qualify and book meetings automatically.",
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
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
