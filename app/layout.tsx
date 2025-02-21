import Navbar from "@/components/Navbar";
import { Inter, Hind_Siliguri } from "next/font/google";
import type React from "react"; // Import React
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })
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
      <body suppressHydrationWarning={true} className={`${HindSiliguri.className} font-bold`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

