import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next';
import Nav from '@components/Nav'

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Joseph Patrick",
  description: "A student forever and sometimes a teacher",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="bg-(--background)">
      <body className={`flex flex-col ${jetbrains.className} antialiased`}>
        <Nav />
        <div className="z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
