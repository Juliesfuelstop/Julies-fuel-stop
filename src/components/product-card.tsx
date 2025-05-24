"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart, type MenuItem } from "@/hooks/use-cart"

interface ProductCardProps {
  product: MenuItem
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = async () => {
    setIsLoading(true)
    // Simulate a small delay for better UX
    setTimeout(() => {
      addItem(product)
      setIsLoading(false)
    }, 500)
  }

  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative bg-muted">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gray-100">
          {product.name}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          </div>
          <div className="font-bold">${product.price.toFixed(2)}</div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} disabled={isLoading} className="w-full gap-2 bg-green-500 hover:bg-green-600">
          <ShoppingCart className="h-4 w-4" />
          {isLoading ? "Adding..." : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
