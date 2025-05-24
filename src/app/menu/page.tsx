"use client"

import { useState } from "react"
import { useCart } from "@/hooks/use-cart"
import { menuItems } from "@/data/menu-items"
import { Navbar } from "@/components/navbar"
import { Input } from "@/components/ui/input"
import { MenuItemCard } from "@/components/menu-item-card"

export default function MenuPage() {
  const { addItem } = useCart()
  const [activeTab, setActiveTab] = useState("Breakfast")
  const [quantities, setQuantities] = useState<Record<number, number>>({})
  const [searchTerm, setSearchTerm] = useState("")

  const handleQuantityChange = (itemId: number, value: string) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(1, Number.parseInt(value) || 1),
    }))
  }

  const handleAddToCart = (item: any) => {
    const quantity = quantities[item.id] || 1
    addItem(item, quantity)
    setQuantities((prev) => ({ ...prev, [item.id]: 1 })) // Reset quantity after adding
  }

  // Filter items based on search term
  const filteredItems = searchTerm
    ? Object.values(menuItems)
        .flat()
        .filter(
          (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()),
        )
    : menuItems[activeTab as keyof typeof menuItems] || []

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-orange-600 text-center">Menu</h1>

        <div className="menu-header mb-6">
          <p className="disclaimer text-xs text-center text-gray-500 mb-4">
            CONSUMING RAW OR UNDERCOOKED MEAT, POULTRY, SEAFOOD, OR EGGS MAY INCREASE YOUR RISK OF FOODBORNE ILLNESS
            ESPECIALLY IF YOU HAVE CERTAIN MEDICAL CONDITIONS.
          </p>
          <p className="text-xs text-center text-gray-500 mb-4">
            * These items contain or may contain raw or undercooked ingredients
          </p>
          <div className="deli-hours text-center text-sm">
            <p>
              <strong>DELI TIME:</strong>
            </p>
            <p>MON TO FRIDAY: 4:30AM TO 7:30PM</p>
            <p>SAT: 6:30AM TO 6PM</p>
            <p>SUN: 9AM TO 4PM</p>
          </div>
        </div>

        {/* Search bar */}
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto"
          />
        </div>

        {/* Category tabs */}
        <div className="tabs flex justify-center flex-wrap gap-2 mb-6">
          {Object.keys(menuItems).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                setSearchTerm("")
              }}
              className={`px-5 py-2 rounded-full font-semibold transition duration-300 ${
                activeTab === tab && !searchTerm
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              quantity={quantities[item.id] || 1}
              onQuantityChange={handleQuantityChange}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No menu items found. Please try a different search term.</p>
          </div>
        )}
      </div>
    </>
  )
}
