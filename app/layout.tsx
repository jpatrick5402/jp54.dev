import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next';
import Nav from './Nav'

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
  themeColor: '#ffffff', // Example: define a theme color
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${jetbrains.className} antialiased`}>
        <Nav />
        <video id="bg-video" autoPlay muted loop className="fixed blur-sm brightness-(--video-brightness) -z-1 object-cover h-full w-full">
          <source src="/typing.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
        {children}
      </body>
    </html>
  );
}
