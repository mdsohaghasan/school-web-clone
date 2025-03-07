import React from 'react';
import Link from 'next/link';
import { FaHistory, FaGraduationCap, FaMosque, FaBook, FaUsers, FaBullseye } from 'react-icons/fa';

const aboutSections = [
  {
    title: "মাদরাসা পরিচিতি",
    description: "হাবরুল উম্মাহ মডেল মাদরাসার বিস্তারিত তথ্য ও পরিচিতি",
    icon: FaMosque,
    link: "/about/introduction"
  },
  {
    title: "অধ্যক্ষ",
    description: "মাদরাসার অধ্যক্ষের বানী ও পরিচিতি",
    icon: FaGraduationCap,
    link: "/about/principal"
  },
  {
    title: "শিক্ষক মণ্ডলী",
    description: "অভিজ্ঞ ও যোগ্য শিক্ষক মণ্ডলীর তালিকা",
    icon: FaUsers,
    link: "/about/faculty"
  },
  {
    title: "ইতিহাস",
    description: "মাদরাসা প্রতিষ্ঠার ইতিহাস ও ক্রমবিকাশ",
    icon: FaHistory,
    link: "/about/history"
  },
  {
    title: "লক্ষ্য ও উদ্দেশ্য",
    description: "মাদরাসার লক্ষ্য, উদ্দেশ্য ও ভবিষ্যৎ পরিকল্পনা",
    icon: FaBullseye,
    link: "/about/mission"
  }
];

const features = [
  {
    title: "ইসলামি শিক্ষার উৎকর্ষতা",
    description: "কুরআন, হাদীস ও ইসলামি শিক্ষার উপর বিশেষ গুরুত্বারোপ"
  },
  {
    title: "আধুনিক শিক্ষার সমন্বয়",
    description: "ইসলামি ও আধুনিক শিক্ষার সুন্দর সমন্বয়"
  },
  {
    title: "মানসম্মত শিক্ষা",
    description: "উচ্চমানের শিক্ষা নিশ্চিত করার লক্ষ্যে নিরলস প্রচেষ্টা"
  },
  {
    title: "নৈতিক শিক্ষা",
    description: "চরিত্র গঠন ও নৈতিক মূল্যবোধ শিক্ষার প্রতি গুরুত্বারোপ"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground font-hind-siliguri">
            আমাদের সম্পর্কে জানুন
          </h1>
          <p className="text-xl text-muted-foreground font-hind-siliguri max-w-3xl mx-auto">
            হাবরুল উম্মাহ মডেল মাদরাসা ১৯৯০ সাল থেকে ইসলামি ও আধুনিক শিক্ষার সমন্বয়ে শিক্ষা কার্যক্রম পরিচালনা করে আসছে। আমাদের লক্ষ্য একজন ছাত্রকে ইসলামি মূল্যবোধ ও আধুনিক জ্ঞানের সমন্বয়ে একজন যোগ্য নাগরিক হিসেবে গড়ে তোলা।
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-card-foreground font-hind-siliguri">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-hind-siliguri">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* About Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {aboutSections.map((section, index) => (
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

        {/* Quick Stats */}
        <div className="bg-card rounded-lg p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-8 text-card-foreground font-hind-siliguri text-center">
            আমাদের অর্জন
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">৩০+</div>
              <div className="text-muted-foreground font-hind-siliguri">বছরের অভিজ্ঞতা</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">৫০০+</div>
              <div className="text-muted-foreground font-hind-siliguri">নিবন্ধিত শিক্ষার্থী</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">৫০+</div>
              <div className="text-muted-foreground font-hind-siliguri">যোগ্য শিক্ষক</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">৯৫%</div>
              <div className="text-muted-foreground font-hind-siliguri">পাশের হার</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <FaBook className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-foreground font-hind-siliguri">
              আমাদের অঙ্গীকার
            </h2>
            <p className="text-muted-foreground font-hind-siliguri">
              আমরা প্রতিশ্রুতিবদ্ধ আমাদের শিক্ষার্থীদের জন্য একটি উন্নত শিক্ষা ব্যবস্থা নিশ্চিত করতে। আমাদের লক্ষ্য শুধু শিক্ষার্থীদের একাডেমিক সাফল্যই নয়, বরং তাদের চারিত্রিক ও নৈতিক উৎকর্ষ সাধনও। আমরা বিশ্বাস করি, সঠিক শিক্ষা ও প্রশিক্ষণের মাধ্যমে একজন শিক্ষার্থী দেশ ও জাতির জন্য একজন যোগ্য নাগরিক হিসেবে গড়ে উঠতে পারে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 