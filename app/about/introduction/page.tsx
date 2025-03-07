import React from 'react';
import { FaMosque, FaGraduationCap, FaUserGraduate, FaChalkboardTeacher, FaBook, FaBullseye, FaEye, FaStar, FaHandshake, FaUsers } from 'react-icons/fa';

const characteristics = [
  {
    title: "ইসলামি শিক্ষার কেন্দ্র",
    description: "কুরআন, হাদীস ও ইসলামি শিক্ষার মাধ্যমে ছাত্রদের ইসলামি জ্ঞান অর্জনে সহায়তা করা",
    icon: FaMosque
  },
  {
    title: "আধুনিক শিক্ষা",
    description: "বিজ্ঞান, প্রযুক্তি ও আধুনিক বিষয়ে শিক্ষা প্রদান",
    icon: FaGraduationCap
  },
  {
    title: "দক্ষ শিক্ষক মণ্ডলী",
    description: "অভিজ্ঞ ও যোগ্যতাসম্পন্ন শিক্ষকদের মাধ্যমে পাঠদান",
    icon: FaChalkboardTeacher
  },
  {
    title: "গুণগত শিক্ষা",
    description: "উচ্চমানের শিক্ষা নিশ্চিত করার লক্ষ্যে আধুনিক পদ্ধতি ব্যবহার",
    icon: FaBook
  },
  {
    title: "সর্বাঙ্গীণ উন্নয়ন",
    description: "শিক্ষার্থীদের শৈক্ষিক, নৈতিক ও চারিত্রিক উন্নয়নে গুরুত্বারোপ",
    icon: FaUserGraduate
  }
];

const objectives = [
  {
    title: "ইসলামি শিক্ষা",
    description: "কুরআন, হাদীস ও ইসলামি শরীয়াহর গভীর জ্ঞান অর্জনের মাধ্যমে যোগ্য আলেম তৈরি করা",
    icon: FaGraduationCap
  },
  {
    title: "আধুনিক শিক্ষা",
    description: "ইসলামি শিক্ষার পাশাপাশি আধুনিক বিষয়ে দক্ষতা অর্জনের সুযোগ প্রদান",
    icon: FaUsers
  },
  {
    title: "নৈতিক শিক্ষা",
    description: "ইসলামি মূল্যবোধ ও নৈতিকতার ভিত্তিতে চরিত্র গঠন",
    icon: FaHandshake
  },
  {
    title: "সামাজিক দায়িত্ব",
    description: "সমাজ ও দেশের প্রতি দায়িত্বশীল নাগরিক হিসেবে গড়ে তোলা",
    icon: FaStar
  }
];

const goals = [
  "শিক্ষার্থীদের মধ্যে ইসলামি মূল্যবোধ প্রতিষ্ঠা করা",
  "আধুনিক জ্ঞান-বিজ্ঞানে দক্ষ করে গড়ে তোলা",
  "নৈতিক ও চারিত্রিক উৎকর্ষ সাধন করা",
  "দেশ ও জাতির জন্য যোগ্য নেতৃত্ব তৈরি করা",
  "ইসলামি গবেষণা ও জ্ঞানচর্চার উন্নয়ন করা",
  "সামাজিক দায়িত্বশীলতা বৃদ্ধি করা",
  "শিক্ষার মান উন্নয়নে নিরন্তর প্রচেষ্টা চালানো",
  "শিক্ষক-শিক্ষার্থীদের মধ্যে গবেষণা মনোভাব তৈরি করা"
];

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground font-hind-siliguri">
            মাদরাসা পরিচিতি
          </h1>
          <p className="text-xl text-muted-foreground font-hind-siliguri max-w-3xl mx-auto">
            হাবরুল উম্মাহ মডেল মাদরাসা একটি আধুনিক ইসলামি শিক্ষা প্রতিষ্ঠান, যা ১৯৯০ সাল থেকে বাংলাদেশের শিক্ষা ক্ষেত্রে গুরুত্বপূর্ণ অবদান রেখে চলেছে।
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <FaBullseye className="text-primary w-8 h-8 mr-4" />
              <h2 className="text-2xl font-bold text-card-foreground font-hind-siliguri">
                আমাদের লক্ষ্য
              </h2>
            </div>
            <p className="text-muted-foreground font-hind-siliguri">
              ইসলামি ও আধুনিক শিক্ষার সমন্বয়ে একজন শিক্ষার্থীকে পরিপূর্ণ মানুষ হিসেবে গড়ে তোলা, যে ইসলামি মূল্যবোধে বলীয়ান হয়ে আধুনিক জ্ঞান-বিজ্ঞানে দক্ষতা অর্জন করবে এবং সমাজ ও দেশের উন্নয়নে অবদান রাখবে।
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <FaEye className="text-primary w-8 h-8 mr-4" />
              <h2 className="text-2xl font-bold text-card-foreground font-hind-siliguri">
                আমাদের দর্শন
              </h2>
            </div>
            <p className="text-muted-foreground font-hind-siliguri">
              একটি আদর্শ ইসলামি শিক্ষা প্রতিষ্ঠান হিসেবে প্রতিষ্ঠিত হওয়া, যেখানে শিক্ষার্থীরা ইসলামি মূল্যবোধ ও আধুনিক জ্ঞানের সমন্বয়ে নিজেদের গড়ে তুলতে পারবে এবং সমাজের জন্য একজন যোগ্য ও দায়িত্বশীল নাগরিক হিসেবে প্রস্তুত হবে।
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground font-hind-siliguri">
              প্রতিষ্ঠানের পরিচয়
            </h2>
            <p className="text-muted-foreground font-hind-siliguri mb-4">
              হাবরুল উম্মাহ মডেল মাদরাসা একটি স্বনামধন্য ইসলামি শিক্ষা প্রতিষ্ঠান। এখানে ইসলামি ও আধুনিক শিক্ষার সমন্বয়ে শিক্ষা কার্যক্রম পরিচালিত হয়। মাদরাসাটি ১৯৯০ সালে প্রতিষ্ঠিত হয় এবং তখন থেকে নিরলসভাবে শিক্ষা কার্যক্রম পরিচালনা করে আসছে।
            </p>
            <p className="text-muted-foreground font-hind-siliguri">
              বর্তমানে মাদরাসায় ইবতিদাইয়্যাহ থেকে আলিম পর্যন্ত শিক্ষা কার্যক্রম চলমান রয়েছে। প্রতি বছর শতাধিক ছাত্র এখান থেকে সফলতার সাথে শিক্ষা সমাপ্ত করে বের হয়ে যায়।
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground font-hind-siliguri">
              শিক্ষা ব্যবস্থা
            </h2>
            <p className="text-muted-foreground font-hind-siliguri mb-4">
              আমাদের শিক্ষা ব্যবস্থায় রয়েছে:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground font-hind-siliguri">
              <li>কুরআন মাজীদ শিক্ষা</li>
              <li>হাদীস শিক্ষা</li>
              <li>আরবি ভাষা ও সাহিত্য</li>
              <li>ইসলামি ফিকহ ও শরীয়াহ</li>
              <li>বাংলা ও ইংরেজি ভাষা</li>
              <li>গণিত ও বিজ্ঞান</li>
              <li>তথ্য ও যোগাযোগ প্রযুক্তি</li>
            </ul>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground font-hind-siliguri text-center">
            মূল উদ্দেশ্যসমূহ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg">
                <objective.icon className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-card-foreground font-hind-siliguri">
                  {objective.title}
                </h3>
                <p className="text-muted-foreground font-hind-siliguri">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Goals List */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground font-hind-siliguri text-center">
            প্রাতিষ্ঠানিক লক্ষ্যসমূহ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FaStar className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground font-hind-siliguri">{goal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Characteristics */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground font-hind-siliguri text-center">
            মাদরাসার বৈশিষ্ট্য
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {characteristics.map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg">
                <item.icon className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-card-foreground font-hind-siliguri">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-hind-siliguri">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-primary/5 rounded-lg p-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-foreground font-hind-siliguri text-center">
              অতিরিক্ত সুবিধাসমূহ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground font-hind-siliguri">
              <ul className="list-disc list-inside space-y-2">
                <li>আবাসিক সুবিধা</li>
                <li>আধুনিক লাইব্রেরি</li>
                <li>কম্পিউটার ল্যাব</li>
                <li>ভাষা শিক্ষা ল্যাব</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>খেলাধুলার মাঠ</li>
                <li>মসজিদ</li>
                <li>ক্যাফেটেরিয়া</li>
                <li>মেডিকেল সেন্টার</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 