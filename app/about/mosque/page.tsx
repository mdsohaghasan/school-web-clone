import React from 'react';
import { FaMosque, FaUsers, FaClock, FaPray, FaQuran, FaBookReader, FaHandHoldingHeart } from 'react-icons/fa';

const mosqueFeatures = [
  {
    title: "প্রশস্ত নামাজের স্থান",
    description: "একসাথে ১০০০+ মুসল্লির নামাজ আদায়ের ব্যবস্থা",
    icon: FaUsers
  },
  {
    title: "পাঁচ ওয়াক্ত নামাজ",
    description: "নিয়মিত জামাতের সাথে পাঁচ ওয়াক্ত নামাজ আদায়",
    icon: FaClock
  },
  {
    title: "জুমার নামাজ",
    description: "প্রতি শুক্রবার জুমার নামাজের বিশেষ আয়োজন",
    icon: FaPray
  },
  {
    title: "কুরআন শিক্ষা",
    description: "নিয়মিত কুরআন শিক্ষা ক্লাস পরিচালনা",
    icon: FaQuran
  },
  {
    title: "ইসলামি আলোচনা",
    description: "নিয়মিত ইসলামি আলোচনা ও ওয়াজ মাহফিল",
    icon: FaBookReader
  },
  {
    title: "সামাজিক কার্যক্রম",
    description: "বিভিন্ন সামাজিক ও ধর্মীয় অনুষ্ঠান আয়োজন",
    icon: FaHandHoldingHeart
  }
];

const prayerTimes = [
  { prayer: "ফজর", time: "৫:১৫ এএম" },
  { prayer: "যোহর", time: "১:৩০ পিএম" },
  { prayer: "আসর", time: "৪:৪৫ পিএম" },
  { prayer: "মাগরিব", time: "সূর্যাস্তের সাথে সাথে" },
  { prayer: "এশা", time: "৮:১৫ পিএম" },
  { prayer: "জুমা", time: "১:৩০ পিএম" }
];

const activities = [
  {
    title: "দৈনিক কার্যক্রম",
    items: [
      "পাঁচ ওয়াক্ত নামাজ জামাতের সাথে",
      "কুরআন তিলাওয়াত ও শিক্ষা",
      "হাদীস শিক্ষা",
      "ফিকহ শিক্ষা"
    ]
  },
  {
    title: "সাপ্তাহিক কার্যক্রম",
    items: [
      "জুমার নামাজ",
      "তাফসীর মজলিস",
      "সীরাত আলোচনা",
      "মাসআলা-মাসায়েল আলোচনা"
    ]
  },
  {
    title: "মাসিক কার্যক্রম",
    items: [
      "ইসলামি সেমினার",
      "ওয়াজ মাহফিল",
      "কুরআন প্রতিযোগিতা",
      "ইসলামি আলোচনা সভা"
    ]
  }
];

export default function MosquePage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground font-hind-siliguri">
            মসজিদ কমপ্লেক্স
          </h1>
          <p className="text-xl text-muted-foreground font-hind-siliguri max-w-3xl mx-auto">
            হাবরুল উম্মাহ মডেল মাদরাসার মসজিদ কমপ্লেক্স শিক্ষার্থী ও এলাকাবাসীর জন্য একটি আধ্যাত্মিক কেন্দ্র হিসেবে কাজ করে
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mosqueFeatures.map((feature, index) => (
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

        {/* Prayer Times */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground font-hind-siliguri text-center">
            নামাজের সময়সূচি
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {prayerTimes.map((prayer, index) => (
              <div key={index} className="bg-card rounded-lg p-4 text-center shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-card-foreground font-hind-siliguri">
                  {prayer.prayer}
                </h3>
                <p className="text-muted-foreground font-hind-siliguri">
                  {prayer.time}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-card-foreground font-hind-siliguri">
                {activity.title}
              </h3>
              <ul className="space-y-2">
                {activity.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <FaMosque className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground font-hind-siliguri">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-card-foreground font-hind-siliguri text-center">
            অন্যান্য সুবিধাসমূহ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground font-hind-siliguri">
                মসজিদের সুবিধাসমূহ
              </h3>
              <ul className="space-y-2 text-muted-foreground font-hind-siliguri">
                <li>• আধুনিক এয়ার কন্ডিশনিং ব্যবস্থা</li>
                <li>• পৃথক অযুখানা</li>
                <li>• মহিলাদের জন্য পৃথক নামাজের স্থান</li>
                <li>• আধুনিক সাউন্ড সিস্টেম</li>
                <li>• ইসলামি লাইব্রেরি</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground font-hind-siliguri">
                বিশেষ কার্যক্রম
              </h3>
              <ul className="space-y-2 text-muted-foreground font-hind-siliguri">
                <li>• রমজান মাসের বিশেষ ইবাদত</li>
                <li>• তারাবীহ নামাজ</li>
                <li>• ঈদের জামাত</li>
                <li>• ইসলামি বক্তৃতামালা</li>
                <li>• দাওয়াহ কার্যক্রম</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 