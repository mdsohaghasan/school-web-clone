import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center font-hind-siliguri">গোপনীয়তা নীতি</h1>
      
      <div className="prose prose-lg max-w-none font-hind-siliguri">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">তথ্য সংগ্রহ</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ব্যক্তিগত তথ্য (নাম, ঠিকানা, ফোন নম্বর)</li>
            <li>শিক্ষাগত তথ্য (রোল নম্বর, শ্রেণি, ফলাফল)</li>
            <li>অনলাইন ব্যবহারের তথ্য (আইপি ঠিকানা, ব্রাউজার তথ্য)</li>
            <li>কুকি এবং ট্র্যাকিং তথ্য</li>
            <li>অনলাইন পেমেন্ট তথ্য</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">তথ্য ব্যবহার</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>সেবা প্রদানের জন্য</li>
            <li>অ্যাকাউন্ট নিরাপত্তার জন্য</li>
            <li>সেবা উন্নতির জন্য</li>
            <li>যোগাযোগের জন্য</li>
            <li>আইনি প্রয়োজনীয়তার জন্য</li>
            <li>বিজ্ঞাপন প্রদানের জন্য</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">তথ্য সুরক্ষা</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>এনক্রিপশন প্রযুক্তি ব্যবহার</li>
            <li>নিয়মিত নিরাপত্তা আপডেট</li>
            <li>সীমিত কর্মচারী অ্যাক্সেস</li>
            <li>তথ্য ব্যাকআপ সিস্টেম</li>
            <li>নিয়মিত নিরাপত্তা অডিট</li>
            <li>তথ্য লিক প্রতিরোধ ব্যবস্থা</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 