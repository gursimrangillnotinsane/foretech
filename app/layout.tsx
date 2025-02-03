import type { Metadata } from "next";
import {
  Oswald, Gravitas_One
  , Domine
} from "next/font/google";
import "./globals.css";
import 'lenis/dist/lenis.css'
import CustomCursor from '@/components/customCursour'

const oswald = Oswald({
  variable: "--font-Oswald",
  subsets: ["latin"],
});

const GravitasOne = Gravitas_One({
  variable: "--font-gravitas-one",
  subsets: ["latin"],
  weight: "400"
});

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Forestep Infotech",
  description: "Forestep Infotech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${GravitasOne.variable} ${domine.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
