import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "./Head";
import { MainProvider } from "./MainProvider";
import Header from "./Head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
