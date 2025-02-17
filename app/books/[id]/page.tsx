"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { FaArrowLeft, FaBookOpen, FaCalendar, FaLanguage } from "react-icons/fa"

interface Book {
  id: number
  title: string
  author: string
  cover: string
  category: string
  description: string
  publicationDate: string
  language: string
  pages: number
}

export default function BookDetails() {
  const { id } = useParams()
  const [book, setBook] = useState<Book | null>(null)

  useEffect(() => {
    // Simulating an API call to fetch book details
    const fetchBook = async () => {
      // In a real application, this would be an API call
      const mockBook: Book = {
        id: Number(id),
        title: "ইসলামের ইতিহাস",
        author: "ড. মুহাম্মদ আলী",
        cover: `https://source.unsplash.com/random/800x1200?islamic+book&${id}`,
        category: "ইতিহাস",
        description:
          "এই বইটি ইসলামের সমৃদ্ধ ইতিহাস নিয়ে একটি বিস্তৃত আলোচনা করেছে। প্রাচীন আরব থেকে শুরু করে আধুনিক যুগ পর্যন্ত ইসলামের বিকাশ, বিস্তার এবং প্রভাব নিয়ে গভীর বিশ্লেষণ করা হয়েছে। লেখক ড. মুহাম্মদ আলী তার গবেষণালব্ধ জ্ঞান ও অভিজ্ঞতার আলোকে ইসলামের ঐতিহাসিক ঘটনাবলী, বিভিন্ন রাজবংশের শাসনকাল, ইসলামি সভ্যতার অবদান এবং বিশ্ব ইতিহাসে ইসলামের ভূমিকা তুলে ধরেছেন।",
        publicationDate: "১৫ মে, ২০২২",
        language: "বাংলা",
        pages: 450,
      }
      setBook(mockBook)
    }

    fetchBook()
  }, [id])

  if (!book) {
    return <div className="text-center py-20">লোড হচ্ছে...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link href="/books" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <FaArrowLeft className="mr-2" />
          সব বই দেখুন
        </Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={book.cover || "/placeholder.svg"}
                alt={book.title}
                width={400}
                height={600}
                className="h-full w-full object-cover md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">{book.category}</div>
              <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {book.title}
              </h1>
              <p className="mt-2 text-xl text-gray-500">{book.author}</p>
              <p className="mt-4 text-gray-700">{book.description}</p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center text-gray-600">
                  <FaCalendar className="mr-2" />
                  <span>প্রকাশের তারিখ: {book.publicationDate}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaLanguage className="mr-2" />
                  <span>ভাষা: {book.language}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaBookOpen className="mr-2" />
                  <span>পৃষ্ঠা সংখ্যা: {book.pages}</span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href={`/books/${book.id}/read`}
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-500 transition duration-300"
                >
                  বইটি পড়ুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

