import React from 'react';
import Image from 'next/image';
import { FaGraduationCap, FaAward, FaBook, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const achievements = [
  {
    title: "শিক্ষাগত যোগ্যতা",
    items: [
      "দাওরায়ে হাদীস, জামিয়া আশরাফিয়া, লাহোর",
      "কামিল (হাদীস), ইসলামিক আরাবিক ইউনিভার্সিটি",
      "পিএইচডি ইসলামিক স্টাডিজ, ঢাকা বিশ্ববিদ্যালয়"
    ],
    icon: FaGraduationCap
  },
  {
    title: "অভিজ্ঞতা",
    items: [
      "২৫+ বছরের শিক্ষকতার অভিজ্ঞতা",
      "১০+ বছর প্রতিষ্ঠান প্রধান হিসেবে দায়িত্ব পালন",
      "বিভিন্ন ইসলামি গবেষণা প্রকল্পে অংশগ্রহণ"
    ],
    icon: FaBook
  },
  {
    title: "সম্মাননা",
    items: [
      "শ্রেষ্ঠ শিক্ষক পুরস্কার ২০১৮",
      "ইসলামি গবেষণায় বিশেষ অবদানের স্বীকৃতি",
      "জাতীয় শিক্ষা পুরস্কার ২০২০"
    ],
    icon: FaAward
  }
];

export default function PrincipalPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground font-hind-siliguri">
            অধ্যক্ষের কথা
          </h1>
          <p className="text-xl text-muted-foreground font-hind-siliguri max-w-3xl mx-auto">
            হাবরুল উম্মাহ মডেল মাদরাসার অধ্যক্ষ মাওলানা আব্দুল্লাহ আল-কাফী
          </p>
        </div>

        {/* Principal's Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/principal.jpg"
              alt="অধ্যক্ষ"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground font-hind-siliguri">
              পরিচিতি
            </h2>
            <p className="text-muted-foreground font-hind-siliguri mb-4">
              মাওলানা আব্দুল্লাহ আল-কাফী একজন বিশিষ্ট ইসলামি স্কলার এবং শিক্ষাবিদ। তিনি ২০১৫ সাল থেকে হাবরুল উম্মাহ মডেল মাদরাসার অধ্যক্ষ হিসেবে দায়িত্ব পালন করছেন। তিনি তার জ্ঞান, অভিজ্ঞতা ও দূরদর্শী নেতৃত্বের মাধ্যমে মাদরাসাকে উন্নতির শীর্ষে নিয়ে যাচ্ছেন।
            </p>
            <p className="text-muted-foreground font-hind-siliguri">
              তিনি ইসলামি শিক্ষার পাশাপাশি আধুনিক শিক্ষার গুরুত্ব অনুধাবন করেন এবং উভয়ের সমন্বয়ে একটি আদর্শ শিক্ষা ব্যবস্থা গড়ে তোলার লক্ষ্যে কাজ করে যাচ্ছেন।
            </p>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <FaQuoteLeft className="text-primary w-8 h-8 mx-auto mb-4" />
            <p className="text-lg text-muted-foreground font-hind-siliguri mb-4">
              আমাদের লক্ষ্য শুধু শিক্ষার্থীদের একাডেমিক সাফল্যই নয়, বরং তাদের চরিত্র গঠন, নৈতিক মূল্যবোধ এবং ইসলামি আদর্শে গড়ে তোলা। আমরা চাই আমাদের শিক্ষার্থীরা ইসলামি মূল্যবোধ ও আধুনিক জ্ঞানের সমন্বয়ে একজন আদর্শ মানুষ হিসেবে গড়ে উঠুক।
            </p>
            <FaQuoteRight className="text-primary w-8 h-8 mx-auto mt-4" />
            <p className="text-primary font-bold mt-4 font-hind-siliguri">
              - মাওলানা আব্দুল্লাহ আল-কাফী
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground font-hind-siliguri text-center">
            যোগ্যতা ও অর্জন
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg">
                <achievement.icon className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-card-foreground font-hind-siliguri">
                  {achievement.title}
                </h3>
                <ul className="space-y-2">
                  {achievement.items.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground font-hind-siliguri">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-card-foreground font-hind-siliguri text-center">
            যোগাযোগ
          </h2>
          <div className="text-center text-muted-foreground font-hind-siliguri">
            <p>ইমেইল: principal@habrulummah.edu.bd</p>
            <p>ফোন: +880 1234-567890</p>
            <p>অফিস সময়: রবি-বৃহস্পতিবার, সকাল ৯টা - বিকাল ৪টা</p>
          </div>
        </div>
      </div>
    </div>
  );
} 