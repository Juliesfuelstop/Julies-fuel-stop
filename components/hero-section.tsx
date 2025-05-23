"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Carousel } from "@/components/carousel"

export function HeroSection() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { title: "Welcome to Julie's!", description: "Enjoy fresh meals and more!" },
    { title: "Special Offers", description: "Check out our daily deals!" },
    { title: "Visit Us Today", description: "Located in Knoxville, TN!" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const handleExploreMenu = () => {
    router.push("/menu")
  }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center min-h-[80vh] bg-gray-100">
      <h1 className="text-4xl text-sky-600 font-serif font-bold mb-6 text-center">
        WELCOME to JULIE&apos;S MARKET AND DELI
      </h1>

      <div className="relative w-32 h-32 mb-6">
        <Image src="/logo.png" alt="Julie's Market and Deli Logo" fill className="object-contain" />
      </div>

      <Carousel slides={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />

      <Button
        onClick={handleExploreMenu}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300 mb-6"
      >
        Explore Menu <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <div className="w-full max-w-[800px] rounded-lg shadow-md overflow-hidden">
        <video autoPlay loop muted className="w-full">
          <source src="/media/home-advertisement.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
