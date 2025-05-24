"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/hooks/use-cart"

export function Navbar() {
  const pathname = usePathname()
  const { items } = useCart()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Promotions", path: "/promotions" },
    { name: "Grocery", path: "/grocery" },
    { name: "Beer", path: "/beer" },
    { name: "Novelty", path: "/novelty" },
    { name: "Reviews", path: "/reviews" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className="bg-sky-500 p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex items-center">
            <div className="relative w-12 h-12 mr-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-bwRacFuHclaqEKs2rsMCDbxmo8Dieb.png"
                alt="Julie's Market and Deli Logo"
                fill
                className="object-contain"
              />
            </div>
            <Link href="/">
              <span className="text-white text-2xl font-bold tracking-wide">Julie&apos;s Market and Deli</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-white text-lg font-semibold hover:text-orange-200 transition duration-300 ${
                  pathname === item.path ? "underline" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/cart"
              className={`text-white text-lg font-semibold hover:text-orange-200 transition duration-300 flex items-center ${
                pathname === "/cart" ? "underline" : ""
              }`}
            >
              Cart
              {totalItems > 0 && (
                <span className="bg-red-600 text-white rounded-full px-2 ml-1 text-sm">{totalItems}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
