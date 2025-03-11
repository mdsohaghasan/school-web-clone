import React from 'react';
import { FaGraduationCap, FaHandHoldingHeart, FaCheckCircle, FaInfoCircle, FaFileAlt } from 'react-icons/fa';

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground font-hind-siliguri text-center">
            ভর্তি ফি এবং আর্থিক তথ্য
          </h1>
          <p className="text-xl text-muted-foreground font-hind-siliguri max-w-3xl mx-auto text-center">
            হাবরুল উম্মাহ মডেল মাদরাসায় ভর্তির জন্য নিম্নোক্ত ফি এবং স্কলারশিপ সম্পর্কিত তথ্য প্রদান করা হলো
          </p>
        </div>

        <div className="text-lg text-muted-foreground font-hind-siliguri max-w-4xl mx-auto space-y-8">
          {/* Admission Fees Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">ভর্তি ফি এবং অন্যান্য খরচ</h2>
            <p className="mb-4 text-justify">
              প্রতিটি শিক্ষার্থীর জন্য আবেদন ফি ৫০০ টাকা, ভর্তি ফি ৫,০০০ টাকা, মাসিক বেতন ১,৫০০ টাকা, বই-খাতার জন্য ২,০০০ টাকা এবং ইউনিফর্মের জন্য ১,৫০০ টাকা নির্ধারিত হয়েছে। এই ফি সমূহ শিক্ষার্থীদের মানসম্মত শিক্ষা ও সেবা প্রদানের জন্য ব্যবহৃত হয়।
            </p>
          </section>

          {/* Scholarship Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">স্কলারশিপ এবং আর্থিক সহায়তা</h2>
            <p className="mb-4 text-justify">
              প্রতিষ্ঠানটি মেধাবী ও আর্থিকভাবে অসচ্ছল শিক্ষার্থীদের জন্য বিভিন্ন স্কলারশিপ ও আর্থিক সহায়তা প্রদান করে থাকে। স্কলারশিপের ধরন ও সুবিধাসমূহ নিম্নরূপ:
            </p>
            <div className="space-y-4 pl-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">মেধা স্কলারশিপ</h3>
                <p className="text-justify">
                  ভর্তি পরীক্ষায় কৃতিত্বপূর্ণ ফলাফল অর্জনকারী শিক্ষার্থীদের জন্য এই স্কলারশিপ প্রদান করা হয়। এতে ভর্তি ফি, মাসিক বেতন, বই-খাতা এবং হোস্টেল ফি মওকুফ করা হয়, যা শিক্ষার্থীদের উচ্চমানের শিক্ষার সুযোগ করে দেয়।
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">অর্থনৈতিক সহায়তা</h3>
                <p className="text-justify">
                  অর্থনৈতিকভাবে অসচ্ছল মেধাবী শিক্ষার্থীদের জন্য এই সহায়তা প্রদান করা হয়। এতে মাসিক বেতন, বই-খাতা, হোস্টেল ফি এবং মেডিকেল সহায়তা মওকুফ করা হয়, যা তাদের শিক্ষাজীবনকে সহজতর করে।
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">বিশেষ স্কলারশিপ</h3>
                <p className="text-justify">
                  বিশেষ প্রতিভা ও কৃতিত্বের জন্য এই স্কলারশিপ প্রদান করা হয়। এতে ভর্তি ফি, মাসিক বেতন, বই-খাতা, হোস্টেল ফি এবং মেডিকেল সহায়তা মওকুফ করা হয়, যা শিক্ষার্থীদের প্রতিভা বিকাশে সহায়তা করে।
                </p>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">স্কলারশিপের জন্য আবেদন প্রক্রিয়া</h2>
            <p className="text-justify">
              স্কলারশিপের জন্য শিক্ষার্থীদের নির্ধারিত ফর্ম পূরণ করতে হয় এবং প্রয়োজনীয় সকল কাগজপত্র জমা দিতে হয়। আবেদনসমূহ মূল্যায়ন ও নির্বাচন প্রক্রিয়া সম্পন্ন হওয়ার পর নির্বাচিত শিক্ষার্থীদের স্কলারশিপ প্রদান করা হয়।
            </p>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">যোগাযোগ</h2>
            <p className="mb-4 text-justify">
              ভর্তি ফি, স্কলারশিপ এবং অন্যান্য তথ্যের জন্য প্রতিষ্ঠানের অফিসিয়াল ফেসবুক পেজে যোগাযোগ করতে পারেন। এছাড়াও, ফোন নম্বর ০১৮ ৭৬৬৭ ২৬২২ এ কল করে বিস্তারিত জানতে পারবেন।
            </p>
            <p className="text-justify">
              উপরের তথ্যসমূহ শিক্ষার্থীদের ভর্তি প্রক্রিয়া ও সুবিধাসমূহ সম্পর্কে স্পষ্ট ধারণা প্রদান করবে। প্রয়োজনীয় তথ্যের জন্য প্রতিষ্ঠানের সাথে সরাসরি যোগাযোগ করার পরামর্শ দেওয়া হচ্ছে।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 