import {Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { generateMetadata } from "@/lib/generate-metadata";

const hanken_grotesk = Hanken_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata= generateMetadata()

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