import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderProvider from "@/context/HeaderProvider";
import MobileHeader from "@/components/MobileHeader";
import Head from "next/head";

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
  title: "Luxury Handcrafted Jewelry | Elegant Rings, Necklaces & More | NIRA",
  description: "Discover timeless elegance with our handcrafted jewelry collection. Shop stunning rings, pendants, bracelets & earrings made with love and premium materials such as 9K/ 10K/ 14K/ 14K/ 18K/ 22L  Gold, Silver, Platinum. Free shipping & returns.",
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
            <Header />
            <MobileHeader />
            <main>
                {children}
            </main>
            <Footer />
          </div>
        </HeaderProvider>
      </body>

    </html>
  );
}
