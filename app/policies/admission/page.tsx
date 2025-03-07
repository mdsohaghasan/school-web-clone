import React from 'react';

export default function AdmissionPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center font-hind-siliguri">ভর্তি নীতিমালা</h1>
      
      <div className="prose prose-lg max-w-none font-hind-siliguri">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">ভর্তির যোগ্যতা</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>নূন্যতম ৫ বছর বয়স হতে হবে</li>
            <li>পূর্ববর্তী শিক্ষা প্রতিষ্ঠানের সনদপত্র</li>
            <li>জন্ম নিবন্ধন সনদ</li>
            <li>পাসপোর্ট সাইজ ছবি</li>
            <li>অভিভাবকের জাতীয় পরিচয়পত্র</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">ভর্তি প্রক্রিয়া</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>অনলাইন আবেদন ফর্ম পূরণ</li>
            <li>প্রয়োজনীয় কাগজপত্র জমা</li>
            <li>ভর্তি পরীক্ষায় অংশগ্রহণ</li>
            <li>মৌখিক পরীক্ষা</li>
            <li>চূড়ান্ত নির্বাচন</li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">ভর্তি ফি</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>আবেদন ফি: ৫০০ টাকা</li>
            <li>ভর্তি ফি: ৫,০০০ টাকা</li>
            <li>মাসিক বেতন: ১,৫০০ টাকা</li>
            <li>বই-খাতা: ২,০০০ টাকা</li>
            <li>ইউনিফর্ম: ১,৫০০ টাকা</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 