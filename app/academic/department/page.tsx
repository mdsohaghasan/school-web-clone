import React from 'react';

export default function DepartmentPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground font-hind-siliguri text-center">
            বিভাগসমূহ
          </h1>
          <p className="text-xl text-muted-foreground font-hind-siliguri max-w-3xl mx-auto text-center mb-12">
            হাবরুল উম্মাহ মডেল মাদরাসার বিভিন্ন বিভাগ সম্পর্কে বিস্তারিত তথ্য
          </p>

          <div className="text-lg text-muted-foreground font-hind-siliguri max-w-4xl mx-auto space-y-8">
            {/* Nurani Department */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">নূরানী বিভাগ</h2>
              <p className="mb-4 text-justify">
                নূরানী বিভাগ হল শিশুদের জন্য কুরআন শিক্ষার প্রাথমিক স্তর। এই বিভাগে শিশুদের আরবি বর্ণমালা, কুরআনের প্রাথমিক পাঠ এবং নামাজের সূরা শেখানো হয়। বিভাগটি বিশেষভাবে ৫-৮ বছর বয়সী শিশুদের জন্য পরিকল্পিত।
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>আরবি হরফ পরিচিতি ও উচ্চারণ</li>
                <li>কুরআন শরীফের প্রাথমিক পাঠ</li>
                <li>নামাজের সূরা ও দোয়া শিক্ষা</li>
                <li>ইসলামী আদব-কায়দা শিক্ষা</li>
              </ul>
            </section>

            {/* Nazera Department */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">নাজেরা বিভাগ</h2>
              <p className="mb-4 text-justify">
                নাজেরা বিভাগে শিক্ষার্থীরা কুরআন শরীফ সঠিক নিয়ম-কানুন মেনে পড়তে শেখে। এখানে তাজবীদ সহ কুরআন তিলাওয়াতের বিস্তারিত শিক্ষা দেওয়া হয়। বিভাগটি মূলত ৮-১২ বছর বয়সী শিক্ষার্থীদের জন্য উপযোগী।
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>কুরআন শরীফ শুদ্ধভাবে পড়ার নিয়ম-কানুন</li>
                <li>তাজবীদ শিক্ষা</li>
                <li>মাখরাজ ও সিফাতের বিস্তারিত শিক্ষা</li>
                <li>কুরআন তিলাওয়াতের সুর ও কায়দা</li>
              </ul>
            </section>

            {/* Hifz Department */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">হিফজ বিভাগ</h2>
              <p className="mb-4 text-justify">
                হিফজ বিভাগ কুরআন শরীফ মুখস্থ করার জন্য বিশেষায়িত একটি বিভাগ। এখানে ছাত্র-ছাত্রীদের নিবিড় তত্ত্বাবধানে কুরআন হিফজের প্রশিক্ষণ দেওয়া হয়। বিভাগটিতে যেকোনো বয়সের শিক্ষার্থী ভর্তি হতে পারে, তবে ৮-১৫ বছর বয়স সর্বোত্তম।
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>পূর্ণ কুরআন শরীফ মুখস্থকরণ</li>
                <li>দৈনিক নতুন ও পুরাতন পাঠ</li>
                <li>মুখস্থ পরীক্ষা ও মূল্যায়ন</li>
                <li>বিশেষ মেধাবী শিক্ষার্থীদের জন্য দ্রুত হিফজ প্রোগ্রাম</li>
              </ul>
            </section>

            {/* Kitab Department */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">কিতাব বিভাগ</h2>
              <p className="mb-4 text-justify">
                কিতাব বিভাগ ইসলামী শরীয়াহ ও ফিকহ শিক্ষার উচ্চতর বিভাগ। এখানে হাদিস, তাফসির, ফিকহ, আকাইদ সহ ইসলামী জ্ঞানের বিভিন্ন শাখায় গভীর শিক্ষা দেওয়া হয়। এই বিভাগে ভর্তির জন্য নূন্যতম নাজেরা শিক্ষা সম্পন্ন হওয়া আবশ্যক।
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>হাদিস ও তাফসির শিক্ষা</li>
                <li>ফিকহ ও আকাইদ</li>
                <li>আরবি ভাষা ও সাহিত্য</li>
                <li>ইসলামী ইতিহাস ও সংস্কৃতি</li>
              </ul>
            </section>

            {/* Academic Department */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">একাডেমিক বিভাগ</h2>
              <p className="mb-4 text-justify">
                একাডেমিক বিভাগে ইসলামী শিক্ষার পাশাপাশি আধুনিক শিক্ষার সমন্বয় করা হয়। এখানে জাতীয় শিক্ষাক্রম অনুযায়ী সকল বিষয় পড়ানো হয়। প্রাথমিক থেকে মাধ্যমিক পর্যন্ত শ্রেণি রয়েছে।
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>বাংলা, ইংরেজি, গণিত সহ সকল আবশ্যিক বিষয়</li>
                <li>বিজ্ঞান ও প্রযুক্তি শিক্ষা</li>
                <li>কম্পিউটার শিক্ষা</li>
                <li>নৈতিক শিক্ষা ও জীবন দক্ষতা</li>
              </ul>
            </section>

            {/* Contact Section */}
            <section className="bg-gray-50 p-6 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">যোগাযোগ</h2>
              <p className="mb-4">
                বিভিন্ন বিভাগে ভর্তি সংক্রান্ত তথ্যের জন্য যোগাযোগ করুন:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">ফোন:</span> 018 7667 2622</li>
                <li><span className="font-semibold">ইমেইল:</span> info@habrulummah.edu.bd</li>
                <li><span className="font-semibold">ঠিকানা:</span> রাজিবপুর, সদর, লক্ষ্মীপুর</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 