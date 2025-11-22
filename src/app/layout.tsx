import type { Metadata } from "next";
import { Poppins, Playfair_Display,Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Animate from "@/components/sharedcomponents/Aos/Animate";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});
const arefRuqaaInk = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-aref-ruqaa-ink",
});
const outfit = Playfair_Display({
  weight:'400',
  subsets: ["latin"],
  variable: "--font-outfit",
});
export const metadata: Metadata = {
  title: "Mithra | Portfolio",
  description: "A creative portfolio built with elegant tones and Poppins font.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${arefRuqaaInk.variable} ${outfit.variable} antialiased`}
      >
        <Animate> {children} </Animate>
      </body>
    </html>
  );
}
