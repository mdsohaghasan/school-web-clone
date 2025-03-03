"use client"

import { useState } from "react"
import Image from "next/image"
import { FaTimes } from "react-icons/fa"

const images = [
  "/images/dummy/gallery/gallery-1.jpg",
  "/images/dummy/gallery/gallery-2.jpg",
  "/images/dummy/gallery/gallery-3.jpg",
  "/images/dummy/gallery/gallery-4.jpg",
  "/images/dummy/gallery/gallery-5.jpg",
  "/images/dummy/gallery/gallery-6.jpg",
]

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState("")

  const openLightbox = (image: string) => {
    setCurrentImage(image)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-48 cursor-pointer" onClick={() => openLightbox(image)}>
            <Image
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button className="absolute top-4 right-4 text-white text-2xl" style={{ fontFamily: 'Hind Siliguri' }}  onClick={closeLightbox}>
              <FaTimes />
            </button>
            <Image
              src={currentImage || "/placeholder.svg"}
              alt="Lightbox image"
              width={800}
              height={600}
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}

