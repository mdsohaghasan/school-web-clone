'use client'

import Link from "next/link"
import { VideoPlayer } from "./VideoPlayer"

const featuredVideos = [
  {
    id: "1",
    title: "ইসলামের মৌলিক শিক্ষা",
    description:
      "এই ভিডিওতে ইসলামের মৌলিক শিক্ষা সম্পর্কে আলোচনা করা হয়েছে। ইসলামের পাঁচটি স্তম্ভ, ঈমান, ইবাদত, এবং নৈতিকতার বিষয়ে বিস্তারিত আলোচনা করা হয়েছে।",
    url: "https://www.youtube.com/watch?v=nTi7bKL6g_I",
  },
  {
    id: "2",
    title: "কুরআন তিলাওয়াত",
    description:
      "সুন্দর কুরআন তিলাওয়াতের একটি নমুনা। এই ভিডিওতে একজন বিশিষ্ট ক্বারী কুরআনের কয়েকটি সূরা তিলাওয়াত করেছেন।",
    url: "https://www.youtube.com/watch?v=3n-T8SK_hJo",
  },
  {
    id: "3",
    title: "হাদিসের গুরুত্ব",
    description:
      "ইসলামে হাদিসের গুরুত্ব সম্পর্কে একটি আলোচনা। হাদিস কীভাবে ইসলামি জীবনযাপনে সাহায্য করে এবং কুরআনের ব্যাখ্যা প্রদান করে তা বিস্তারিতভাবে আলোচনা করা হয়েছে।",
    url: "https://www.youtube.com/watch?v=_RnlSKb9TMQ",
  },
];

export function VideoPreview() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-muted-foreground font-hind-siliguri">
          নির্বাচিত ভিডিও
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVideos.map((video) => (
            <div key={video.id} className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-video">
                <VideoPlayer url={video.url} />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-high font-hind-siliguri">
                  {video.title}
                </h3>
                <p className="text-mid font-hind-siliguri">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/videos"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition duration-300 font-hind-siliguri"
          >
            সকল ভিডিও দেখুন
          </Link>
        </div>
      </div>
    </section>
  )
}

