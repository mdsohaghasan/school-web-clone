'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BlogPost } from '../../types/blog';
import { FaArrowLeft, FaCalendar, FaUser, FaTag } from 'react-icons/fa';

// Islamic blog posts data with local images
const islamicPosts: BlogPost[] = [
  {
    id: '1',
    title: 'ইসলামে শিক্ষার গুরুত্ব',
    content: 'ইসলাম শিক্ষাকে সর্বোচ্চ গুরুত্ব দিয়েছে। আল্লাহ তাআলা পবিত্র কুরআনে বলেন, "যারা জ্ঞান অর্জন করে এবং যারা করে না তারা কি সমান?" শিক্ষা মানুষকে অজ্ঞতা থেকে মুক্তি দেয় এবং সঠিক পথ দেখায়। ইসলামি শিক্ষা মানুষকে দুনিয়া ও আখিরাতের সফলতার দিকে পরিচালিত করে।',
    author: 'মাওলানা আব্দুল্লাহ',
    date: '১৫ জুন, ২০২৩',
    imageUrl: '/images/blog/blog-1.jpg',
    category: 'ইসলামি শিক্ষা',
    excerpt: 'ইসলাম শিক্ষাকে সর্বোচ্চ গুরুত্ব দিয়েছে। আল্লাহ তাআলা পবিত্র কুরআনে বলেন...'
  },
  {
    id: '2',
    title: 'মাদরাসা শিক্ষার প্রয়োজনীয়তা',
    content: 'মাদরাসা শিক্ষা ইসলামি জ্ঞান অর্জনের একটি গুরুত্বপূর্ণ মাধ্যম। এখানে শিক্ষার্থীরা কুরআন, হাদিস, ফিকাহ, আকাইদসহ বিভিন্ন ইসলামি বিষয়ে গভীর জ্ঞান অর্জন করে। একজন মাদরাসা শিক্ষার্থী ধর্মীয় জ্ঞানের পাশাপাশি নৈতিক ও চারিত্রিক শিক্ষাও লাভ করে।',
    author: 'মুফতি ইসমাইল',
    date: '২০ জুন, ২০২৩',
    imageUrl: '/images/blog/blog-2.jpg',
    category: 'মাদরাসা শিক্ষা',
    excerpt: 'মাদরাসা শিক্ষা ইসলামি জ্ঞান অর্জনের একটি গুরুত্বপূর্ণ মাধ্যম...'
  },
  {
    id: '3',
    title: 'আধুনিক যুগে ইসলামি শিক্ষা',
    content: 'আধুনিক যুগে ইসলামি শিক্ষার গুরুত্ব আরও বেড়েছে। বর্তমান সময়ে প্রযুক্তি ও বিজ্ঞানের পাশাপাশি ইসলামি মূল্যবোধ ও শিক্ষার সমন্বয় অত্যন্ত জরুরি। এটি যুব সমাজকে নৈতিক অবক্ষয় থেকে রক্ষা করে এবং সঠিক পথে পরিচালিত করে।',
    author: 'মুফতি হাসান',
    date: '২৫ জুন, ২০২৩',
    imageUrl: '/images/blog/blog-3.jpg',
    category: 'আধুনিক শিক্ষা',
    excerpt: 'আধুনিক যুগে ইসলামি শিক্ষার গুরুত্ব আরও বেড়েছে...'
  }
];

// Generate more posts function (same as in blog/page.tsx)
const generateMorePosts = () => {
  const allPosts = [...islamicPosts];
  const topics = [
    'কুরআন শিক্ষা', 
    'হাদিস শিক্ষা', 
    'ফিকাহ শিক্ষা', 
    'আকীদা শিক্ষা', 
    'সীরাত শিক্ষা',
    'আরবি ভাষা',
    'ইসলামি সভ্যতা',
    'ইসলামি দর্শন'
  ];
  
  for (let i = islamicPosts.length + 1; i <= 27; i++) {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    const imageNumber = ((i - 1) % 3) + 1; // This will cycle through 1, 2, 3
    allPosts.push({
      id: i.toString(),
      title: `${randomTopic} - পর্ব ${Math.ceil(i/3)}`,
      content: `${randomTopic} সম্পর্কে বিস্তারিত আলোচনা। এই বিষয়টি ইসলামি শিক্ষার একটি গুরুত্বপূর্ণ অংশ। এখানে আমরা জানতে পারব কিভাবে ${randomTopic.toLowerCase()} আমাদের জীবনে প্রয়োগ করতে হয় এবং এর মাধ্যমে কিভাবে উপকৃত হতে পারি।`,
      author: 'মাওলানা আহমদ',
      date: new Date().toLocaleDateString('bn-BD'),
      imageUrl: `/images/blog/blog-${imageNumber}.jpg`,
      category: randomTopic,
      excerpt: `${randomTopic} সম্পর্কে বিস্তারিত আলোচনা। এই বিষয়টি ইসলামি শিক্ষার একটি গুরুত্বপূর্ণ অংশ...`
    });
  }
  return allPosts;
};

export default function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      const allPosts = generateMorePosts();
      const foundPost = allPosts.find(p => p.id === id);
      setPost(foundPost || null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading || !post) {
    return (
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="text-center">লোড হচ্ছে...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <Link
        href="/blog"
        className="inline-flex items-center text-primary hover:text-primary/90 mb-8"
      >
        <FaArrowLeft className="mr-2" />
        সকল পোস্ট
      </Link>

      <div className="bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-8">
          <h1 className="text-4xl font-bold text-card-foreground mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
            <div className="flex items-center">
              <FaCalendar className="mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <FaUser className="mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <FaTag className="mr-2" />
              {post.category}
            </div>
          </div>

          <div className="prose max-w-none text-card-foreground">
            <p className="text-lg leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 