
import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import HeaderProvider from "@/context/HeaderProvider";

import Head from "next/head";
import MainPage from '@/app/main'

const primary_font = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // Choose weights you need
  variable: '--font-cormorant',
  display: 'swap'
})
const secondary_font = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'], // Choose weights you need
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "NIRA Diamond Jewelry | Luxury Engagement Rings & Fine Jewelry",
  description:
    "Discover NIRA Diamond Jewelry - exquisite engagement rings, fine diamond necklaces, earrings, and custom designs. Crafted with precision and elegance, our diamonds bring brilliance to every occasion. Shop luxury jewelry online today made with love and premium materials such as 9K/ 10K/ 14K/ 14K/ 18K/ 22K  Gold, Silver, Platinum. Free shipping & returns.",
  keywords: [
    "NIRA Diamond Jewelry",
    "luxury diamond rings",
    "fine jewelry online",
    "engagement rings",
    "diamond necklaces",
    "custom diamond jewelry",
    "wedding bands",
    "gold and diamond earrings",
    "jewelry store",
    "high quality diamonds"
  ],
  authors: [{ name: "NIRA Diamond Jewelry" }],
  openGraph: {
    title: "NIRA Diamond Jewelry | Luxury Engagement Rings & Fine Jewelry",
    description:
      "Shop NIRA Diamond Jewelry for luxury engagement rings, wedding bands, necklaces, earrings, and custom pieces. Crafted for brilliance and elegance.",
    url: "https://niradiamondjewelry.com",
    siteName: "NIRA Diamond Jewelry",
    // images: [
    //   {
    //     url: "https://niradiamondjewelry.com/og-image.jpg", // Replace with your actual image
    //     width: 1200,
    //     height: 630,
    //     alt: "NIRA Diamond Jewelry"
    //   }
    // ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NIRA Diamond Jewelry | Luxury Engagement Rings & Fine Jewelry",
    description:
      "Luxury engagement rings, fine necklaces, earrings, and custom diamond jewelry from NIRA.",
    // images: ["https://niradiamondjewelry.com/og-image.jpg"]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${primary_font.variable} ${secondary_font.variable}  font-sans  antialiased`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        /> */}
        <link
          rel="apple-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <HeaderProvider>
          <div id="scrollable-div" className="flex flex-col scrollable h-screen overflow-y-auto relative">
            <MainPage>{children}</MainPage>
          </div>
        </HeaderProvider>
      </body>

    </html>
  );
}
