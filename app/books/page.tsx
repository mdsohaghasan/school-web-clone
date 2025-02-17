"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaSearch } from "react-icons/fa"

const books = [
  {
    id: 1,
    title: "ইসলামের ইতিহাস",
    author: "ড. মুহাম্মদ আলী",
    cover: "https://source.unsplash.com/random/300x400?islamic+book",
    category: "ইতিহাস",
  },
  {
    id: 2,
    title: "কুরআন তাফসীর",
    author: "মাওলানা আব্দুল করিম",
    cover: "https://source.unsplash.com/random/300x400?quran",
    category: "তাফসীর",
  },
  {
    id: 3,
    title: "হাদিস শরীফ",
    author: "ইমাম বুখারী",
    cover: "https://source.unsplash.com/random/300x400?hadith",
    category: "হাদিস",
  },
  {
    id: 4,
    title: "ইসলামি আইন",
    author: "ড. জাকির নায়েক",
    cover: "https://source.unsplash.com/random/300x400?islamic+law",
    category: "আইন",
  },
  {
    id: 5,
    title: "ইসলামি দর্শন",
    author: "ড. আলী শরিয়াতি",
    cover: "https://source.unsplash.com/random/300x400?islamic+philosophy",
    category: "দর্শন",
  },
  {
    id: 6,
    title: "ইসলামি অর্থনীতি",
    author: "মুহাম্মদ তাকি উসমানী",
    cover: "https://source.unsplash.com/random/300x400?islamic+economics",
    category: "অর্থনীতি",
  },
  {
    id: 7,
    title: "সীরাতুন নবী",
    author: "সফিউর রহমান মুবারকপুরী",
    cover: "https://source.unsplash.com/random/300x400?prophet+muhammad",
    category: "জীবনী",
  },
  {
    id: 8,
    title: "ইসলামি বিজ্ঞান",
    author: "ড. মুহাম্মদ ইকবাল",
    cover: "https://source.unsplash.com/random/300x400?islamic+science",
    category: "বিজ্ঞান",
  },
]

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("সকল")

  const categories = ["সকল", "ইতিহাস", "তাফসীর", "হাদিস", "আইন", "দর্শন", "অর্থনীতি", "জীবনী", "বিজ্ঞান"]

  const filteredBooks = books.filter(
    (book) =>
      (selectedCategory === "সকল" || book.category === selectedCategory) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">বইয়ের সংগ্রহশালা</h1>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="বই বা লেখক খুঁজুন"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category ? "bg-green-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <Image
                src={book.cover || "/placeholder.svg"}
                alt={book.title}
                width={300}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4">{book.author}</p>
                <Link href={`/books/${book.id}`} className="text-green-600 hover:text-green-700 font-semibold">
                  বিস্তারিত দেখুন
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

