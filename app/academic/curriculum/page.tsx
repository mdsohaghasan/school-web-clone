import React from 'react';
import { FaBook, FaClock, FaUserGraduate } from 'react-icons/fa';



export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground font-hind-siliguri text-center">
            পাঠ্যক্রম
          </h1>
          <p className="text-xl text-muted-foreground font-hind-siliguri max-w-3xl mx-auto text-center mb-12">
            হাবরুল উম্মাহ মডেল মাদরাসার বিস্তারিত পাঠ্যক্রম
          </p>

          <div className="text-lg text-muted-foreground font-hind-siliguri max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">পাঠ্যক্রমের পরিচিতি</h2>
              <p className="mb-4 text-justify">
                হাবরুল উম্মাহ মডেল মাদরাসার পাঠ্যক্রম ইসলামী ও আধুনিক শিক্ষার সমন্বয়ে প্রণীত। এখানে ছাত্র-ছাত্রীরা কুরআন, হাদিস, ফিকহ সহ ইসলামী শিক্ষার পাশাপাশি আধুনিক বিষয়গুলোও শিক্ষা লাভ করে। পাঠ্যক্রমটি বিভিন্ন স্তরে বিভক্ত, যা শিক্ষার্থীদের ধারাবাহিক উন্নতি নিশ্চিত করে।
              </p>
            </section>

            {/* Nurani Curriculum */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">নূরানী পাঠ্যক্রম</h2>
              <p className="mb-4 text-justify">
                নূরানী পাঠ্যক্রম শিশুদের জন্য প্রাথমিক ইসলামী শিক্ষার ভিত্তি স্থাপন করে। এই স্তরে শিক্ষার্থীরা নিম্নলিখিত বিষয়গুলো শিক্ষা করে:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>আরবি বর্ণমালা পরিচিতি ও লেখা</li>
                <li>কুরআন শরীফের প্রাথমিক পাঠ</li>
                <li>নামাযের সূরা ও দোয়া</li>
                <li>ইসলামী শিষ্টাচার</li>
                <li>প্রাথমিক গণিত</li>
                <li>বাংলা ও ইংরেজি বর্ণমালা</li>
              </ul>
            </section>

            {/* Nazera Curriculum */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">নাজেরা পাঠ্যক্রম</h2>
              <p className="mb-4 text-justify">
                নাজেরা পাঠ্যক্রমে কুরআন তিলাওয়াতের বিস্তারিত শিক্ষা দেওয়া হয়। এই স্তরে নিম্নলিখিত বিষয়গুলো অন্তর্ভুক্ত:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>তাজবীদ সহ কুরআন শরীফ পাঠ</li>
                <li>মাখরাজ ও সিফাতের বিস্তারিত শিক্ষা</li>
                <li>কুরআন তিলাওয়াতের নিয়ম-কানুন</li>
                <li>ইসলামী সংগীত ও নাশিদ</li>
                <li>প্রাথমিক আরবি ভাষা</li>
                <li>ইসলামী ইতিহাস</li>
              </ul>
            </section>

            {/* Hifz Curriculum */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">হিফজ পাঠ্যক্রম</h2>
              <p className="mb-4 text-justify">
                হিফজ পাঠ্যক্রম কুরআন শরীফ মুখস্থ করার জন্য বিশেষভাবে ডিজাইন করা হয়েছে। এই পাঠ্যক্রমে অন্তর্ভুক্ত রয়েছে:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>দৈনিক নতুন পাঠ (সবক)</li>
                <li>পূর্বের পাঠ পুনরাবৃত্তি (দাওর)</li>
                <li>তাজবীদ নিয়ম অনুসরণ</li>
                <li>কুরআনের অর্থ ও ব্যাখ্যা</li>
                <li>স্মৃতিশক্তি বৃদ্ধির কৌশল</li>
                <li>নিয়মিত মূল্যায়ন ও পরীক্ষা</li>
              </ul>
            </section>

            {/* Kitab Curriculum */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">কিতাব পাঠ্যক্রম</h2>
              <p className="mb-4 text-justify">
                কিতাব পাঠ্যক্রম উচ্চতর ইসলামী শিক্ষার জন্য প্রণীত। এই পাঠ্যক্রমে নিম্নলিখিত বিষয়গুলো অন্তর্ভুক্ত:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>হাদিস শরীফ ও উসূলে হাদিস</li>
                <li>তাফসীর ও উসূলে তাফসীর</li>
                <li>ফিকহ ও উসূলে ফিকহ</li>
                <li>আকাইদ ও কালাম</li>
                <li>আরবি সাহিত্য ও ব্যাকরণ</li>
                <li>ইসলামী দর্শন</li>
              </ul>
            </section>

            {/* Academic Curriculum */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">একাডেমিক পাঠ্যক্রম</h2>
              <p className="mb-4 text-justify">
                জাতীয় শিক্ষাক্রমের সাথে সামঞ্জস্য রেখে একাডেমিক পাঠ্যক্রম প্রণয়ন করা হয়েছে। এতে অন্তর্ভুক্ত রয়েছে:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>বাংলা ভাষা ও সাহিত্য</li>
                <li>ইংরেজি ভাষা ও সাহিত্য</li>
                <li>গণিত ও বিজ্ঞান</li>
                <li>সামাজিক বিজ্ঞান</li>
                <li>তথ্য ও যোগাযোগ প্রযুক্তি</li>
                <li>শারীরিক শিক্ষা ও স্বাস্থ্য</li>
              </ul>
            </section>

            {/* Co-curricular Activities */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">সহ-পাঠ্যক্রম কার্যক্রম</h2>
              <p className="mb-4 text-justify">
                শিক্ষার্থীদের সর্বাঙ্গীণ বিকাশের জন্য বিভিন্ন সহ-পাঠ্যক্রম কার্যক্রম পরিচালনা করা হয়:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>কুরআন তিলাওয়াত প্রতিযোগিতা</li>
                <li>হাদিস শরীফ আবৃত্তি</li>
                <li>ইসলামী সংগীত</li>
                <li>বক্তৃতা ও বিতর্ক</li>
                <li>ক্রীড়া প্রতিযোগিতা</li>
                <li>সাহিত্য ও সাংস্কৃতিক অনুষ্ঠান</li>
              </ul>
            </section>

            {/* Assessment System */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">মূল্যায়ন পদ্ধতি</h2>
              <p className="mb-4 text-justify">
                শিক্ষার্থীদের অগ্রগতি নিয়মিত মূল্যায়ন করা হয়। মূল্যায়ন পদ্ধতিতে অন্তর্ভুক্ত রয়েছে:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>দৈনিক পাঠ মূল্যায়ন</li>
                <li>সাপ্তাহিক পরীক্ষা</li>
                <li>মাসিক মূল্যায়ন</li>
                <li>অর্ধ-বার্ষিক পরীক্ষা</li>
                <li>বার্ষিক পরীক্ষা</li>
                <li>মৌখিক ও ব্যবহারিক পরীক্ষা</li>
              </ul>
            </section>

            {/* Additional Information */}
            <section className="bg-gray-50 p-6 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">অতিরিক্ত তথ্য</h2>
              <p className="mb-4">
                পাঠ্যক্রম সম্পর্কে বিস্তারিত জানতে যোগাযোগ করুন:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">ফোন:</span> 018 7667 2622</li>
                <li><span className="font-semibold">ইমেইল:</span> info@habrulummah.edu.bd</li>
                <li><span className="font-semibold">ঠিকানা:</span> রাজিবপুর, সদর, লক্ষ্মীপুর</li>
              </ul>
              <p className="mt-4 text-sm">
                * পাঠ্যক্রম প্রয়োজন অনুযায়ী পরিবর্তন ও পরিমার্জন করা হতে পারে।
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 