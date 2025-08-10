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
  title: "LaundryPro - Professional Laundry & Dry Cleaning Services",
  description: "Professional laundry and dry cleaning services in Sydney. Quality care for your clothes, delivered to your door. Book online today!",
  keywords: "laundry, dry cleaning, Sydney, laundry service, ironing, express service",
  authors: [{ name: "LaundryPro" }],
  openGraph: {
    title: "LaundryPro - Professional Laundry & Dry Cleaning Services",
    description: "Professional laundry and dry cleaning services in Sydney. Quality care for your clothes, delivered to your door.",
    type: "website",
    locale: "en_AU",
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
