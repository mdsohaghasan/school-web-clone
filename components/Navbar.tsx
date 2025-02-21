"use client"

import { useScrollDirection } from "@/hooks/useScrollDirection"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

export default function Navbar() {
const scrollDirection = useScrollDirection();
const [showNavbar, setShowNavbar] = useState(true);

useEffect(() => {
  if (scrollDirection && scrollDirection === "down") {
    setShowNavbar(false);
  } else {
    setShowNavbar(true);
  }
}, [scrollDirection]);

  return (
    <nav
      className={`bg-background border-b border-border fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/habrulummah.jpg" alt="লোগো" width={60} height={60} />
            <span className="text-xl font-bold text-primary font-hind-siliguri">
              হাবরুল উম্মাহ মডেল মাদরাসা
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition duration-300 font-hind-siliguri"
                >
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="#academics"
                  className="text-foreground hover:text-primary transition duration-300 font-hind-siliguri"
                >
                  একাডেমিক
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="text-foreground hover:text-primary transition duration-300 font-hind-siliguri"
                >
                  বই
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-foreground hover:text-primary transition duration-300 font-hind-siliguri"
                >
                  ভিডিও
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-foreground hover:text-primary transition duration-300 font-hind-siliguri"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>

            <Button
              className="font-hind-siliguri text-base font-medium"
            >
              ভর্তি আবেদন
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
} 