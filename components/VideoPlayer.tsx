'use client'

import { useEffect, useState } from 'react';

export interface VideoPlayerProps {
  url?: string;
  youtubeId?: string;
}

export function VideoPlayer({ url, youtubeId }: VideoPlayerProps) {
  const [videoId, setVideoId] = useState<string | null>(null)

  useEffect(() => {
    if (youtubeId) {
      setVideoId(youtubeId)
    } else if (url) {
      // Extract YouTube ID from URL
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)
      if (match && match[2].length === 11) {
        setVideoId(match[2])
      }
    }
  }, [url, youtubeId])

  if (!videoId) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">ভিডিও লোড হচ্ছে...</p>
      </div>
    )
  }

  return (
    <iframe
      className="absolute inset-0 w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}
  
