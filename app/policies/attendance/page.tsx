import React from 'react';

export default function InstitutionalPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center font-hind-siliguri">প্রাতিষ্ঠানিক নীতিমালা</h1>
      
      <div className="prose prose-lg max-w-none font-hind-siliguri">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">শিক্ষার্থীদের জন্য নিয়মাবলী</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>প্রতিদিন নির্ধারিত সময়ে উপস্থিত থাকতে হবে</li>
            <li>ইউনিফর্ম পরিধান করে আসতে হবে</li>
            <li>প্রতিদিনের নামায জামাতে আদায় করতে হবে</li>
            <li>শিক্ষকদের প্রতি শ্রদ্ধাশীল হতে হবে</li>
            <li>প্রতিষ্ঠানের সম্পত্তি রক্ষা করতে হবে</li>
            <li>পরিষ্কার-পরিচ্ছন্ন থাকতে হবে</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">অভিভাবকদের জন্য নিয়মাবলী</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>নিয়মিত বেতন পরিশোধ করতে হবে</li>
            <li>শিক্ষার্থীর অগ্রগতি সম্পর্কে খোঁজ খবর নিতে হবে</li>
            <li>প্রতিষ্ঠানের সভা ও অনুষ্ঠানে অংশগ্রহণ করতে হবে</li>
            <li>শিক্ষার্থীর আচরণের দায়িত্ব নিতে হবে</li>
            <li>প্রতিষ্ঠানের উন্নয়নে সহযোগিতা করতে হবে</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">শৃঙ্খলামূলক ব্যবস্থা</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>অনুপস্থিতির জন্য সতর্কতা</li>
            <li>অনিয়মিত উপস্থিতির জন্য জরিমানা</li>
            <li>অনৈতিক আচরণের জন্য শাস্তি</li>
            <li>চূড়ান্ত শাস্তি হিসেবে বহিষ্কার</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 