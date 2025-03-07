import React from 'react';
import { FaUserTie, FaGraduationCap, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

const departments = [
  {
    name: "কুরআন বিভাগ",
    teachers: [
      {
        name: "মাওলানা আব্দুল্লাহ আল-কাফী",
        designation: "বিভাগীয় প্রধান",
        qualification: "দাওরায়ে হাদীস, কামিল (হাদীস), আল-আজহার বিশ্ববিদ্যালয়",
        experience: "২০ বছর"
      },
      {
        name: "মাওলানা আবদুর রহমান",
        designation: "সহকারী অধ্যাপক",
        qualification: "দাওরায়ে হাদীস, কামিল (হাদীস), জামিয়া মাদানিয়া",
        experience: "১৫ বছর"
      }
    ]
  },
  {
    name: "হাদীস বিভাগ",
    teachers: [
      {
        name: "মাওলানা মুহাম্মদ ইউসুফ",
        designation: "বিভাগীয় প্রধান",
        qualification: "দাওরায়ে হাদীস, কামিল (হাদীস), দারুল উলূম দেওবন্দ",
        experience: "১৮ বছর"
      },
      {
        name: "মাওলানা আব্দুল কাদের",
        designation: "সহকারী অধ্যাপক",
        qualification: "দাওরায়ে হাদীস, কামিল (হাদীস), জামিয়া ইসলামিয়া",
        experience: "১২ বছর"
      }
    ]
  },
  {
    name: "ফিকহ বিভাগ",
    teachers: [
      {
        name: "মাওলানা আহমদ হোসাইন",
        designation: "বিভাগীয় প্রধান",
        qualification: "দাওরায়ে হাদীস, কামিল (ফিকহ), জামিয়া আশরাফিয়া",
        experience: "১৬ বছর"
      },
      {
        name: "মাওলানা নূর মুহাম্মদ",
        designation: "সহকারী অধ্যাপক",
        qualification: "দাওরায়ে হাদীস, কামিল (ফিকহ), জামিয়া রাহমানিয়া",
        experience: "১০ বছর"
      }
    ]
  },
  {
    name: "আরবি ভাষা ও সাহিত্য বিভাগ",
    teachers: [
      {
        name: "ড. মাহমুদুল হাসান",
        designation: "বিভাগীয় প্রধান",
        qualification: "পিএইচডি (আরবি), ঢাকা বিশ্ববিদ্যালয়",
        experience: "১৪ বছর"
      },
      {
        name: "মাওলানা সাইফুল ইসলাম",
        designation: "সহকারী অধ্যাপক",
        qualification: "এমএ (আরবি), ঢাকা বিশ্ববিদ্যালয়",
        experience: "৮ বছর"
      }
    ]
  }
];

const stats = [
  { label: "মোট শিক্ষক", value: "৫০+", icon: FaChalkboardTeacher },
  { label: "পিএইচডিধারী", value: "১০+", icon: FaGraduationCap },
  { label: "কামিল ডিগ্রিধারী", value: "৩০+", icon: FaBook },
  { label: "অভিজ্ঞ শিক্ষক", value: "৪০+", icon: FaUserTie }
];

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground font-hind-siliguri">
            শিক্ষক মণ্ডলী
          </h1>
          <p className="text-xl text-muted-foreground font-hind-siliguri max-w-3xl mx-auto">
            হাবরুল উম্মাহ মডেল মাদরাসার অভিজ্ঞ ও যোগ্য শিক্ষক মণ্ডলী
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-lg text-center">
              <stat.icon className="text-primary w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold text-card-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-hind-siliguri">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Departments */}
        <div className="space-y-12">
          {departments.map((department, index) => (
            <div key={index} className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-card-foreground font-hind-siliguri">
                {department.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {department.teachers.map((teacher, idx) => (
                  <div key={idx} className="bg-primary/5 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground font-hind-siliguri">
                      {teacher.name}
                    </h3>
                    <div className="space-y-2 text-muted-foreground font-hind-siliguri">
                      <p>পদবি: {teacher.designation}</p>
                      <p>শিক্ষাগত যোগ্যতা: {teacher.qualification}</p>
                      <p>অভিজ্ঞতা: {teacher.experience}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-primary/5 rounded-lg p-8 mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground font-hind-siliguri">
              শিক্ষক নিয়োগ প্রক্রিয়া
            </h2>
            <p className="text-muted-foreground font-hind-siliguri">
              আমাদের মাদরাসায় শিক্ষক নিয়োগের ক্ষেত্রে শিক্ষাগত যোগ্যতা, অভিজ্ঞতা এবং নৈতিক চরিত্রের উপর বিশেষ গুরুত্ব দেওয়া হয়। প্রতিটি শিক্ষক নিয়মিত প্রশিক্ষণ ও কর্মশালায় অংশগ্রহণ করে নিজেদের দক্ষতা বৃদ্ধি করে থাকেন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 