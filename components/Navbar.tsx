"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { Button } from "./ui/button"
import { useScrollDirection } from "@/hooks/useScrollDirection"
import { FaChevronDown } from "react-icons/fa"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAcademicDropdownOpen, setIsAcademicDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isAdmissionDropdownOpen, setIsAdmissionDropdownOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const [showNavbar, setShowNavbar] = useState(true);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollDirection === "down") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [scrollDirection]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setIsAcademicDropdownOpen(false);
        setIsAboutDropdownOpen(false);
        setIsAdmissionDropdownOpen(false);
        setIsMediaDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAcademicDropdown = () => {
    setIsAcademicDropdownOpen(!isAcademicDropdownOpen);
    if (!isAcademicDropdownOpen) {
      setIsAboutDropdownOpen(false);
      setIsAdmissionDropdownOpen(false);
      setIsMediaDropdownOpen(false);
    }
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    if (!isAboutDropdownOpen) {
      setIsAcademicDropdownOpen(false);
      setIsAdmissionDropdownOpen(false);
      setIsMediaDropdownOpen(false);
    }
  };

  const toggleAdmissionDropdown = () => {
    setIsAdmissionDropdownOpen(!isAdmissionDropdownOpen);
    if (!isAdmissionDropdownOpen) {
      setIsAcademicDropdownOpen(false);
      setIsAboutDropdownOpen(false);
      setIsMediaDropdownOpen(false);
    }
  };

  const toggleMediaDropdown = () => {
    setIsMediaDropdownOpen(!isMediaDropdownOpen);
    if (!isMediaDropdownOpen) {
      setIsAcademicDropdownOpen(false);
      setIsAboutDropdownOpen(false);
      setIsAdmissionDropdownOpen(false);
    }
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setIsAcademicDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsMediaDropdownOpen(false);
  };

  const academicMenuItems = [
    { href: "/academic/admission", label: "ভর্তি প্রক্রিয়া" },
    { href: "/academic/fees", label: "ফী স্ট্রাকচার" },
    { href: "/academic/department", label: "বিভাগসমূহ" },
    { href: "/academic/curriculum", label: "কারিকুলাম" },
  ];


  const mediaMenuItems = [
    { href: "/videos", label: "ভিডিও" },
    { href: "/blog", label: "ব্লগপোষ্ট" },
  ];

  return (
    <nav
      ref={navbarRef}
      className={`bg-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="লোগো" width={50} height={50} />
            <span className="text-xl font-bold text-primary">
              হাবরুল উম্মাহ মডেল মাদরাসা
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-base hover:text-primary transition duration-300 font-bold"
                >
                  হোম
                </Link>
              </li>
            
              <li className="relative">
                <button
                  onClick={toggleAcademicDropdown}
                  className="text-base hover:text-primary transition duration-300 font-bold flex items-center"
                >
                  একাডেমিক
                  <FaChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isAcademicDropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    {academicMenuItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={handleMenuItemClick}
                          className="block px-4 py-2 text-base hover:bg-gray-100 transition duration-300"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              
              <li className="relative">
                <button
                  onClick={toggleMediaDropdown}
                  className="text-base hover:text-primary transition duration-300 font-bold flex items-center"
                >
                  মিডিয়া
                  <FaChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isMediaDropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    {mediaMenuItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={handleMenuItemClick}
                          className="block px-4 py-2 text-base hover:bg-gray-100 transition duration-300"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/books"
                  className="text-base hover:text-primary transition duration-300 font-bold"
                >
                  বইসমূহ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base hover:text-primary transition duration-300 font-bold"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>

            <Button className="text-lg font-bold">
              <Link href="/apply">ভর্তি আবেদন</Link>
            </Button>
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
                  onClick={handleMenuItemClick}
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  হোম
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
                        onClick={handleMenuItemClick}
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
                  onClick={toggleMediaDropdown}
                  className="text-lg hover:text-primary transition duration-300 font-bold flex items-center justify-center w-full"
                >
                  মিডিয়া
                  <FaChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isMediaDropdownOpen && (
                  <div className="mt-2 bg-gray-50 py-2 w-full">
                    {mediaMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleMenuItemClick}
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
                  onClick={handleMenuItemClick}
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  বইসমূহ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={handleMenuItemClick}
                  className="text-lg hover:text-primary transition duration-300 font-bold"
                >
                  যোগাযোগ
                </Link>
              </li>
              <Button className="text-lg font-bold">
                <Link href="/admission/apply" onClick={handleMenuItemClick}>ভর্তি আবেদন</Link>
              </Button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
} 


