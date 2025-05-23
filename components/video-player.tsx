"use client"

import { useEffect, useRef } from "react"

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Attempt to play the video when the component mounts
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play()
        } catch (error) {
          console.log("Auto-play prevented:", error)
        }
      }

      playVideo()
    }
  }, [])

  return (
    <div className="w-full max-w-[800px] rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-video">
        {/* Fallback content in case video doesn't load */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
          Advertisement Video
        </div>

        {/* The actual video element */}
        <video ref={videoRef} className="w-full h-full object-cover" playsInline muted loop controls={false}>
          <source src="/media/advertisement.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
