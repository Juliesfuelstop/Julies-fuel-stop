import Image from "next/image"
import { Navbar } from "@/components/navbar"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 flex flex-col items-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-orange-600 text-center">About Julie&apos;s Market and Deli</h1>

        <div className="relative w-full h-64 mb-6 max-w-2xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuel-stop-APBFSLjABJEWdZIk9FEpOkizcu9NEO.png"
            alt="Fuel Stop"
            fill
            className="object-contain"
          />
        </div>

        <p className="text-gray-600 text-center max-w-2xl">
          Julie&apos;s Market and Deli, located conveniently in Knoxville, Tennessee, is a one-stop-shop offering a wide
          range of convenience and specialty products. With over 4 decades of experience as Sam and Jerry&apos;s Deli
          and Market, Julie&apos;s continues to fulfill diverse needs of the community. From grocery must-haves to
          satisfying deli delights and refueling options like high-quality gasoline, customers can find what they need
          and more. Additionally, Julie&apos;s Market and Deli enhances its unique offerings with a smoke shop, beer
          collection, and novelty items including vapes, certified THC products, providing an enjoyable shopping
          experience for all.
        </p>

        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-orange-600">Contact Us</h2>
          <p className="text-gray-600">Address: 3522 E Governor John Sevier Hwy, Knoxville, TN 37914</p>
          <p className="text-gray-600">Phone: (865) 337-7493</p>
          <p className="text-gray-600">Email: contact@juliesmarketanddeli.com</p>
        </div>
      </div>
    </>
  )
}
