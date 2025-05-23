import { NextResponse } from "next/server"
import { headers } from "next/headers"
import stripe from "@/lib/stripe-server"

export async function POST(request: Request) {
  const body = await request.text()
  const signature = headers().get("stripe-signature") as string

  let event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (error: any) {
    console.error(`Webhook signature verification failed: ${error.message}`)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`)

      // Update order status in your database
      // Extract order details from metadata
      const orderId = paymentIntent.metadata.order_id
      const deliveryOption = paymentIntent.metadata.delivery_option
      const items = JSON.parse(paymentIntent.metadata.items || "[]")

      // In a real app, you would update the order status in your database
      console.log(`Updating order ${orderId} to paid status`)

      break
    case "payment_intent.payment_failed":
      const failedPaymentIntent = event.data.object
      console.log(`Payment failed: ${failedPaymentIntent.last_payment_error?.message}`)
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return NextResponse.json({ received: true })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
