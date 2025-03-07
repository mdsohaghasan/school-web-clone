import React from 'react';
import Link from 'next/link';

export default function Sitemap() {
  const mainPages = [
    { href: "/", label: "হোম" },
    { href: "/admission/process", label: "ভর্তি প্রক্রিয়া" },
    { href: "/admission/apply", label: "অনলাইন আবেদন" },
    { href: "/admission/scholarship", label: "স্কলারশিপ" },
    { href: "/academic/curriculum", label: "পাঠ্যক্রম" },
    { href: "/academic/department", label: "বিভাগসমূহ" },
    { href: "/academic/campus", label: "ক্যাম্পাস" },
    { href: "/about/introduction", label: "মাদরাসা পরিচিতি" },
    { href: "/about/principal", label: "অধ্যক্ষ" },
    { href: "/about/faculty", label: "শিক্ষক মণ্ডলী" },
    { href: "/about/mosque", label: "মসজিদ কমপ্লেক্স" },
    { href: "/books", label: "বইসমূহ" },
    { href: "/videos", label: "ভিডিও" },
    { href: "/blog", label: "ব্লগপোষ্ট" },
    { href: "/contact", label: "যোগাযোগ" },
  ];

  const policyPages = [
    { href: "/policies/admission", label: "ভর্তি নীতিমালা" },
    { href: "/policies/attendance", label: "প্রাতিষ্ঠানিক নীতিমালা" },
    { href: "/policies/examination", label: "পরীক্ষা সিস্টেম" },
    { href: "/policies/academic-calendar", label: "একাডেমিক ক্যালেন্ডার" },
    { href: "/policies/hostel", label: "ক্যাম্পাস নীতিমালা" },
  ];

  const legalPages = [
    { href: "/legal/terms", label: "ব্যবহারের শর্তাবলী" },
    { href: "/legal/privacy", label: "গোপনীয়তা নীতি" },
    { href: "/legal/refund", label: "রিফান্ড নীতি" },
    { href: "/legal/copyright", label: "কপিরাইট নীতি" },
    { href: "/legal/sitemap", label: "সাইটম্যাপ" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center font-hind-siliguri">সাইটম্যাপ</h1>
      
      <div className="prose prose-lg max-w-none font-hind-siliguri">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">প্রধান পেজসমূহ</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainPages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="hover:text-primary transition duration-300">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">নীতিমালা</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {policyPages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="hover:text-primary transition duration-300">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">আইনি তথ্য</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {legalPages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="hover:text-primary transition duration-300">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 