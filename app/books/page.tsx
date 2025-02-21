"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
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

const categories = ["সকল", "ইতিহাস", "তাফসীর", "হাদিস", "আইন", "দর্শন", "অর্থনীতি", "জীবনী", "বিজ্ঞান"]

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("সকল")

  const filteredBooks = books.filter(
    (book) =>
      (selectedCategory === "সকল" || book.category === selectedCategory) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-foreground font-hind-siliguri">
          বই সমূহ
        </h1>

        {/* Search and Categories */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="বই বা লেখক খুঁজুন"
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

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={book.cover}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground font-hind-siliguri">
                  {book.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-hind-siliguri">{book.author}</p>
                <Link
                  href={`/books/${book.id}`}
                  className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition duration-300 font-hind-siliguri"
                >
                  বিস্তারিত দেখুন
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground font-hind-siliguri">
              কোন বই পাওয়া যায়নি। অনুগ্রহ করে অন্য কিছু খুঁজুন।
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

