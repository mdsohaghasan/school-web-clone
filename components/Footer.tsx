import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

interface FooterLink {
  href: string;
  label: string;
}

const policies = [
  { href: "/policies/admission", label: "ভর্তি নীতিমালা" },
  { href: "/policies/attendance", label: "উপস্থিতি নীতিমালা" },
  { href: "/policies/examination", label: "পরীক্ষা নীতিমালা" },
  { href: "/policies/discipline", label: "শৃঙ্খলা নীতিমালা" },
  { href: "/policies/hostel", label: "হোস্টেল নীতিমালা" },
];

const legal = [
  { href: "/legal/privacy", label: "গোপনীয়তা নীতি" },
  { href: "/legal/terms", label: "ব্যবহারের শর্তাবলী" },
  { href: "/legal/refund", label: "রিফান্ড নীতি" },
  { href: "/legal/copyright", label: "কপিরাইট নীতি" },
  { href: "/legal/sitemap", label: "সাইটম্যাপ" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Madrasa */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-hind-siliguri">হাবরুল উম্মাহ মডেল মাদরাসা</h3>
            <p className="font-hind-siliguri text-white/90">
              হাবরুল উম্মাহ মডেল মাদরাসা একটি আদর্শ শিক্ষা প্রতিষ্ঠান। এখানে ধর্মীয় শিক্ষার পাশাপাশি আধুনিক শিক্ষাও প্রদান করা হয়। আমাদের লক্ষ্য হল শিক্ষার্থীদের মাঝে নৈতিকতা, আদর্শ ও জ্ঞানের আলো ছড়িয়ে দেওয়া।
            </p>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-hind-siliguri">নীতিমালা</h3>
            <ul className="space-y-2">
              {policies.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-white/80 transition duration-300 font-hind-siliguri"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-hind-siliguri">আইনি তথ্য</h3>
            <ul className="space-y-2">
              {legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-white/80 transition duration-300 font-hind-siliguri"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-hind-siliguri">যোগাযোগ</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1" />
                <p className="font-hind-siliguri">
                  হাবরুল উম্মাহ মডেল মাদরাসা<br />
                  রাজিবপুর, (হাবিব উল্লাহ'র দোকানের কাছে), লক্ষ্মীপুর সদর, লক্ষ্মীপুর 3720
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone />
                <p className="font-hind-siliguri">+880 1876-672622</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope />
                <p className="font-hind-siliguri">info@habrulummah.com</p>
              </div>
              
            </div>
            
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/habrulummahmadrasah/" className="hover:text-white/80 transition duration-300">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@habrul-ummahmodelmadrasha5435" className="hover:text-white/80 transition duration-300">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/explore/locations/1560775834139735/" className="hover:text-white/80 transition duration-300">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white/80 transition duration-300">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/20 pt-8">
          <p className="font-hind-siliguri">
            © {new Date().getFullYear()} হাবরুল উম্মাহ মডেল মাদরাসা। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}