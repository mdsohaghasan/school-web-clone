"use client"

import { useScrollDirection } from "@/hooks/useScrollDirection"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const scrollDirection = useScrollDirection()
  const [showNavbar, setShowNavbar] = useState(true)

  useEffect(() => {
    if (scrollDirection === "down") {
      setShowNavbar(false)
    } else {
      setShowNavbar(true)
    }
  }, [scrollDirection])

  return (
    <nav
      className={`bg-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/habrulummah.jpg" alt="লোগো" width={60} height={60} />
            <span className="text-xl font-bold text-green-800">হাবরুল উম্মাহ মডেল মাদরাসা</span>
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-green-600 transition duration-300">
                হোম
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-green-600 transition duration-300">
                আমাদের সম্পর্কে
              </Link>
            </li>
            <li>
              <Link href="#academics" className="hover:text-green-600 transition duration-300">
                একাডেমিক
              </Link>
            </li>
            <li>
              <Link href="/books" className="hover:text-green-600 transition duration-300">
                বই
              </Link>
            </li>
            <li>
              <Link href="/videos" className="hover:text-green-600 transition duration-300">
                ভিডিও
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-green-600 transition duration-300">
                যোগাযোগ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
} 