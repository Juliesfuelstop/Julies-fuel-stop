"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { PaymentElement, useStripe, useElements, AddressElement } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"

interface StripePaymentFormProps {
  clientSecret: string
  onPaymentSuccess: (paymentIntentId: string) => void
  total: number
}

export function StripePaymentForm({ clientSecret, onPaymentSuccess, total }: StripePaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!stripe || !clientSecret) {
      return
    }
  }, [stripe, clientSecret])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet
      return
    }

    setIsLoading(true)
    setErrorMessage(null)

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/order-confirmation`,
        },
        redirect: "if_required",
      })

      if (error) {
        setErrorMessage(error.message || "An error occurred with your payment")
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        onPaymentSuccess(paymentIntent.id)
      } else {
        setErrorMessage("Unexpected payment status. Please try again.")
      }
    } catch (err) {
      console.error("Payment error:", err)
      setErrorMessage("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />

      <AddressElement
        options={{
          mode: "billing",
        }}
      />

      {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}

      <Button
        type="submit"
        disabled={isLoading || !stripe || !elements}
        className="w-full bg-orange-500 hover:bg-orange-600"
      >
        {isLoading ? "Processing..." : `Pay $${total.toFixed(2)}`}
      </Button>
    </form>
  )
}
