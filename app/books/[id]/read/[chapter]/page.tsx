"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { FaArrowLeft, FaArrowRight, FaPrint } from "react-icons/fa"
import ReactMarkdown from "react-markdown"

interface ChapterData {
  title: string
  content: string
  references: string[]
}

const chapters: Record<string, ChapterData> = {
  "pre-islamic-arabia": {
    title: "প্রাক-ইসলামিক আরব",
    content: `
# প্রাক-ইসলামিক আরব

প্রাক-ইসলামিক আরব, যা জাহিলিয়া যুগ নামেও পরিচিত, ছিল একটি জটিল ও বৈচিত্র্যময় সময়কাল। এই অধ্যায়ে আমরা সেই সময়ের সামাজিক, রাজনৈতিক ও ধর্মীয় অবস্থা সম্পর্কে আলোচনা করব।

## সামাজিক অবস্থা

প্রাক-ইসলামিক আরবের সমাজ ব্যবস্থা ছিল গোত্রভিত্তিক। প্রতিটি গোত্র নিজস্ব রীতিনীতি ও প্রথা অনুসরণ করত। এই সময়ে:

- নারীদের অধিকার ছিল সীমিত
- দাসপ্রথা ছিল প্রচলিত
- গোত্রের মধ্যে সম্মান ও মর্যাদার প্রতি গুরুত্ব দেওয়া হত

## রাজনৈতিক পরিস্থিতি

রাজনৈতিক দিক থেকে আরব উপদ্বীপ ছিল বিভক্ত:

- বিভিন্ন গোত্রের মধ্যে প্রায়শই সংঘর্ষ হত
- কোনো কেন্দ্রীয় শাসন ব্যবস্থা ছিল না
- মক্কা ছিল একটি গুরুত্বপূর্ণ বাণিজ্যিক ও ধর্মীয় কেন্দ্র

## ধর্মীয় অবস্থা

ধর্মীয় দিক থেকে প্রাক-ইসলামিক আরব ছিল বহুঈশ্বরবাদী:

- কাবা ঘরে ৩৬০টি মূর্তি ছিল
- কিছু লোক ইব্রাহিম (আ.) এর ধর্ম অনুসরণ করতেন
- খ্রিস্টান ও ইহুদি ধর্মাবলম্বীরাও ছিলেন

## অর্থনৈতিক অবস্থা

অর্থনৈতিক দিক থেকে:

- বাণিজ্য ছিল প্রধান পেশা
- মক্কা ছিল একটি গুরুত্বপূর্ণ বাণিজ্য কেন্দ্র
- কারভান ব্যবসা ছিল প্রচলিত

এই পটভূমি বোঝা গুরুত্বপূর্ণ, কারণ এটি ইসলামের আবির্ভাবের প্রেক্ষাপট তৈরি করেছিল।
    `,
    references: [
      "আরমস্ট্রং, কারেন। (২০০২)। মুহাম্মদ: একজন পয়গম্বরের জীবনী। লন্ডন: ফিনিক্স প্রেস।",
      "হুসাইন, সৈয়দ আবুল আলা। (১৯৭৫)। প্রাক-ইসলামিক আরবের ইতিহাস। ঢাকা: ইসলামিক ফাউন্ডেশন।",
      "আলী, জাওয়াদ। (১৯৭০)। আল-মুফাসসাল ফি তারিখ আল-আরব কাবলাল ইসলাম। বাগদাদ: জামিয়া বাগদাদ।",
    ],
  },
  // Add more chapters here
}

export default function ChapterPage() {
  const { id, chapter } = useParams()
  const [chapterData, setChapterData] = useState<ChapterData | null>(null)

  useEffect(() => {
    const data = chapters[chapter as keyof typeof chapters]
    if (data) {
      setChapterData(data)
    }
  }, [chapter])

  if (!chapterData) {
    return <div className="text-center py-20">লোড হচ্ছে...</div>
  }

  const printChapter = () => {
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${chapterData.title}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              }
              h1, h2 {
                color: #2C3E50;
              }
              ul {
                padding-left: 20px;
              }
            </style>
          </head>
          <body>
            <h1>${chapterData.title}</h1>
            ${chapterData.content}
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link href={`/books/${id}/read`} className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <FaArrowLeft className="mr-2" />
          সূচিপত্রে ফিরে যান
        </Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">{chapterData.title}</h1>
            <button
              onClick={printChapter}
              className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition duration-300"
            >
              <FaPrint className="mr-2" />
              প্রিন্ট/পিডিএফ সংরক্ষণ
            </button>
          </div>
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{chapterData.content}</ReactMarkdown>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">তথ্যসূত্র</h2>
            <ul className="list-disc pl-5 space-y-2">
              {chapterData.references.map((ref, index) => (
                <li key={index}>{ref}</li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex justify-between">
            <Link href={`/books/${id}/read`} className="inline-flex items-center text-green-600 hover:text-green-700">
              <FaArrowLeft className="mr-2" />
              পূর্ববর্তী অধ্যায়
            </Link>
            <Link href={`/books/${id}/read`} className="inline-flex items-center text-green-600 hover:text-green-700">
              পরবর্তী অধ্যায়
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

