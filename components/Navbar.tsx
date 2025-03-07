"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { useScrollDirection } from "@/hooks/useScrollDirection"
import { FaChevronDown } from "react-icons/fa"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAcademicDropdownOpen, setIsAcademicDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
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

  const toggleAcademicDropdown = () => {
    setIsAcademicDropdownOpen(!isAcademicDropdownOpen);
    if (!isAcademicDropdownOpen) {
      setIsAboutDropdownOpen(false);
    }
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    if (!isAboutDropdownOpen) {
      setIsAcademicDropdownOpen(false);
    }
  };

  const academicMenuItems = [
    { href: "/academic/curriculum", label: "পাঠ্যক্রম" },
    { href: "/academic/department", label: "বিভাগসমূহ" },
    { href: "/academic/campus", label: "ক্যাম্পাস" },
  ];

  const aboutMenuItems = [
    { href: "/about/introduction", label: "মাদরাসা পরিচিতি" },
    { href: "/about/principal", label: "অধ্যক্ষ" },
    { href: "/about/faculty", label: "শিক্ষক মণ্ডলী" },
    { href: "/about/mosque", label: "মসজিদ কমপ্লেক্স" },
  ];

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
                  href="/admission"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  এডমিশন
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={toggleAcademicDropdown}
                  className="text-lg hover:text-primary transition duration-300 font-bold flex items-center"
                >
                  একাডেমিক
                  <FaChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isAcademicDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                    {academicMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary font-hind-siliguri"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={toggleAboutDropdown}
                  className="text-lg hover:text-primary transition duration-300 font-bold flex items-center"
                >
                  আমাদের সম্পর্কে
                  <FaChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isAboutDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                    {aboutMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary font-hind-siliguri"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/books"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  বইসমূহ
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  ভিডিও
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  ব্লগপোষ্ট
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
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
                  href="/admission"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  এডমিশন
                </Link>
              </li>
              <li className="w-full">
                <button
                  onClick={toggleAcademicDropdown}
                  className="text-lg hover:text-primary transition duration-300 font-bold flex items-center justify-center w-full"
                >
                  একাডেমিক
                  <FaChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isAcademicDropdownOpen && (
                  <div className="mt-2 bg-gray-50 py-2 w-full">
                    {academicMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary text-center font-hind-siliguri"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className="w-full">
                <button
                  onClick={toggleAboutDropdown}
                  className="text-lg hover:text-primary transition duration-300 font-bold flex items-center justify-center w-full"
                >
                  আমাদের সম্পর্কে
                  <FaChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isAboutDropdownOpen && (
                  <div className="mt-2 bg-gray-50 py-2 w-full">
                    {aboutMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary text-center font-hind-siliguri"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/books"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  বইসমূহ
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  ভিডিও
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  ব্লগপোষ্ট
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
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


