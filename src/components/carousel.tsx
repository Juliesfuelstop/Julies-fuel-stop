"use client"

import type { Dispatch, SetStateAction } from "react"

interface Slide {
  title: string
  description: string
}

interface CarouselProps {
  slides: Slide[]
  currentSlide: number
  setCurrentSlide: Dispatch<SetStateAction<number>>
}

export function Carousel({ slides, currentSlide, setCurrentSlide }: CarouselProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto mb-6">
      <div className="overflow-hidden rounded-lg shadow-md">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="slide-item border border-gray-200 p-6 rounded-lg shadow-md bg-white text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{slide.title}</h2>
                <p className="text-gray-600">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-orange-500" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
