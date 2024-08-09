import type { Metadata } from "next";
import {  Poppins  } from "next/font/google"; // Import Crete Round font
import "./globals.css";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})
 
export const metadata: Metadata = {
  title: "Veer social media ",
  description: "Our fantanstic social media app , use it free for life time ",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className}`}>{children}</body>
    </html>
  );
}
