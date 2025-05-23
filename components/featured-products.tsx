"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { menuItems } from "@/data/menu-items"

export function FeaturedProducts() {
  // Select a few featured products from different categories
  const featuredProducts = [
    menuItems["Breakfast"][3], // Sausage Egg Cheese Biscuit
    menuItems["Lunch & Dinner"][2], // Cheeseburger
    menuItems["Specials"][0], // 2 Hotdogs Special
    menuItems["Chicken"][2], // Potato Wedges - Family
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-orange-600">Featured Menu Items</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Check out our most popular items, ready for pickup or delivery.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/menu">
            <Button variant="outline" className="gap-1">
              View Full Menu <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
