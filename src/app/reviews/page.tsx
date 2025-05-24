import { Navbar } from "@/components/navbar"

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 bg-gray-100 min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-6 text-orange-600 text-center">Reviews</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-500 font-bold mr-4">
                JD
              </div>
              <div>
                <h3 className="font-bold">John D.</h3>
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              "Great food and quick service! The breakfast biscuits are amazing and the staff is always friendly."
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center text-green-500 font-bold mr-4">
                SM
              </div>
              <div>
                <h3 className="font-bold">Sarah M.</h3>
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              "Best fuel stop on the highway! Their chicken tenders are delicious and the prices are reasonable."
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center text-purple-500 font-bold mr-4">
                RJ
              </div>
              <div>
                <h3 className="font-bold">Robert J.</h3>
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-gray-300">★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              "Convenient location and good selection of groceries. The deli makes a mean sandwich!"
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center text-red-500 font-bold mr-4">
                AL
              </div>
              <div>
                <h3 className="font-bold">Amy L.</h3>
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              "I stop here every morning for coffee and breakfast. The staff knows me by name and always gets my order
              right!"
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
