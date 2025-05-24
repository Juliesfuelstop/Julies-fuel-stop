import { Navbar } from "@/components/navbar"

export default function GroceryPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 bg-gray-100 min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-orange-600 text-center">Grocery</h1>
        <p className="text-center text-gray-600 max-w-2xl">
          Explore our wide range of grocery must-haves. Coming soon with detailed items!
        </p>
      </div>
    </>
  )
}
