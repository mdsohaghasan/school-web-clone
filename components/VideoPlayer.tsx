'use client'

interface VideoPlayerProps {
  youtubeId: string
  title: string
  description: string
  views: string
  date: string
}

export function VideoPlayer({ youtubeId, title, description, views, date }: VideoPlayerProps) {
  return (
    <div className="w-full">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
          <span>{views} দর্শন</span>
          <span>{date}</span>
        </div>
        <p className="mt-4 text-gray-700">{description}</p>
      </div>
    </div>
  )
}

