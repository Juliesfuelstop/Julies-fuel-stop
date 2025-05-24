import { NextResponse } from "next/server"
import stripe from "@/lib/stripe-server"

export async function POST(request: Request) {
  try {
    const { total, deliveryOption, items, metadata } = await request.json()

    // Convert total to cents for Stripe
    const amount = Math.round(total * 100)

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        order_id: metadata.orderId,
        delivery_option: deliveryOption,
        items: JSON.stringify(
          items.map((item: any) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        ),
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error("Error creating payment intent:", error)
    return NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 })
  }
}
