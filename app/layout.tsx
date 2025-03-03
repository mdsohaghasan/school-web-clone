import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Hind_Siliguri } from "next/font/google";
import type React from "react";
import "./globals.css";

const HindSiliguri = Hind_Siliguri({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"] 
})

export const metadata = {
  title: "Habrul Ummah Model Madrasah",
  description: "Nurturing minds, cultivating faith, and building character",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${HindSiliguri.className} font-regular`}>
        <Navbar /> 
        {children}
        <Footer />
      </body>
    </html>
  )
}

