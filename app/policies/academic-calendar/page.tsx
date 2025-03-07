import React from 'react';

export default function AcademicCalendar() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center font-hind-siliguri">একাডেমিক ক্যালেন্ডার</h1>
      
      <div className="prose prose-lg max-w-none font-hind-siliguri">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">শিক্ষাবর্ষের সময়সূচি</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>শিক্ষাবর্ষ শুরু: জানুয়ারি মাস</li>
            <li>শ্রেণি কার্যক্রম: জানুয়ারি-নভেম্বর</li>
            <li>পরীক্ষা সময়কাল: ডিসেম্বর</li>
            <li>ছুটি: রমজান ও ঈদুল ফিতর</li>
            <li>ছুটি: ঈদুল আজহা</li>
            <li>ছুটি: পূজা পর্ব</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">মাসিক কার্যক্রম</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>প্রথম সপ্তাহ: মাসিক পরীক্ষা</li>
            <li>দ্বিতীয় সপ্তাহ: ফলাফল প্রকাশ</li>
            <li>তৃতীয় সপ্তাহ: অভিভাবক সমাবেশ</li>
            <li>চতুর্থ সপ্তাহ: বিশেষ কর্মশালা</li>
            <li>সাপ্তাহিক: সাংস্কৃতিক অনুষ্ঠান</li>
            <li>দৈনিক: খেলাধুলা ও শরীরচর্চা</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">বিশেষ অনুষ্ঠান</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>প্রতিষ্ঠা দিবস: ১ জানুয়ারি</li>
            <li>শিক্ষক দিবস: ৫ অক্টোবর</li>
            <li>স্বাধীনতা দিবস: ২৬ মার্চ</li>
            <li>বিজয় দিবস: ১৬ ডিসেম্বর</li>
            <li>সাংস্কৃতিক প্রতিযোগিতা: জুলাই</li>
            <li>বিজ্ঞান মেলা: সেপ্টেম্বর</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 