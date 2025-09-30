import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import {FaExternalLinkSquareAlt} from 'react-icons/fa'

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Joseph Patrick",
  description: "A student forever and sometimes a teacher",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${jetbrains.className} antialiased`}>
        <nav className="flex bg-(--background) w-full pt-3 pb-3 gap-4 text-2xl font-bold items-center align-center justify-center">
          <Link className="flex m-auto" href='/'>ABOUT</Link>
          <Link className="flex m-auto" href='/projects'>PROJECTS</Link>
          <Link className="flex m-auto" href='https://store.jp54.dev'>STORAGE<FaExternalLinkSquareAlt className="m-auto p-1" /></Link>
          <Link className="flex m-auto" href='/photography'>PHOTOGRAPHY</Link>
        </nav>
        <video id="bg-video" autoPlay muted loop className="fixed blur-sm brightness-(--video-brightness) -z-1 object-cover h-full w-full">
          <source src="/typing.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
        {children}
      </body>
    </html>
  );
}
