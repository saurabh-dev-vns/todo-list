import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Todo List",
  description: "Organize tasks and boost productivity with a simple and intuitive to-do list app.",
  other:{
    "google-site-verification":"XTeqOxGr024MBV1Qbrc1aCAtw2usqitV-Pp3lBnegZ8",
    "viewport":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
  }
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  max-w-full relative overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
