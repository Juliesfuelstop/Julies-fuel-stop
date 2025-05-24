"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Check, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("id")
  const method = searchParams.get("method") || "pickup"
  const time = searchParams.get("time") || ""

  if (!orderId) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto p-4 text-center py-12">
          <h1 className="text-3xl font-bold mb-6 text-orange-600">Order Confirmation</h1>
          <p className="text-gray-600 mb-6">No order information found. Please return to the menu.</p>
          <Link href="/menu">
            <Button className="bg-orange-500 hover:bg-orange-600">Browse Menu</Button>
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Order Confirmed!</CardTitle>
            <p className="text-gray-500">
              Your order has been placed successfully. You will receive an SMS notification when your order is ready.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Order #{orderId}</h3>

              {method === "pickup" && time && (
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="h-4 w-4 mr-2 text-orange-500" />
                  <span>Pickup time: {time}</span>
                </div>
              )}

              {method === "delivery" && (
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                  <span>Delivery: Estimated 30-45 minutes</span>
                </div>
              )}

              <p className="text-sm text-gray-500">
                {method === "pickup"
                  ? "Your order will be ready for pickup at the selected time."
                  : "Your order will be delivered to your address."}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Link href="/" className="w-full">
              <Button className="w-full bg-orange-500 hover:bg-orange-600">Return to Home</Button>
            </Link>
            <Link href="/menu" className="w-full">
              <Button variant="outline" className="w-full">
                Order More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
