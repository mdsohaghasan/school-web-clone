import React from 'react';
import { FaGraduationCap, FaHandHoldingHeart, FaCheckCircle, FaInfoCircle, FaFileAlt } from 'react-icons/fa';

const scholarshipTypes = [
  {
    title: "মেধা স্কলারশিপ",
    description: "ভর্তি পরীক্ষায় কৃতিত্বপূর্ণ ফলাফলের জন্য",
    icon: FaGraduationCap,
    benefits: [
      "ভর্তি ফি মওকুফ",
      "মাসিক বেতন মওকুফ",
      "বই-খাতা সহায়তা",
      "হোস্টেল ফি মওকুফ"
    ]
  },
  {
    title: "অর্থনৈতিক সহায়তা",
    description: "অর্থনৈতিকভাবে অসচ্ছল মেধাবী শিক্ষার্থীদের জন্য",
    icon: FaHandHoldingHeart,
    benefits: [
      "মাসিক বেতন মওকুফ",
      "বই-খাতা সহায়তা",
      "হোস্টেল ফি মওকুফ",
      "মেডিকেল সহায়তা"
    ]
  },
  {
    title: "বিশেষ স্কলারশিপ",
    description: "বিশেষ প্রতিভা ও কৃতিত্বের জন্য",
    icon: FaCheckCircle,
    benefits: [
      "ভর্তি ফি মওকুফ",
      "মাসিক বেতন মওকুফ",
      "বই-খাতা সহায়তা",
      "হোস্টেল ফি মওকুফ",
      "মেডিকেল সহায়তা"
    ]
  }
];

const eligibilityCriteria = [
  {
    title: "মেধা স্কলারশিপ",
    criteria: [
      "ভর্তি পরীক্ষায় প্রথম ১০ জন",
      "পূর্ববর্তী শিক্ষা প্রতিষ্ঠানে ৮০% এর বেশি নম্বর",
      "সুস্থ স্বাভাবিক স্বাস্থ্য",
      "নিয়মিত উপস্থিতি"
    ]
  },
  {
    title: "অর্থনৈতিক সহায়তা",
    criteria: [
      "পারিবারিক আয় সনদ",
      "ভর্তি পরীক্ষায় ৭৫% এর বেশি নম্বর",
      "অভিভাবকের আয়ের সনদ",
      "স্থানীয় প্রশাসকের সুপারিশ"
    ]
  },
  {
    title: "বিশেষ স্কলারশিপ",
    criteria: [
      "বিশেষ প্রতিভা প্রদর্শন",
      "সামাজিক কর্মকাণ্ডে অংশগ্রহণ",
      "খেলাধুলায় কৃতিত্ব",
      "সাংস্কৃতিক কর্মকাণ্ডে অংশগ্রহণ"
    ]
  }
];

const applicationProcess = [
  {
    title: "আবেদন",
    description: "স্কলারশিপের জন্য আবেদন ফর্ম পূরণ করুন",
    icon: FaFileAlt
  },
  {
    title: "কাগজপত্র জমা",
    description: "প্রয়োজনীয় সকল কাগজপত্র জমা দিন",
    icon: FaInfoCircle
  },
  {
    title: "মূল্যায়ন",
    description: "আবেদন মূল্যায়ন ও নির্বাচন প্রক্রিয়া",
    icon: FaCheckCircle
  },
  {
    title: "প্রদান",
    description: "নির্বাচিত শিক্ষার্থীদের স্কলারশিপ প্রদান",
    icon: FaGraduationCap
  }
];

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground font-hind-siliguri">
            স্কলারশিপ
          </h1>
          <p className="text-xl text-muted-foreground font-hind-siliguri max-w-3xl mx-auto">
            হাবরুল উম্মাহ মডেল মাদরাসায় মেধাবী ও অসচ্ছল শিক্ষার্থীদের জন্য বিভিন্ন ধরনের স্কলারশিপ সুবিধা রয়েছে
          </p>
        </div>

        {/* Scholarship Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground font-hind-siliguri text-center">
            স্কলারশিপের ধরন
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholarshipTypes.map((type, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg">
                <type.icon className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-card-foreground font-hind-siliguri">
                  {type.title}
                </h3>
                <p className="text-muted-foreground font-hind-siliguri mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-muted-foreground font-hind-siliguri">
                      <FaCheckCircle className="text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground font-hind-siliguri text-center">
            যোগ্যতার শর্তাবলী
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-card-foreground font-hind-siliguri">
                  {criteria.title}
                </h3>
                <ul className="space-y-2">
                  {criteria.criteria.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-muted-foreground font-hind-siliguri">
                      <FaCheckCircle className="text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground font-hind-siliguri text-center">
            আবেদন প্রক্রিয়া
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg">
                <step.icon className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-card-foreground font-hind-siliguri">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-hind-siliguri">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground font-hind-siliguri text-center">
            প্রয়োজনীয় কাগজপত্র
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4 text-muted-foreground font-hind-siliguri">
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-primary" />
                <span>স্কলারশিপ আবেদন ফর্ম</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-primary" />
                <span>পারিবারিক আয়ের সনদ</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-primary" />
                <span>পূর্ববর্তী শিক্ষা প্রতিষ্ঠানের সনদ ও মার্কশীট</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-primary" />
                <span>অভিভাবকের জাতীয় পরিচয়পত্র</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-primary" />
                <span>স্থানীয় প্রশাসকের সুপারিশপত্র</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 