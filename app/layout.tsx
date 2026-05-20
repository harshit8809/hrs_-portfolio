import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Harshit Kumar — React Native & Frontend Engineer",
  description:
    "React Native Developer with 3+ years of experience building scalable cross-platform mobile applications and modern web applications.",
  openGraph: {
    title: "Harshit Kumar — Portfolio",
    description: "React Native + Frontend Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${spaceMono.variable} font-syne bg-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
