import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

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
        <nav className="flex bg-(--background) w-full h-10 gap-4 text-2xl font-bold items-center align-center justify-center">
          <Link className="flex m-auto" href='/'>ABOUT</Link>
          <Link className="flex m-auto" href='/projects'>PROJECTS</Link>
          <Link className="flex m-auto" href='https://store.jp54.dev'>STORAGE</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
