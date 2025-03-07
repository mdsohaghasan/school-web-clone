import React from 'react';

export default function TermsOfUse() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center font-hind-siliguri">ব্যবহারের শর্তাবলী</h1>
      
      <div className="prose prose-lg max-w-none font-hind-siliguri">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">সেবা ব্যবহারের শর্ত</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ওয়েবসাইট ব্যবহারের জন্য ন্যূনতম ১৩ বছর বয়স হতে হবে</li>
            <li>সঠিক তথ্য প্রদান করতে হবে</li>
            <li>অ্যাকাউন্ট নিরাপত্তার দায়িত্ব ব্যবহারকারীর</li>
            <li>সেবা ব্যবহারের জন্য ইন্টারনেট সংযোগ প্রয়োজন</li>
            <li>সেবা ব্যবহারের জন্য প্রয়োজনীয় ডিভাইস থাকতে হবে</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">নিষিদ্ধ কার্যক্রম</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>অননুমোদিত অ্যাক্সেস</li>
            <li>সিস্টেম ক্ষতিগ্রস্ত করা</li>
            <li>ভুয়া তথ্য প্রকাশ</li>
            <li>অন্যের তথ্য চুরি</li>
            <li>স্প্যাম বা ক্ষতিকর কন্টেন্ট</li>
            <li>অনৈতিক কার্যক্রম</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">দায়বদ্ধতা</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>সেবা ব্যবহারের ফলে সৃষ্ট ক্ষতির জন্য দায়ী নয়</li>
            <li>তৃতীয় পক্ষের সেবার জন্য দায়ী নয়</li>
            <li>ইন্টারনেট সংযোগ সমস্যার জন্য দায়ী নয়</li>
            <li>ব্যবহারকারীর তথ্য সুরক্ষার জন্য সর্বোচ্চ চেষ্টা</li>
            <li>সেবা পরিবর্তনের অধিকার সংরক্ষিত</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 