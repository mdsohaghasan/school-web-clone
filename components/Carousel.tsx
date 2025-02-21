"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    image: "/slider/slide1.jpg",
    title: "উৎকর্ষের ৫০ বছর",
    description: "আল-হিকমা একাডেমিক ইনস্টিটিউট: ১৯৭৩ থেকে জ্ঞান ও মূল্যবোধের প্রসারে নিয়োজিত",
  },
  {
    image: "/slider/slide2.jpg",
    title: "আধুনিক শিক্ষা ব্যবস্থা",
    description: "ইসলামিক মূল্যবোধের সাথে আধুনিক শিক্ষার সমন্বয়",
  },
  {
    image: "/slider/slide3.jpg",
    title: "গবেষণা ও উদ্ভাবন",
    description: "শিক্ষার্থীদের জন্য উন্নত গবেষণা সুযোগ ও ল্যাবরেটরি",
  },
]

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Hind Siliguri' }}>{slide.title}</h2>
              <p className="text-xl" style={{ fontFamily: 'Hind Siliguri' }}>{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

