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
  title: "Bixor - Trading Interface Coming Soon",
  description: "Bixor Trading Interface will be launching soon. Experience the future of trading with advanced analytics, secure transactions, and lightning-fast execution.",
  keywords: ["Bixor", "Trading", "Interface", "Coming Soon", "Analytics", "Secure Trading"],
  authors: [{ name: "Bixor Team" }],
  creator: "Bixor",
  publisher: "Bixor",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/bixor-icon.png",
    shortcut: "/bixor-icon.png",
    apple: "/bixor-icon.png",
  },
  openGraph: {
    title: "Bixor - Trading Interface Coming Soon",
    description: "Experience the future of trading with our cutting-edge platform launching soon.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/bixor-icon.png",
        width: 120,
        height: 120,
        alt: "Bixor Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bixor - Trading Interface Coming Soon",
    description: "Experience the future of trading with our cutting-edge platform launching soon.",
    images: ["/bixor-icon.png"],
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
