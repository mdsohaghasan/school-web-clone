import Navbar from "@/components/Navbar";
import { Inter, Hind Siliguri } from "next/font/google";
import type React from "react"; // Import React
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

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
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

