import { FaChalkboardTeacher, FaFlask, FaTrophy, FaUserGraduate } from "react-icons/fa";

export const heroSection = {
  title: "হাবরুল উম্মাহ মডেল মাদরাসা",
  subtitle: "জ্ঞান, মূল্যবোধ এবং উৎকর্ষের কেন্দ্র",
  ctaText: "আরও জানুন",
  backgroundImage: "/images/header/hero.jpg",
};

export const aboutSection = {
  title: "আমাদের সম্পর্কে",
  description: "হাবরুল উম্মাহ মডেল মাদরাসা উচ্চমানের ইসলামিক ও আধুনিক শিক্ষা প্রদান করে আসছে। আমরা শিক্ষার্থীদের জ্ঞান, মূল্যবোধ এবং দক্ষতা অর্জনে সহায়তা করি, যাতে তারা সমাজে ইতিবাচক পরিবর্তন আনতে সক্ষম হয়।",
  features: [
    {
      icon: FaUserGraduate,
      text: "যোগ্য ও অভিজ্ঞ শিক্ষকমণ্ডলী",
    },
    {
      icon: FaChalkboardTeacher,
      text: "আধুনিক শিক্ষা পদ্ধতি",
    },
    {
      icon: FaFlask,
      text: "উন্নত গবেষণা সুবিধা",
    },
    {
      icon: FaTrophy,
      text: "শিক্ষার্থীদের উল্লেখযোগ্য সাফল্য",
    },
  ],
  image: "/about-image.jpg",
};

export const statsSection = {
  title: "আমাদের পরিসংখ্যান",
  stats: [
    {
      title: "মোট শিক্ষার্থী",
      value: "5,000+",
      icon: "users",
    },
    {
      title: "শিক্ষক সংখ্যা",
      value: "200+",
      icon: "user-tie",
    },
    {
      title: "গবেষণা প্রকল্প",
      value: "100+",
      icon: "flask",
    },
    {
      title: "লাইব্রেরি বই",
      value: "50,000+",
      icon: "book",
    },
  ],
};

export const eventsSection = {
  title: "আসন্ন ইভেন্টসমূহ",
  events: [
    {
      title: "বার্ষিক বিজ্ঞান মেলা",
      date: "১৫ জুলাই, ২০২৩",
      description: "আমাদের বার্ষিক বিজ্ঞান মেলায় শিক্ষার্থীদের উদ্ভাবনী প্রকল্পগুলি প্রদর্শিত হবে।",
    },
    {
      title: "ইসলামিক সেমিনার",
      date: "২২ জুলাই, ২০২৩",
      description: "বিশিষ্ট ইসলামিক পণ্ডিতদের অংশগ্রহণে একটি জ্ঞানগর্ভ আলোচনা অনুষ্ঠিত হবে।",
    },
    {
      title: "গ্র্যাজুয়েশন সেরিমনি",
      date: "৫ আগস্ট, ২০২৩",
      description: "২০২৩ সালের গ্র্যাজুয়েট শিক্ষার্থীদের জন্য আনুষ্ঠানিক সমাবর্তন অনুষ্ঠান।",
    },
  ],
};

export const facultySection = {
  title: "আমাদের শিক্ষকমণ্ডলী",
  faculty: [
    {
      name: "শাইখ মোস্তাফিজুর রহমান আল মাদানী",
      designation: "অধ্যক্ষ",
      image: "/faculty/principal.jpg",
    },
    {
      name: "শাইখ আবু বকর মোহাম্মদ যাকারিয়াহ হাফিযাহুল্লাহ",
      designation: "উপাধ্যক্ষ",
      image: "/faculty/vice-principal.jpg",
    },
    {
      name: "প্রফেসর রফিকুল ইসলাম",
      designation: "বিভাগীয় প্রধান, ইসলামিক স্টাডিজ",
      image: "/faculty/islamic-studies-head.jpg",
    },
    {
      name: "মোঃ তাবরিজ আহমেদ",
      designation: "বিভাগীয় প্রধান",
      image: "/faculty/science-head.jpg",
    },
  ],
  ctaText: "সকল শিক্ষকের তালিকা দেখুন",
  ctaLink: "/faculty",
};

export const footerData = {
  contact: {
    title: "যোগাযোগ করুন",
    address: "ঠিকানা: রাজিবপুর, (হাবিব উল্লাহ'র দোকানের কাছে), লক্ষ্মীপুর সদর, লক্ষ্মীপুর 3720",
    phone: "ফোন: +88 01876-672622",
    email: "ইমেইল: info@habrulummah.com",
  },
  quickLinks: {
    title: "দ্রুত লিঙ্ক",
    links: [
      { text: "ভর্তি তথ্য", href: "/admission" },
      { text: "একাডেমিক ক্যালেন্ডার", href: "/academic-calendar" },
      { text: "গবেষণা", href: "/research" },
      { text: "পূর্ব শিক্ষার্থী", href: "/alumni" },
    ],
  },
  social: {
    title: "সামাজিক মাধ্যম",
    links: [
      { platform: "Facebook", href: "https://www.facebook.com/habrulummahmadrasah/" },
      { platform: "Twitter", href: "#" },
      { platform: "YouTube", href: "#" },
    ],
  },
  copyright: "@২০২৫ হাবরুল উম্মাহ মডেল মাদরাসা। সর্বস্বত্ব সংরক্ষিত।",
};

