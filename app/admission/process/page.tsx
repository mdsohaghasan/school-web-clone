import React from 'react';
import { FaGraduationCap, FaFileAlt, FaCheckCircle, FaInfoCircle, FaCalendarAlt, FaPhoneAlt, FaMoneyBillWave, FaHome, FaBook, FaComments } from 'react-icons/fa';

const admissionSteps = [
  {
    title: "অনলাইন আবেদন",
    description: "আমাদের ওয়েবসাইটে গিয়ে অনলাইন আবেদন ফর্ম পূরণ করুন",
    icon: FaFileAlt
  },
  {
    title: "কাগজপত্র জমা",
    description: "প্রয়োজনীয় সকল কাগজপত্র জমা দিন",
    icon: FaCheckCircle
  },
  {
    title: "ভর্তি পরীক্ষা",
    description: "নির্ধারিত সময়ে ভর্তি পরীক্ষায় অংশগ্রহণ করুন",
    icon: FaGraduationCap
  },
  {
    title: "রেজাল্ট ও ভর্তি",
    description: "পরীক্ষার ফলাফল প্রকাশের পর ভর্তি প্রক্রিয়া সম্পন্ন করুন",
    icon: FaInfoCircle
  }
];

const importantDates = [
  { title: "আবেদন শুরু", date: "১ জানুয়ারি, ২০২৪" },
  { title: "আবেদনের শেষ তারিখ", date: "৩১ জানুয়ারি, ২০২৪" },
  { title: "ভর্তি পরীক্ষা", date: "১৫ ফেব্রুয়ারি, ২০২৪" },
  { title: "রেজাল্ট প্রকাশ", date: "২৮ ফেব্রুয়ারি, ২০২৪" },
  { title: "ভর্তি শুরু", date: "১ মার্চ, ২০২৪" }
];

const requiredDocuments = [
  "জন্ম সনদ",
  "পাসপোর্ট সাইজ ছবি",
  "অভিভাবকের জাতীয় পরিচয়পত্র",
  "পূর্ববর্তী শিক্ষা প্রতিষ্ঠানের সনদ",
  "মার্কশীট",
  "চিকিৎসা সনদ",
  "চার কপি স্ট্যাম্প সাইজ ছবি"
];

const fees = [
  { title: "ভর্তি ফি", amount: "৫,০০০ টাকা" },
  { title: "মাসিক বেতন", amount: "২,০০০ টাকা" },
  { title: "হোস্টেল ফি", amount: "৩,০০০ টাকা" },
  { title: "বই-খাতা", amount: "২,৫০০ টাকা" },
  { title: "ইউনিফর্ম", amount: "১,৫০০ টাকা" }
];

const admissionTestSyllabus = [
  {
    class: "ইবতিদাইয়্যাহ",
    subjects: ["কুরআন", "বাংলা", "ইংরেজি", "গণিত"]
  },
  {
    class: "মুতাওয়াস্সিতাহ",
    subjects: ["কুরআন", "হাদীস", "বাংলা", "ইংরেজি", "গণিত"]
  },
  {
    class: "আলিম",
    subjects: ["কুরআন", "হাদীস", "ফিকহ", "বাংলা", "ইংরেজি", "গণিত"]
  }
];

export default function AdmissionProcessPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground font-hind-siliguri">
            ভর্তি প্রক্রিয়া
          </h1>
          <p className="text-xl text-muted-foreground font-hind-siliguri max-w-3xl mx-auto">
            হাবরুল উম্মাহ মডেল মাদরাসায় ভর্তির জন্য প্রয়োজনীয় সকল তথ্য এখানে পাওয়া যাবে
          </p>
        </div>

        {/* Admission Notice */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground font-hind-siliguri text-center">
            ভর্তি বিজ্ঞপ্তি
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground font-hind-siliguri mb-6">
              হাবরুল উম্মাহ মডেল মাদরাসায় ২০২৪ শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু হয়েছে। আগ্রহী শিক্ষার্থীরা নিম্নলিখিত সময়সূচি অনুযায়ী আবেদন করতে পারবেন।
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {importantDates.map((date, index) => (
                <div key={index} className="bg-card rounded-lg p-4 shadow-lg">
                  <h3 className="text-lg font-bold mb-2 text-card-foreground font-hind-siliguri">
                    {date.title}
                  </h3>
                  <p className="text-muted-foreground font-hind-siliguri">
                    {date.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admission Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground font-hind-siliguri text-center">
            ভর্তি প্রক্রিয়া
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg">
                <step.icon className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-card-foreground font-hind-siliguri">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-hind-siliguri">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground font-hind-siliguri text-center">
            প্রয়োজনীয় কাগজপত্র
          </h2>
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-center space-x-2 text-muted-foreground font-hind-siliguri">
                  <FaCheckCircle className="text-primary" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fees */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground font-hind-siliguri text-center">
            ফি ও খরচ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fees.map((fee, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg">
                <FaMoneyBillWave className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-card-foreground font-hind-siliguri">
                  {fee.title}
                </h3>
                <p className="text-muted-foreground font-hind-siliguri">
                  {fee.amount}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Test Syllabus */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground font-hind-siliguri text-center">
            ভর্তি পরীক্ষার সিলেবাস
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {admissionTestSyllabus.map((syllabus, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg">
                <FaBook className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-card-foreground font-hind-siliguri">
                  {syllabus.class}
                </h3>
                <ul className="space-y-2">
                  {syllabus.subjects.map((subject, idx) => (
                    <li key={idx} className="text-muted-foreground font-hind-siliguri">
                      • {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hostel Facilities */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground font-hind-siliguri text-center">
            হোস্টেল সুবিধা
          </h2>
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground font-hind-siliguri">
                  হোস্টেল সুবিধাসমূহ
                </h3>
                <ul className="space-y-2 text-muted-foreground font-hind-siliguri">
                  <li>• আধুনিক এয়ার কন্ডিশনিং ব্যবস্থা</li>
                  <li>• ২৪ ঘন্টা নিরাপত্তা</li>
                  <li>• মেডিকেল সেন্টার</li>
                  <li>• লাইব্রেরি সুবিধা</li>
                  <li>• খেলাধুলার মাঠ</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground font-hind-siliguri">
                  হোস্টেল নিয়মাবলী
                </h3>
                <ul className="space-y-2 text-muted-foreground font-hind-siliguri">
                  <li>• নির্ধারিত সময়ে রাতের খাবার</li>
                  <li>• সকালে নামাজের জন্য জাগানো</li>
                  <li>• সাপ্তাহিক পরিষ্কার-পরিচ্ছন্নতা</li>
                  <li>• অতিথি দেখার নিয়ম</li>
                  <li>• ছুটি ও বাইরে যাওয়ার নিয়ম</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground font-hind-siliguri text-center">
            যোগাযোগের তথ্য
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 text-muted-foreground font-hind-siliguri">
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt className="text-primary" />
                  <span>+৮৮০ ১৭১২-৩৪৫৬৭৮</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-primary" />
                  <span>সকাল ৯:০০ - বিকাল ৫:০০</span>
                </div>
                <p>ভর্তি সংক্রান্ত যেকোনো প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন</p>
              </div>
              <div className="space-y-4 text-muted-foreground font-hind-siliguri">
                <div className="flex items-center space-x-2">
                  <FaHome className="text-primary" />
                  <span>হাবরুল উম্মাহ মডেল মাদরাসা, ঢাকা</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaComments className="text-primary" />
                  <span>admission@habrulummah.edu.bd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 