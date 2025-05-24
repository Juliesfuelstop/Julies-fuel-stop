"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"
import { Clock, AlertCircle, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useCart } from "@/hooks/use-cart"
import { Navbar } from "@/components/navbar"
import { calculateDistance } from "@/lib/distance-calculator"

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

// Store location (Julie's Market and Deli)
const STORE_LOCATION = {
  lat: 35.9601,
  lng: -83.8651,
  address: "3522 E Governor John Sevier Hwy, Knoxville, TN 37914",
}

// Maximum delivery radius in miles
const MAX_DELIVERY_RADIUS = 3

// Generate pickup time options (every 15 minutes)
const generatePickupTimes = () => {
  const times = []
  const now = new Date()
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()

  // Round to next 15 minute interval and add 30 minutes preparation time
  let startMinute = Math.ceil(currentMinute / 15) * 15 + 30
  let startHour = currentHour

  if (startMinute >= 60) {
    startMinute = startMinute - 60
    startHour = startHour + 1
  }

  // Generate times for the next 3 hours
  for (let h = 0; h < 3; h++) {
    const hour = (startHour + h) % 24

    for (let m = 0; m < 4; m++) {
      const minute = h === 0 && m === 0 ? startMinute : m * 15
      if (h === 0 && m === 0 && minute > 45) continue // Skip if first interval is > 45 minutes

      const hourFormatted = hour % 12 === 0 ? 12 : hour % 12
      const ampm = hour < 12 ? "AM" : "PM"
      const timeString = `${hourFormatted}:${minute.toString().padStart(2, "0")} ${ampm}`

      times.push(timeString)
    }
  }

  return times
}

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, clearCart } = useCart()
  const [deliveryOption, setDeliveryOption] = useState("pickup")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [orderNotes, setOrderNotes] = useState("")
  const [pickupTime, setPickupTime] = useState("")
  const [error, setError] = useState("")
  const [isAddressValid, setIsAddressValid] = useState(true)
  const [distance, setDistance] = useState<number | null>(null)
  const [pickupTimes, setPickupTimes] = useState<string[]>([])

  const taxRate = 0.095 // 9.5%
  const tax = subtotal * taxRate
  const deliveryFee = deliveryOption === "delivery" ? 3.99 : 0
  const total = subtotal + tax + deliveryFee

  useEffect(() => {
    // Generate pickup times when component mounts
    setPickupTimes(generatePickupTimes())
  }, [])

  const handleAddressChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAddress = e.target.value
    setAddress(newAddress)

    if (newAddress.trim()) {
      try {
        // Calculate distance from store
        const dist = await calculateDistance(STORE_LOCATION.address, newAddress)
        setDistance(dist)

        // Check if address is within delivery radius
        const isWithinRadius = dist <= MAX_DELIVERY_RADIUS
        setIsAddressValid(isWithinRadius)

        // If the address is outside the radius and delivery is selected, switch to pickup
        if (!isWithinRadius && deliveryOption === "delivery") {
          setDeliveryOption("pickup")
        }
      } catch (error) {
        console.error("Error calculating distance:", error)
        setIsAddressValid(true) // Default to valid if calculation fails
      }
    } else {
      setDistance(null)
      setIsAddressValid(true)
    }
  }

  const handleCheckout = async () => {
    // Validate form
    if (!phoneNumber) {
      setError("Please provide a phone number for order notifications")
      return
    }

    if (deliveryOption === "delivery" && !address) {
      setError("Please provide a delivery address")
      return
    }

    if (deliveryOption === "pickup" && !pickupTime) {
      setError("Please select a pickup time")
      return
    }

    // In a real implementation, this would create a payment intent and redirect to Stripe
    // For now, we'll just simulate a successful order

    // Generate a random order ID
    const orderId = `JMD-${Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0")}`

    // Clear the cart
    clearCart()

    // Redirect to confirmation page with order details
    router.push(`/order-confirmation?id=${orderId}&method=${deliveryOption}&time=${encodeURIComponent(pickupTime)}`)
  }

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6 text-orange-600">Checkout</h1>
          <p className="text-center">Your cart is empty. Please add items to your cart before checking out.</p>
          <div className="flex justify-center mt-6">
            <Link href="/menu">
              <Button className="bg-orange-500 hover:bg-orange-600">Browse Menu</Button>
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6 text-orange-600">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Delivery Options</h3>
                  <RadioGroup
                    defaultValue="pickup"
                    className="space-y-2"
                    onValueChange={setDeliveryOption}
                    value={deliveryOption}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="checkout-pickup" />
                      <Label htmlFor="checkout-pickup">Pickup (Free)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="delivery"
                        id="checkout-delivery"
                        disabled={!isAddressValid && distance !== null}
                      />
                      <Label
                        htmlFor="checkout-delivery"
                        className={!isAddressValid && distance !== null ? "text-gray-400" : ""}
                      >
                        Delivery (+$3.99)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {deliveryOption === "delivery" && (
                  <div className="space-y-2">
                    <Label htmlFor="checkout-address">Delivery Address</Label>
                    <Input
                      id="checkout-address"
                      placeholder="Enter your address"
                      value={address}
                      onChange={handleAddressChange}
                      required
                    />
                    {distance !== null && (
                      <p className="text-sm text-gray-500">Distance from store: {distance.toFixed(1)} miles</p>
                    )}
                    {isAddressValid && distance !== null && (
                      <Alert className="mt-2 bg-green-50 border-green-200">
                        <Check className="h-4 w-4 text-green-500" />
                        <AlertTitle className="text-green-700">Delivery available</AlertTitle>
                        <AlertDescription className="text-green-600">
                          Your address is within our delivery radius. You can choose delivery or pickup.
                        </AlertDescription>
                      </Alert>
                    )}
                    {!isAddressValid && distance !== null && (
                      <Alert variant="destructive" className="mt-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Delivery not available</AlertTitle>
                        <AlertDescription>
                          We only deliver within a {MAX_DELIVERY_RADIUS} mile radius of our store. Your location is{" "}
                          {distance.toFixed(1)} miles away. Please choose pickup instead.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                )}

                {deliveryOption === "pickup" && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <Label htmlFor="pickup-time">Pickup Time</Label>
                    </div>
                    <Select onValueChange={setPickupTime} value={pickupTime}>
                      <SelectTrigger id="pickup-time">
                        <SelectValue placeholder="Select pickup time" />
                      </SelectTrigger>
                      <SelectContent>
                        {pickupTimes.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500">
                      Please allow at least 30 minutes for your order to be prepared.
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="checkout-phone">Phone Number (for order notifications)</Label>
                  <Input
                    id="checkout-phone"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order-notes">Order Notes (optional)</Label>
                  <Textarea
                    id="order-notes"
                    placeholder="Special instructions, allergies, etc."
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    rows={3}
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="pt-4">
                  <Button onClick={handleCheckout} className="w-full bg-orange-500 hover:bg-orange-600">
                    Complete Order
                  </Button>
                  <p className="text-sm text-center mt-2 text-gray-500">
                    Your payment will be processed securely with Stripe
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <Separator />

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (9.5%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                {deliveryFee > 0 && (
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                )}

                <Separator />

                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
