"use client"

import { useState, useEffect } from "react"

const slides = [
  {
    title: "Welcome to Julie's!",
    description: "Enjoy fresh meals and more!",
  },
  {
    title: "Special Offers",
    description: "Check out our daily deals!",
  },
  {
    title: "Visit Us Today",
    description: "Located in Knoxville, TN!",
  },
  {
    title: "Online Ordering",
    description: "Now available with secure payment!",
  },
]

export function HomeSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto mb-6">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="slide-item border border-gray-200 p-8 rounded-lg shadow-md bg-white text-center h-40 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{slide.title}</h2>
                <p className="text-gray-600 text-lg">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-orange-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
