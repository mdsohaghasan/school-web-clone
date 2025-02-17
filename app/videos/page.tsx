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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">ভিডিও সমূহ</h1>
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="ভিডিও খুঁজুন"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {currentVideo && (
              <VideoPlayer
                youtubeId={currentVideo.youtubeId}
                title={currentVideo.title}
                description={currentVideo.description}
                views={currentVideo.views}
                date={currentVideo.date}
              />
            )}
          </div>

          <div className="lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">সম্পর্কিত ভিডিও</h2>
            <div className="space-y-4">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="flex gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded"
                  onClick={() => setCurrentVideo(video)}
                >
                  <div className="w-40 h-24 relative flex-shrink-0">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.views} দর্শন</p>
                    <p className="text-sm text-gray-600">{video.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

