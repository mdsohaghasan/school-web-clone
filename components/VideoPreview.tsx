'use client'

import Link from "next/link"
import ReactPlayer from "react-player/lazy"

export function VideoPreview() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">শিক্ষামূলক ভিডিও</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* <div className="aspect-w-16 aspect-h-9">
            <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width="100%" height="100%" controls />
          </div> */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">ইসলামের মৌলিক শিক্ষা</h3>
            <p className="text-gray-600 mb-6">
              এই ভিডিওতে আমরা ইসলামের মৌলিক শিক্ষা সম্পর্কে আলোচনা করব। আমাদের বিশেষজ্ঞ শিক্ষকগণ ইসলামের পাঁচটি স্তম্ভ, নৈতিকতা এবং
              মূল্যবোধ সম্পর্কে গভীর অন্তর্দৃষ্টি প্রদান করবেন।
            </p>
            <Link
              href="/videos"
              className="bg-green-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-green-500 transition duration-300"
            >
              আরও ভিডিও দেখুন
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

