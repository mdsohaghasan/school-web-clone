"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { useScrollDirection } from "@/hooks/useScrollDirection"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (scrollDirection === "down") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [scrollDirection]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`bg-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="লোগো" width={50} height={50} />
            <span className="text-2xl md:text-3xl font-bold text-primary">
              হাবরুল উম্মাহ মডেল মাদরাসা
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  একাডেমিক
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  বইসমূহ
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  ভিডিও
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>

            <Button className="text-lg font-bold">ভর্তি আবেদন</Button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-lg font-bold">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link
                  href="/"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  একাডেমিক
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  বইসমূহ
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  ভিডিও
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  যোগাযোগ
                </Link>
              </li>
              <Button className="text-lg font-bold">ভর্তি আবেদন</Button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
} 


