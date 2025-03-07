"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    image: "/images/slider/slider-1.jpg",
    title: "উৎকর্ষের ৫০ বছর",
    description: "হাবরুল উম্মাহ মডেল মাদরাসা : ১৯৭৩ থেকে জ্ঞান ও মূল্যবোধের প্রসারে নিয়োজিত",
  },
  {
    image: "/images/slider/slider-2.jpg",
    title: "আধুনিক শিক্ষা ব্যবস্থা",
    description: "ইসলামিক মূল্যবোধের সাথে আধুনিক শিক্ষার সমন্বয়",
  },
  {
    image: "/images/slider/slider-3.jpg",
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
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image 
            src={slide.image || "/placeholder.svg"} 
            alt={slide.title} 
            layout="fill" 
            objectFit="cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Hind Siliguri' }}>{slide.title}</h2>
              <p className="text-xl md:text-2xl mb-8" style={{ fontFamily: 'Hind Siliguri' }}>{slide.description}</p>
              <a
                href="#about"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition duration-300 font-hind-siliguri inline-block"
              >
                আরও জানুন
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

