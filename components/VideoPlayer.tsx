'use client'

interface VideoPlayerProps {
  youtubeId: string
  title?: string
  description?: string
  views?: string
  date?: string
  showDetails?: boolean
}

export function VideoPlayer({ 
  youtubeId, 
  title, 
  description, 
  views, 
  date, 
  showDetails = false 
}: VideoPlayerProps) {
  return (
    <div className="w-full">
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
      {showDetails && (
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-foreground font-hind-siliguri">
            {title}
          </h1>
          <div className="flex items-center mt-3 text-sm text-muted-foreground">
            <span className="font-hind-siliguri">{views} দর্শন</span>
            <span className="mx-2">•</span>
            <span className="font-hind-siliguri">{date}</span>
          </div>
          <p className="mt-4 text-muted-foreground font-hind-siliguri leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </div>
  )
}
  
