"use client"

import { VideoPlayer } from "@/components/VideoPlayer"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"

const videos = [
  {
    id: "1",
    title: "মাসিক দ্বীনি হালাকায় শাইখ ড.শহিদুল্লাহ খান মাদানী হাফি",
    description: "এই ভিডিওতে ইসলামের মৌলিক শিক্ষা সম্পর্কে আলোচনা করা হয়েছে।",
    url: "https://www.youtube.com/watch?v=EWEZIT26jzI",
    duration: "45:30",
    date: "১০ জুন, ২০২৩",
    category: "ইসলামিক শিক্ষা"
  },
  {
    id: "2",
    title: " ক্বিরাত প্রশিক্ষণ",
    description: "সুন্দর কুরআন তিলাওয়াতের একটি নমুনা।",
    url: "https://www.youtube.com/watch?v=5xFb5aH65rs",
    duration: "32:15",
    date: "১৫ জুন, ২০২৩",
    category: "কুরআন"
  },
  {
    id: "3",
    title: "শিক্ষক প্রশিক্ষণ অধিবেশন ২০২৫",
    description: "ইসলামে হাদিসের গুরুত্ব সম্পর্কে একটি আলোচনা।",
    url: "https://www.youtube.com/watch?v=xLFYzxbVhoQ",
    duration: "28:45",
    date: "২০ জুন, ২০২৩",
    category: "হাদিস"
  },
  {
    id: "4",
    title: "নূরানী ছাত্রদের বক্তব্য প্রশিক্ষণ",
    description: "ইসলামি আইন সম্পর্কে বিস্তারিত আলোচনা।",
    url: "https://www.youtube.com/watch?v=8-o_BKXearY&t=4s",
    duration: "52:10",
    date: "২৫ জুন, ২০২৩",
    category: "ফিকাহ"
  },
  {
    id: "5",
    title: "মাদরাসায় তিন ভাষা শিক্ষা",
    description: "ইসলামের প্রাথমিক যুগের ইতিহাস সম্পর্কে আলোচনা।",
    url: "https://www.youtube.com/watch?v=UKY2nPso5kw",
    duration: "38:20",
    date: "৩০ জুন, ২০২৩",
    category: "ইতিহাস"
  },
  {
    id: "6",
    title: "ছোট্ট বন্ধুর সূরা ক্বদর তেলোয়াত",
    description: "আরবি ভাষার মৌলিক নিয়ম সম্পর্কে শিক্ষা।",
    url: "https://www.youtube.com/watch?v=R9unMVrcmPY",
    duration: "42:55",
    date: "৫ জুলাই, ২০২৩",
    category: "ভাষা"
  }
]

const categories = ["সকল", "ইসলামিক শিক্ষা", "কুরআন", "হাদিস", "ফিকাহ", "ইতিহাস", "ভাষা"]

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("সকল")

  const filteredVideos = videos.filter(
    (video) =>
      (selectedCategory === "সকল" || video.category === selectedCategory) &&
      (video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-foreground font-hind-siliguri">
          ভিডিও সমূহ
        </h1>

        {/* Search and Categories */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="ভিডিও খুঁজুন"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground font-hind-siliguri"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-hind-siliguri transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-video">
                <VideoPlayer url={video.url} />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground font-hind-siliguri">
                  {video.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-hind-siliguri">
                  {video.description}
                </p>
                <div className="flex items-center text-muted-foreground">
                  <span className="text-sm font-hind-siliguri">{video.duration}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm font-hind-siliguri">{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground font-hind-siliguri">
              কোন ভিডিও পাওয়া যায়নি। অনুগ্রহ করে অন্য কিছু খুঁজুন।
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

