import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center font-hind-siliguri">রিফান্ড নীতি</h1>
      
      <div className="prose prose-lg max-w-none font-hind-siliguri">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">রিফান্ডের যোগ্যতা</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ভর্তি ফি রিফান্ডের জন্য আবেদনের সময়সীমা: ৭ দিন</li>
            <li>বই-খাতা রিফান্ডের জন্য সময়সীমা: ৩ দিন</li>
            <li>ইউনিফর্ম রিফান্ডের জন্য সময়সীমা: ৫ দিন</li>
            <li>অনলাইন পেমেন্ট রিফান্ডের জন্য সময়সীমা: ২৪ ঘন্টা</li>
            <li>মাসিক বেতন রিফান্ডের জন্য সময়সীমা: ১৫ দিন</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">রিফান্ড প্রক্রিয়া</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>রিফান্ড আবেদন ফর্ম পূরণ</li>
            <li>প্রয়োজনীয় কাগজপত্র জমা</li>
            <li>অনুমোদনের জন্য অপেক্ষা</li>
            <li>রিফান্ডের সিদ্ধান্ত জানানো</li>
            <li>রিফান্ড টাকা ফেরত দেওয়া</li>
            <li>রিফান্ডের রসিদ প্রদান</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">রিফান্ডের শর্তাবলী</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>পণ্য অক্ষত অবস্থায় থাকতে হবে</li>
            <li>মূল রসিদ উপস্থাপন করতে হবে</li>
            <li>রিফান্ডের কারণ উল্লেখ করতে হবে</li>
            <li>অনুমোদিত ব্যাংক অ্যাকাউন্টে রিফান্ড</li>
            <li>রিফান্ডের জন্য প্রক্রিয়াজাতকরণ ফি কাটা যাবে</li>
            <li>রিফান্ডের সিদ্ধান্ত চূড়ান্ত</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 