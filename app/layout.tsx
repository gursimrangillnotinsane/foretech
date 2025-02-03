import type { Metadata } from "next";
import {
  Oswald, Gravitas_One
  , Domine
} from "next/font/google";
import "./globals.css";
import 'lenis/dist/lenis.css'
import CustomCursor from '@/components/customCursour'
import Script from "next/script";

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
  title: "ForeStep Infotech | We build solutions",
  description: "Foretech Infotech is a software development company, we build affordable software and websites for businesses and individuals ",
  keywords: "Forestep Infotech, software development, web development, mobile app development, software development company, software development company in Canada, software development company in Alberta, software development company in Edmonton",
  openGraph: {
    title: "Forestep Infotech - Software Development Company",
    description: "We build high-quality software solutions for businesses and individuals.",
    url: "https://forestepinfotech.com",
    type: "website",
    images: [
      {
        url: "https://forestepinfotech.com/og-image.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Forestep Infotech - Software Development Company",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Forestep Infotech - Software Development Company",
    description: "We build high-quality software solutions for businesses and individuals.",
    images: ["https://forestepinfotech.com.com/og-image.jpg"], // Replace with actual image URL
  },
  robots: {
    index: true,  // Allow search engine indexing
    follow: true, // Allow following links
  },
  // Canonical URL (for SEO)
  alternates: {
    canonical: "https://forestepinfotech.com",
  },
  icons: {
    icon: "/favicon.ico", // Standard favicon
    apple: "/apple-touch-icon.png", // Add your Apple touch icon here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Forestep Infotech",
              "url": "https://forestepinfotech.com",
              "logo": "https://forestepinfotech.com/logo.png", // Replace with your actual logo
              "description": "We specialize in custom software, web development, and mobile app solutions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3317 11th Ave NW",
                "addressLocality": "Edmonton",
                "addressRegion": "AB",
                "postalCode": "T6T 2C9",
                "addressCountry": "Canada"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-780-993-1330",
                "contactType": "customer service",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61560455467426&mibextid=wwXIfr&rdid=qv2RywwsDf3GIhMd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18eWZ5LKG2%2F%3Fmibextid%3DwwXIfr",
                "https://www.instagram.com/forestepinfotech/",
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${oswald.variable} ${GravitasOne.variable} ${domine.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
