import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono();

export const metadata: Metadata = {
  title: "Joseph Patrick",
  description: "An lifelong learner",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
