import React from 'react';
import { FaMosque, FaBook, FaBed, FaChalkboardTeacher, FaFlask, FaFutbol, FaWifi, FaUtensils } from 'react-icons/fa';

const campusData = {
  title: "ক্যাম্পাস",
  description: "হাবরুল উম্মাহ মডেল মাদরাসার ক্যাম্পাস সুবিধাসমূহ",
  facilities: [
    {
      name: "জামে মসজিদ",
      description: "৫০০+ মুসল্লির ধারণ ক্ষমতা সম্পন্ন একটি সুসজ্জিত জামে মসজিদ",
      icon: FaMosque,
      features: [
        "পাঁচ ওয়াক্ত নামাজের ব্যবস্থা",
        "জুমার নামাজের সুব্যবস্থা",
        "কুরআন তিলাওয়াত ও হিফজের জন্য আলাদা স্থান",
        "এয়ার কন্ডিশন ব্যবস্থা",
        "অযুখানার সুব্যবস্থা"
      ]
    },
    {
      name: "কেন্দ্রীয় লাইব্রেরি",
      description: "আধুনিক সুযোগ-সুবিধা সম্পন্ন বিশাল লাইব্রেরি",
      icon: FaBook,
      features: [
        "২০,০০০+ বই",
        "ডিজিটাল ক্যাটালগ সিস্টেম",
        "ই-লাইব্রেরি সুবিধা",
        "শান্ত পরিবেশে পড়ার জায়গা",
        "ফ্রি ওয়াই-ফাই"
      ]
    },
    {
      name: "আবাসিক হল",
      description: "ছাত্রদের জন্য নিরাপদ ও আরামদায়ক আবাসিক ব্যবস্থা",
      icon: FaBed,
      features: [
        "২৪ ঘণ্টা নিরাপত্তা",
        "আধুনিক ডরমিটরি",
        "পরিষ্কার-পরিচ্ছন্নতা",
        "নিজস্ব জেনারেটর",
        "মেডিকেল সেন্টার"
      ]
    },
    {
      name: "ক্লাসরুম",
      description: "আধুনিক প্রযুক্তি সমৃদ্ধ স্মার্ট ক্লাসরুম",
      icon: FaChalkboardTeacher,
      features: [
        "স্মার্ট বোর্ড",
        "মাল্টিমিডিয়া প্রজেক্টর",
        "এয়ার কন্ডিশন",
        "আধুনিক আসবাবপত্র",
        "ওয়াই-ফাই সংযোগ"
      ]
    },
    {
      name: "ল্যাবরেটরি",
      description: "আধুনিক যন্ত্রপাতি সমৃদ্ধ বিজ্ঞানাগার",
      icon: FaFlask,
      features: [
        "পদার্থ বিজ্ঞান ল্যাব",
        "রসায়ন ল্যাব",
        "জীববিজ্ঞান ল্যাব",
        "কম্পিউটার ল্যাব",
        "ল্যাঙ্গুয়েজ ল্যাব"
      ]
    },
    {
      name: "খেলাধুলার মাঠ",
      description: "বিভিন্ন ধরনের খেলাধুলার জন্য বিশাল মাঠ",
      icon: FaFutbol,
      features: [
        "ফুটবল মাঠ",
        "ক্রিকেট মাঠ",
        "ভলিবল কোর্ট",
        "ব্যাডমিন্টন কোর্ট",
        "ইনডোর গেমস"
      ]
    },
    {
      name: "ক্যাফেটেরিয়া",
      description: "পরিচ্ছন্ন ও স্বাস্থ্যসম্মত খাবারের ব্যবস্থা",
      icon: FaUtensils,
      features: [
        "হালাল খাবার",
        "পরিষ্কার-পরিচ্ছন্ন পরিবেশ",
        "সুষম খাবার",
        "স্বল্প মূল্যে খাবার",
        "বিশেষ ডাইট মেনু"
      ]
    },
    {
      name: "ইন্টারনেট সুবিধা",
      description: "সারা ক্যাম্পাসে হাই-স্পিড ইন্টারনেট",
      icon: FaWifi,
      features: [
        "হাই-স্পিড ফাইবার ইন্টারনেট",
        "ওয়াই-ফাই জোন",
        "ডিজিটাল লাইব্রেরি এক্সেস",
        "অনলাইন ক্লাস সুবিধা",
        "ওয়েব ফিল্টারিং"
      ]
    }
  ]
};

export default function CampusPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-foreground font-hind-siliguri">
          {campusData.title}
        </h1>
        <p className="text-lg mb-12 text-muted-foreground font-hind-siliguri">
          {campusData.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campusData.facilities.map((facility, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <facility.icon className="text-primary w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold text-card-foreground font-hind-siliguri">
                    {facility.name}
                  </h2>
                </div>
                
                <p className="mb-6 text-muted-foreground font-hind-siliguri">
                  {facility.description}
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground font-hind-siliguri">
                    সুবিধাসমূহ:
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {facility.features.map((feature, idx) => (
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