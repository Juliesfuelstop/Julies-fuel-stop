"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { promotions } from "@/data/promotions"

export default function PromotionsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Filter to only show active promotions
  const activePromotions = promotions.filter((promo) => promo.isActive)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activePromotions.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [activePromotions.length])

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-orange-600 text-center">Promotions</h1>

        <div className="relative w-full max-w-4xl mx-auto mb-6">
          <div className="overflow-hidden rounded-lg shadow-md">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {activePromotions.map((promo, index) => (
                <div key={promo.id} className="w-full flex-shrink-0">
                  <div className="promo-item border border-gray-200 p-6 rounded-lg shadow-md bg-white">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{promo.title}</h2>
                    <p className="text-gray-600">{promo.description}</p>
                    <p className="text-orange-600 font-semibold mt-2">{promo.validPeriod}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {activePromotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-orange-500" : "bg-gray-300"}`}
                aria-label={`Go to promotion ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[800px] mx-auto rounded-lg shadow-md overflow-hidden">
          <div className="aspect-video bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Promotions video placeholder</p>
          </div>
        </div>
      </div>
    </>
  )
}
