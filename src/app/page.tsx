import { Navbar } from "@/components/navbar"
import { HomeSlideshow } from "@/components/home-slideshow"
import { VideoPlayer } from "@/components/video-player"
import { FeaturedProducts } from "@/components/featured-products"
import { ServiceHighlights } from "@/components/service-highlights"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return <h1>Welcome to Julie's Deli and Market</h1>;(
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto p-4 flex flex-col items-center min-h-[80vh] bg-gray-100">
          <h1 className="text-4xl text-sky-600 font-serif font-bold mb-6 text-center">
            WELCOME to JULIE&apos;S MARKET AND DELI
          </h1>

          <div className="relative w-32 h-32 mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-bwRacFuHclaqEKs2rsMCDbxmo8Dieb.png"
              alt="Julie's Market and Deli Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Slideshow Component */}
          <HomeSlideshow />

          <Link href="/menu" className="mb-6">
            <Button className="bg-orange-500 hover:bg-orange-600">Explore Menu</Button>
          </Link>

          {/* Video Player Component */}
          <VideoPlayer />
        </div>
        <FeaturedProducts />
        <ServiceHighlights />
      </main>
      <footer className="border-t py-6 md:py-0 bg-sky-500 text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose md:text-left">
            © 2025 Julie&apos;s Market and Deli. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm hover:text-orange-200 transition duration-300">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm hover:text-orange-200 transition duration-300">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
