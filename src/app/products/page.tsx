import { ProductCard } from "@/components/product-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductsPage() {
  // This would typically come from a database or API
  const products = [
    {
      id: 1,
      name: "Premium Coffee",
      price: 2.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "Drinks",
    },
    {
      id: 2,
      name: "Fresh Sandwich",
      price: 5.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "Food",
    },
    {
      id: 3,
      name: "Energy Drink",
      price: 3.49,
      image: "/placeholder.svg?height=200&width=200",
      category: "Drinks",
    },
    {
      id: 4,
      name: "Snack Pack",
      price: 4.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "Snacks",
    },
    {
      id: 5,
      name: "Bottled Water",
      price: 1.49,
      image: "/placeholder.svg?height=200&width=200",
      category: "Drinks",
    },
    {
      id: 6,
      name: "Protein Bar",
      price: 2.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "Snacks",
    },
    {
      id: 7,
      name: "Hot Dog",
      price: 3.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "Food",
    },
    {
      id: 8,
      name: "Chips",
      price: 1.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "Snacks",
    },
  ]

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="drinks">Drinks</SelectItem>
              <SelectItem value="food">Food</SelectItem>
              <SelectItem value="snacks">Snacks</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="featured">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full sm:w-auto">
          <div className="relative">
            <input type="text" placeholder="Search products..." className="w-full px-4 py-2 border rounded-md" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
