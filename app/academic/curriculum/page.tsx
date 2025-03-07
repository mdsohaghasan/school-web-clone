import React from 'react';
import Link from 'next/link';
import { FaBook, FaClock, FaUserGraduate } from 'react-icons/fa';

const curriculumData = {
  title: "পাঠ্যক্রম",
  description: "হাবরুল উম্মাহ মডেল মাদরাসার বিস্তারিত পাঠ্যক্রম",
  levels: [
    {
      name: "ইবতিদাইয়্যাহ",
      duration: "৫ বছর",
      subjects: [
        "কুরআন মাজীদ নাজেরা",
        "কুরআন শরীফ হিফয",
        "আরবি ভাষা",
        "ইসলামি শিক্ষা",
        "বাংলা",
        "ইংরেজি",
        "গণিত",
        "সাধারণ বিজ্ঞান",
        "বাংলাদেশ ও বিশ্ব পরিচয়"
      ],
      features: [
        "মৌলিক ইসলামি শিক্ষা",
        "ভাষা শিক্ষা",
        "প্রাথমিক বিজ্ঞান শিক্ষা",
        "নৈতিক শিক্ষা"
      ]
    },
    {
      name: "মুতাওয়াস্সিতাহ",
      duration: "৩ বছর",
      subjects: [
        "কুরআন ও তাজবীদ",
        "হাদীস",
        "ফিকহ",
        "আরবি সাহিত্য",
        "ইসলামের ইতিহাস",
        "বাংলা সাহিত্য",
        "ইংরেজি",
        "গণিত",
        "বিজ্ঞান",
        "তথ্য ও যোগাযোগ প্রযুক্তি"
      ],
      features: [
        "উচ্চতর ইসলামি শিক্ষা",
        "আধুনিক বিষয়ে দক্ষতা",
        "ভাষা দক্ষতা",
        "বিজ্ঞান ও প্রযুক্তি শিক্ষা"
      ]
    },
    {
      name: "আলিম",
      duration: "২ বছর",
      subjects: [
        "তাফসীর",
        "হাদীস",
        "ফিকহ",
        "উসূলে ফিকহ",
        "আরবি সাহিত্য",
        "ইসলামি দর্শন",
        "ইংরেজি সাহিত্য",
        "বাংলা সাহিত্য",
        "অর্থনীতি",
        "ইসলামি অর্থনীতি"
      ],
      features: [
        "গভীর ইসলামি জ্ঞান",
        "সাহিত্য ও দর্শন",
        "আধুনিক শিক্ষা",
        "গবেষণা দক্ষতা"
      ]
    }
  ]
};

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-foreground font-hind-siliguri">
          {curriculumData.title}
        </h1>
        <p className="text-lg mb-12 text-muted-foreground font-hind-siliguri">
          {curriculumData.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curriculumData.levels.map((level, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground font-hind-siliguri">
                  {level.name}
                </h2>
                <div className="flex items-center mb-4 text-primary">
                  <FaClock className="mr-2" />
                  <span className="font-hind-siliguri">সময়কাল: {level.duration}</span>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground font-hind-siliguri flex items-center">
                    <FaBook className="mr-2" />
                    বিষয়সমূহ:
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {level.subjects.map((subject, idx) => (
                      <li key={idx} className="text-muted-foreground font-hind-siliguri">
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground font-hind-siliguri flex items-center">
                    <FaUserGraduate className="mr-2" />
                    বৈশিষ্ট্য:
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground font-hind-siliguri">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 