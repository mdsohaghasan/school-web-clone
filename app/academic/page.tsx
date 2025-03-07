import React from 'react';
import Link from 'next/link';
import { FaGraduationCap, FaUniversity, FaBuilding, FaBook, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

const academicFeatures = [
  {
    title: "উচ্চমানের শিক্ষা",
    description: "ইসলামি ও আধুনিক শিক্ষার সমন্বয়ে উচ্চমানের শিক্ষা প্রদান",
    icon: FaGraduationCap
  },
  {
    title: "যোগ্য শিক্ষক মণ্ডলী",
    description: "অভিজ্ঞ ও যোগ্য শিক্ষকদের মাধ্যমে পাঠদান",
    icon: FaChalkboardTeacher
  },
  {
    title: "আধুনিক সুযোগ-সুবিধা",
    description: "সকল আধুনিক সুযোগ-সুবিধা সম্পন্ন শিক্ষা প্রতিষ্ঠান",
    icon: FaBuilding
  }
];

const academicSections = [
  {
    title: "পাঠ্যক্রম",
    description: "ইবতিদাইয়্যাহ থেকে আলিম পর্যন্ত সকল স্তরের বিস্তারিত পাঠ্যক্রম",
    icon: FaBook,
    link: "/academic/curriculum"
  },
  {
    title: "বিভাগসমূহ",
    description: "বিভিন্ন একাডেমিক বিভাগ ও তাদের কার্যক্রম সম্পর্কে জানুন",
    icon: FaUniversity,
    link: "/academic/department"
  },
  {
    title: "ক্যাম্পাস",
    description: "আধুনিক সুযোগ-সুবিধা সম্পন্ন ক্যাম্পাস পরিচিতি",
    icon: FaBuilding,
    link: "/academic/campus"
  }
];

export default function AcademicPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground font-hind-siliguri">
            একাডেমিক বিভাগ
          </h1>
          <p className="text-xl text-muted-foreground font-hind-siliguri max-w-3xl mx-auto">
            হাবরুল উম্মাহ মডেল মাদরাসা বাংলাদেশের একটি অন্যতম শ্রেষ্ঠ ইসলামি শিক্ষা প্রতিষ্ঠান, যেখানে ঐতিহ্যবাহী ইসলামি শিক্ষার সাথে আধুনিক শিক্ষার সমন্বয় ঘটানো হয়েছে।
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {academicFeatures.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-lg">
              <feature.icon className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-card-foreground font-hind-siliguri">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-hind-siliguri">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Academic Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {academicSections.map((section, index) => (
            <Link href={section.link} key={index}>
              <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <section.icon className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-card-foreground font-hind-siliguri">
                  {section.title}
                </h3>
                <p className="text-muted-foreground font-hind-siliguri">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-card rounded-lg p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-4 text-card-foreground font-hind-siliguri">
            আমাদের লক্ষ্য
          </h2>
          <p className="text-muted-foreground font-hind-siliguri mb-4">
            হাবরুল উম্মাহ মডেল মাদরাসার মূল লক্ষ্য হলো ইসলামি মূল্যবোধ ও আধুনিক শিক্ষার সমন্বয়ে একজন ছাত্রকে পরিপূর্ণ মানুষ হিসেবে গড়ে তোলা। আমরা বিশ্বাস করি, ইসলামি জ্ঞান ও আধুনিক শিক্ষার সমন্বয়ে একজন ছাত্র সমাজের জন্য একজন যোগ্য ও দায়িত্বশীল নাগরিক হিসেবে গড়ে উঠতে পারে।
          </p>
          <div className="flex items-center gap-4">
            <FaUserGraduate className="text-primary w-8 h-8" />
            <p className="text-muted-foreground font-hind-siliguri">
              প্রতি বছর শতাধিক ছাত্র সফলতার সাথে শিক্ষা সমাপ্ত করে বের হয়ে যায়
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 