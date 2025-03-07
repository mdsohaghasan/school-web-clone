import React from 'react';

export default function CampusPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center font-hind-siliguri">ক্যাম্পাস নীতিমালা</h1>
      
      <div className="prose prose-lg max-w-none font-hind-siliguri">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">ক্যাম্পাস সুবিধা</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>আধুনিক শ্রেণিকক্ষ</li>
            <li>লাইব্রেরি</li>
            <li>কম্পিউটার ল্যাব</li>
            <li>সায়েন্স ল্যাব</li>
            <li>খেলার মাঠ</li>
            <li>মসজিদ</li>
            <li>ক্যান্টিন</li>
            <li>স্বাস্থ্য কেন্দ্র</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">ক্যাম্পাস নিয়মাবলী</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ক্যাম্পাসে প্রবেশের সময় পরিচয়পত্র দেখাতে হবে</li>
            <li>ক্যাম্পাসে ধূমপান নিষিদ্ধ</li>
            <li>ক্যাম্পাসে মোবাইল ফোন ব্যবহার নিষিদ্ধ</li>
            <li>ক্যাম্পাসে পরিষ্কার-পরিচ্ছন্নতা বজায় রাখতে হবে</li>
            <li>ক্যাম্পাসের সম্পত্তি রক্ষা করতে হবে</li>
            <li>ক্যাম্পাসে শান্তি-শৃঙ্খলা বজায় রাখতে হবে</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">সুরক্ষা ব্যবস্থা</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>২৪ ঘন্টা নিরাপত্তা প্রহরী</li>
            <li>সিসিটিভি ক্যামেরা</li>
            <li>আগুন নেভানোর যন্ত্র</li>
            <li>প্রাথমিক চিকিৎসা কেন্দ্র</li>
            <li>জরুরি প্রস্থান পথ</li>
            <li>নিয়মিত নিরাপত্তা তদারকি</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 