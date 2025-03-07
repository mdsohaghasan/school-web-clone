import React from 'react';

export default function ExaminationSystem() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center font-hind-siliguri">পরীক্ষা সিস্টেম</h1>
      
      <div className="prose prose-lg max-w-none font-hind-siliguri">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">পরীক্ষার ধরন</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>মাসিক পরীক্ষা</li>
            <li>ত্রৈমাসিক পরীক্ষা</li>
            <li>অর্ধবার্ষিক পরীক্ষা</li>
            <li>বার্ষিক পরীক্ষা</li>
            <li>বোর্ড পরীক্ষা</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">পরীক্ষার নিয়মাবলী</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>পরীক্ষার সময়সূচি আগে থেকে ঘোষণা করা হবে</li>
            <li>পরীক্ষার হলে নকল করা যাবে না</li>
            <li>নির্ধারিত সময়ের মধ্যে উত্তরপত্র জমা দিতে হবে</li>
            <li>পরীক্ষার হলে মোবাইল ফোন ব্যবহার করা যাবে না</li>
            <li>পরীক্ষার হলে শৃঙ্খলা বজায় রাখতে হবে</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">ফলাফল প্রকাশ</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>পরীক্ষার ফলাফল নির্ধারিত সময়ে প্রকাশ করা হবে</li>
            <li>অনলাইনে ফলাফল দেখা যাবে</li>
            <li>ফলাফল কার্ড অভিভাবকদের কাছে পৌঁছে দেওয়া হবে</li>
            <li>পুনর্বিন্যাস পরীক্ষার সুযোগ থাকবে</li>
            <li>ফলাফল নিয়ে আপিল করার সুযোগ থাকবে</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 