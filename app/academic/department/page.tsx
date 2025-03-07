import React from 'react';
import { FaUserTie, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

const departmentData = {
  title: "বিভাগসমূহ",
  description: "হাবরুল উম্মাহ মডেল মাদরাসার বিভিন্ন বিভাগ",
  departments: [
    {
      name: "কুরআন বিভাগ",
      head: "মাওলানা আব্দুল্লাহ আল-কাফী",
      designation: "বিভাগীয় প্রধান",
      qualification: "দাওরায়ে হাদীস, কামিল (হাদীস), আল-আজহার বিশ্ববিদ্যালয়",
      description: "কুরআন তিলাওয়াত, হিফজ, তাজবীদ এবং তাফসীর শিক্ষা দেওয়া হয়।",
      courses: [
        "কুরআন হিফজ",
        "তাজবীদ",
        "কিরাআত",
        "তাফসীর"
      ],
      teachers: 8,
      students: 150
    },
    {
      name: "হাদীস বিভাগ",
      head: "মাওলানা আবদুর রহমান",
      designation: "বিভাগীয় প্রধান",
      qualification: "দাওরায়ে হাদীস, কামিল (হাদীস), জামিয়া মাদানিয়া",
      description: "হাদীস শিক্ষা, বুখারী শরীফ, মুসলিম শরীফসহ বিভিন্ন হাদীস গ্রন্থের পাঠদান করা হয়।",
      courses: [
        "বুখারী শরীফ",
        "মুসলিম শরীফ",
        "তিরমিযী শরীফ",
        "হাদীস পরিচিতি"
      ],
      teachers: 6,
      students: 120
    },
    {
      name: "ফিকহ বিভাগ",
      head: "মাওলানা মুহাম্মদ ইউসুফ",
      designation: "বিভাগীয় প্রধান",
      qualification: "দাওরায়ে হাদীস, কামিল (ফিকহ), দারুল উলূম দেওবন্দ",
      description: "ইসলামী আইন ও শরীয়াহ সম্পর্কিত শিক্ষা দেওয়া হয়।",
      courses: [
        "ফিকহুল ইবাদাত",
        "ফিকহুল মুয়ামালাত",
        "উসূলে ফিকহ",
        "ইসলামী আইন"
      ],
      teachers: 5,
      students: 100
    },
    {
      name: "আরবি ভাষা ও সাহিত্য বিভাগ",
      head: "ড. আহমদ হোসাইন",
      designation: "বিভাগীয় প্রধান",
      qualification: "পিএইচডি (আরবি), ঢাকা বিশ্ববিদ্যালয়",
      description: "আরবি ভাষা, ব্যাকরণ, সাহিত্য ও বালাগাত শিক্ষা দেওয়া হয়।",
      courses: [
        "নাহু",
        "সরফ",
        "আরবি সাহিত্য",
        "বালাগাত"
      ],
      teachers: 7,
      students: 130
    },
    {
      name: "আধুনিক বিজ্ঞান বিভাগ",
      head: "প্রফেসর ড. মাহমুদুল হাসান",
      designation: "বিভাগীয় প্রধান",
      qualification: "পিএইচডি (পদার্থবিজ্ঞান), জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
      description: "আধুনিক বিজ্ঞান শিক্ষা প্রদান করা হয়।",
      courses: [
        "পদার্থবিজ্ঞান",
        "রসায়ন",
        "জীববিজ্ঞান",
        "গণিত"
      ],
      teachers: 6,
      students: 110
    }
  ]
};

export default function DepartmentPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-foreground font-hind-siliguri">
          {departmentData.title}
        </h1>
        <p className="text-lg mb-12 text-muted-foreground font-hind-siliguri">
          {departmentData.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departmentData.departments.map((dept, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground font-hind-siliguri">
                  {dept.name}
                </h2>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <FaUserTie className="text-primary mr-2" />
                    <h3 className="text-lg font-semibold text-card-foreground font-hind-siliguri">
                      {dept.head}
                    </h3>
                  </div>
                  <p className="text-muted-foreground font-hind-siliguri ml-6">
                    {dept.designation}
                  </p>
                  <p className="text-sm text-muted-foreground font-hind-siliguri ml-6">
                    {dept.qualification}
                  </p>
                </div>

                <p className="mb-6 text-muted-foreground font-hind-siliguri">
                  {dept.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <FaBook className="text-primary mr-2" />
                    <h3 className="text-lg font-semibold text-card-foreground font-hind-siliguri">
                      কোর্সসমূহ:
                    </h3>
                  </div>
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    {dept.courses.map((course, idx) => (
                      <li key={idx} className="text-muted-foreground font-hind-siliguri">
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center">
                    <FaChalkboardTeacher className="text-primary mr-2" />
                    <span className="font-hind-siliguri">শিক্ষক: {dept.teachers} জন</span>
                  </div>
                  <div className="flex items-center">
                    <FaUserTie className="text-primary mr-2" />
                    <span className="font-hind-siliguri">শিক্ষার্থী: {dept.students} জন</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 