"use client"

import { useState, useEffect } from "react"
import { FaSearch } from "react-icons/fa"
import { VideoPlayer } from "@/components/VideoPlayer"

interface Video {
  id: string
  title: string
  description: string
  youtubeId: string
  views: string
  date: string
}

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [videos, setVideos] = useState<Video[]>([])
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null)

  useEffect(() => {
    // Simulating API call
    const fetchVideos = async () => {
      // In a real application, this would be an API call
      const mockVideos: Video[] = [
        {
          id: "1",
          title: "ইসলামের মৌলিক শিক্ষা",
          description:
            "এই ভিডিওতে ইসলামের মৌলিক শিক্ষা সম্পর্কে আলোচনা করা হয়েছে। ইসলামের পাঁচটি স্তম্ভ, ঈমান, ইবাদত, এবং নৈতিকতার বিষয়ে বিস্তারিত আলোচনা করা হয়েছে।",
          youtubeId: "dQw4w9WgXcQ",
          views: "15K",
          date: "2 দিন আগে",
        },
        {
          id: "2",
          title: "কুরআন তিলাওয়াত",
          description: "সুন্দর কুরআন তিলাওয়াতের একটি নমুনা। এই ভিডিওতে একজন বিশিষ্ট ক্বারী কুরআনের কয়েকটি সূরা তিলাওয়াত করেছেন।",
          youtubeId: "21X5lGlDOfg",
          views: "20K",
          date: "1 সপ্তাহ আগে",
        },
        {
          id: "3",
          title: "হাদিসের গুরুত্ব",
          description:
            "ইসলামে হাদিসের গুরুত্ব সম্পর্কে একটি আলোচনা। হাদিস কীভাবে ইসলামি জীবনযাপনে সাহায্য করে এবং কুরআনের ব্যাখ্যা প্রদান করে তা বিস্তারিতভাবে আলোচনা করা হয়েছে।",
          youtubeId: "FjHGZj2IjBk",
          views: "18K",
          date: "2 সপ্তাহ আগে",
        },
        {
          id: "4",
          title: "ইসলামি আইনের পরিচয়",
          description:
            "ইসলামি আইনের মৌলিক ধারণা সম্পর্কে একটি সংক্ষিপ্ত আলোচনা। শরিয়াহ আইন, ফিকাহ, এবং ইসলামি ন্যায়বিচার ব্যবস্থা সম্পর্কে আলোকপাত করা হয়েছে।",
          youtubeId: "9bZkp7q19f0",
          views: "25K",
          date: "3 সপ্তাহ আগে",
        },
      ]
      setVideos(mockVideos)
      setCurrentVideo(mockVideos[0])
    }

    fetchVideos()
  }, [])

  const filteredVideos = videos.filter((video) => video.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-foreground font-hind-siliguri">
          ভিডিও সমূহ
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-video">
                <VideoPlayer youtubeId={video.youtubeId} />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground font-hind-siliguri">
                  {video.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-hind-siliguri">
                  {video.description}
                </p>
                <div className="flex items-center text-muted-foreground">
                  <span className="text-sm font-hind-siliguri">{video.views}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm font-hind-siliguri">{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

