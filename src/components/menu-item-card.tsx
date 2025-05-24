"use client"

import { ShoppingCart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { MenuItem } from "@/data/menu-items"

interface MenuItemCardProps {
  item: MenuItem
  quantity: number
  onQuantityChange: (id: number, value: string) => void
  onAddToCart: (item: MenuItem) => void
}

export function MenuItemCard({ item, quantity, onQuantityChange, onAddToCart }: MenuItemCardProps) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="h-48 bg-gray-200 flex items-center justify-center mb-3 rounded-md overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-orange-100 text-orange-800 font-semibold text-lg p-4 text-center">
            {item.name}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="text-gray-600 mt-1">{item.description}</p>
          <p className="text-orange-600 font-bold mt-2">${item.price.toFixed(2)}</p>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div className="flex items-center">
            <Label htmlFor={`qty-${item.id}`} className="mr-2 text-sm">
              Qty:
            </Label>
            <Input
              id={`qty-${item.id}`}
              type="number"
              min="1"
              value={quantity || 1}
              onChange={(e) => onQuantityChange(item.id, e.target.value)}
              className="w-16 h-8"
            />
          </div>

          <Button onClick={() => onAddToCart(item)} className="bg-green-500 hover:bg-green-600" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  )
}
