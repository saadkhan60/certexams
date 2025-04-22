import type { Metadata } from "next";
import {Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const hanken_grotesk = Hanken_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "CertExams",
  description: "Get certified in just 12 days with our comprehensive study materials, practice exams, and expert guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hanken_grotesk.className}>
      <body
        className={`antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}