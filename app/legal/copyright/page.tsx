import React from 'react';

export default function CopyrightPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center font-hind-siliguri">কপিরাইট নীতি</h1>
      
      <div className="prose prose-lg max-w-none font-hind-siliguri">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">কপিরাইট অধিকার</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ওয়েবসাইটের সকল কন্টেন্টের কপিরাইট সংরক্ষিত</li>
            <li>শিক্ষা উপকরণের কপিরাইট সংরক্ষিত</li>
            <li>ছবি ও ভিডিওর কপিরাইট সংরক্ষিত</li>
            <li>লোগো ও ট্রেডমার্কের কপিরাইট সংরক্ষিত</li>
            <li>প্রকাশিত বই ও পুস্তকের কপিরাইট সংরক্ষিত</li>
            <li>অনলাইন কন্টেন্টের কপিরাইট সংরক্ষিত</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">অনুমোদিত ব্যবহার</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ব্যক্তিগত শিক্ষার জন্য ব্যবহার</li>
            <li>অনুমোদিত শিক্ষা প্রতিষ্ঠানে ব্যবহার</li>
            <li>অনুমোদিত গবেষণার জন্য ব্যবহার</li>
            <li>অনুমোদিত উদ্ধৃতির জন্য ব্যবহার</li>
            <li>অনুমোদিত রিভিউয়ের জন্য ব্যবহার</li>
            <li>অনুমোদিত রিপোর্টিংয়ের জন্য ব্যবহার</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">নিষিদ্ধ কার্যক্রম</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>অনুমতি ছাড়া কন্টেন্ট কপি করা</li>
            <li>অনুমতি ছাড়া কন্টেন্ট বিতরণ করা</li>
            <li>অনুমতি ছাড়া কন্টেন্ট বিক্রি করা</li>
            <li>অনুমতি ছাড়া কন্টেন্ট পরিবর্তন করা</li>
            <li>অনুমতি ছাড়া কন্টেন্ট পুনরুৎপাদন করা</li>
            <li>অনুমতি ছাড়া কন্টেন্ট প্রদর্শন করা</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 