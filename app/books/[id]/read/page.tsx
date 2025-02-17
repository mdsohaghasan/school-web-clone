"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { FaArrowLeft, FaBookOpen } from "react-icons/fa"

interface Chapter {
  id: number
  title: string
  slug: string
}

interface Book {
  id: number
  title: string
  author: string
  chapters: Chapter[]
}

export default function BookIndex() {
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
        chapters: [
          { id: 1, title: "প্রাক-ইসলামিক আরব", slug: "pre-islamic-arabia" },
          { id: 2, title: "মুহাম্মদ (সা.) এর জীবন", slug: "life-of-muhammad" },
          { id: 3, title: "খুলাফায়ে রাশেদীন", slug: "rightly-guided-caliphs" },
          { id: 4, title: "উমাইয়া খিলাফত", slug: "umayyad-caliphate" },
          { id: 5, title: "আব্বাসীয় খিলাফত", slug: "abbasid-caliphate" },
          { id: 6, title: "ইসলামিক স্বর্ণযুগ", slug: "islamic-golden-age" },
          { id: 7, title: "ক্রুসেড যুদ্ধ", slug: "crusades" },
          { id: 8, title: "মুঘল সাম্রাজ্য", slug: "mughal-empire" },
          { id: 9, title: "উসমানীয় সাম্রাজ্য", slug: "ottoman-empire" },
          { id: 10, title: "আধুনিক ইসলামিক বিশ্ব", slug: "modern-islamic-world" },
        ],
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
        <Link href={`/books/${id}`} className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <FaArrowLeft className="mr-2" />
          বইয়ের বিবরণে ফিরে যান
        </Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{book.author}</p>
          <h2 className="text-2xl font-semibold mb-4">সূচিপত্র</h2>
          <ul className="space-y-4">
            {book.chapters.map((chapter) => (
              <li key={chapter.id}>
                <Link
                  href={`/books/${id}/read/${chapter.slug}`}
                  className="flex items-center text-lg text-green-600 hover:text-green-700"
                >
                  <FaBookOpen className="mr-2" />
                  {chapter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

