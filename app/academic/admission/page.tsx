import React from 'react';



export default function AdmissionProcessPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground font-hind-siliguri text-center">
            ভর্তি প্রক্রিয়া
          </h1>
          <p className="text-xl text-muted-foreground font-hind-siliguri max-w-3xl mx-auto text-center">
            হাবরুল উম্মাহ মডেল মাদরাসায় ভর্তির জন্য প্রয়োজনীয় সকল তথ্য 
          </p>
          <div className="text-lg text-muted-foreground font-hind-siliguri max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">প্রতিষ্ঠানের পরিচিতি</h2>
              <p className="mb-4 text-justify">
                হাবরুল উম্মাহ মডেল মাদরাসা কমপ্লেক্স একটি সুপ্রতিষ্ঠিত শিক্ষাপ্রতিষ্ঠান, যেখানে ইসলামী শিক্ষার পাশাপাশি আধুনিক শিক্ষার সমন্বয়ে ছাত্র-ছাত্রীদের মেধা ও নৈতিকতার উন্নয়ন করা হয়। প্রতিষ্ঠানে বালক ও বালিকা শাখায় নূরানী, নাজেরা, হিফজ, কিতাব বিভাগে শিশু থেকে নবম শ্রেণী পর্যন্ত শিক্ষা প্রদান করা হয়।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">শিক্ষা কার্যক্রম</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">নূরানী বিভাগ:</span> শিশুদের জন্য কুরআন শিক্ষার প্রাথমিক স্তর।</li>
                <li><span className="font-semibold">নাজেরা বিভাগ:</span> কুরআন শরীফ শুদ্ধভাবে পড়ার প্রশিক্ষণ।</li>
                <li><span className="font-semibold">হিফজ বিভাগ:</span> কুরআন মুখস্থ করার বিশেষ কোর্স।</li>
                <li><span className="font-semibold">কিতাব বিভাগ:</span> ইসলামী ফিকহ, হাদিস, তাফসিরসহ উচ্চতর ইসলামী শিক্ষা।</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">সুবিধাসমূহ</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">আবাসিক সুবিধা:</span> দূরবর্তী ছাত্র-ছাত্রীদের জন্য আবাসিক ব্যবস্থা।</li>
                <li><span className="font-semibold">অনাবাসিক সুবিধা:</span> স্থানীয় ছাত্র-ছাত্রীদের জন্য দৈনিক শিক্ষা গ্রহণের সুযোগ।</li>
                <li><span className="font-semibold">ডে-কেয়ার সুবিধা:</span> শিশুদের জন্য দিনব্যাপী যত্ন ও শিক্ষা।</li>
                <li><span className="font-semibold">লাইব্রেরি ও ল্যাব:</span> ছাত্র-ছাত্রীদের মেধা বিকাশের জন্য নিজস্ব লাইব্রেরি ও ল্যাব ব্যবহারের সুবিধা।</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">ক্যাম্পাসসমূহ</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">বালক শাখা প্রধান ক্যাম্পাস:</span> রাজিবপুর, সদর, লক্ষ্মীপুর।</li>
                <li><span className="font-semibold">বালিকা শাখা:</span> দুবাই মহল, পার্বতী নগর রোড, উত্তর মজুপুর, সদর, লক্ষ্মীপুর। (মাদাম ব্রিজ উত্তরে নেমে ৫০০ গজ পূর্বে)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">ভর্তির প্রয়োজনীয়তা</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">বয়সসীমা:</span> প্রতিটি বিভাগের জন্য নির্দিষ্ট বয়সসীমা প্রযোজ্য।</li>
                <li><span className="font-semibold">শিক্ষাগত যোগ্যতা:</span> পূর্ববর্তী শিক্ষাগত যোগ্যতার সনদপত্র।</li>
                <li><span className="font-semibold">জন্ম সনদ:</span> ছাত্র-ছাত্রীর জন্ম সনদপত্রের অনুলিপি।</li>
                <li><span className="font-semibold">ফটোগ্রাফ:</span> পাসপোর্ট সাইজের সাম্প্রতিক তোলা রঙিন ছবি (প্রতি শিক্ষার্থীর জন্য ২ কপি)।</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">ভর্তির প্রক্রিয়া</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li><span className="font-semibold">আবেদনপত্র সংগ্রহ:</span> প্রতিষ্ঠানের অফিস থেকে আবেদনপত্র সংগ্রহ।</li>
                <li><span className="font-semibold">ফরম পূরণ:</span> সঠিক তথ্য দিয়ে আবেদনপত্র পূরণ।</li>
                <li><span className="font-semibold">প্রয়োজনীয় কাগজপত্র জমা:</span> পূরণকৃত আবেদনপত্রের সাথে প্রয়োজনীয় কাগজপত্র জমা।</li>
                <li><span className="font-semibold">ভর্তি পরীক্ষা:</span> নির্দিষ্ট তারিখে ভর্তি পরীক্ষায় অংশগ্রহণ।</li>
                <li><span className="font-semibold">ফলাফল প্রকাশ:</span> ভর্তি পরীক্ষার ফলাফল প্রকাশ ও নির্বাচিত ছাত্র-ছাত্রীদের তালিকা।</li>
                <li><span className="font-semibold">ভর্তি নিশ্চিতকরণ:</span> নির্বাচিত ছাত্র-ছাত্রীদের ভর্তি ফি জমা দিয়ে ভর্তি প্রক্রিয়া সম্পন্ন।</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">যোগাযোগ</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">বালক শাখা:</span> 018 7667 2622</li>
                <li><span className="font-semibold">বালিকা শাখা:</span> 018 7667 2622</li>
              </ul>
              <p className="mt-4">ভর্তি ও অন্যান্য তথ্যের জন্য উপরের নম্বরে যোগাযোগ করুন।</p>
            </section>

            <section className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">নোট:</p>
              <p>ভর্তির সময়সীমা ও অন্যান্য তথ্যের জন্য প্রতিষ্ঠানের অফিসিয়াল ফেসবুক পেজ বা অফিসে সরাসরি যোগাযোগ করার পরামর্শ দেওয়া হচ্ছে।</p>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
} 