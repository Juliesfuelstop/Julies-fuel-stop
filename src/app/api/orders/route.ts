import { NextResponse } from "next/server"

// This would be replaced with a real database in production
const orders: any[] = []

export async function GET() {
  return NextResponse.json({ orders })
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.items || !data.total || !data.phoneNumber || !data.orderId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Add to orders (in a real app, this would be saved to a database)
    const newOrder = {
      ...data,
      createdAt: new Date().toISOString(),
    }

    orders.push(newOrder)

    // In a real implementation, we would call the SMS notification service here
    await sendSMSNotification(data.phoneNumber, `Your order #${data.orderId} has been received and is being prepared.`)

    return NextResponse.json({ success: true, order: newOrder })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

// Mock SMS notification function
async function sendSMSNotification(phoneNumber: string, message: string) {
  // In a real implementation, this would use Twilio or another SMS service
  console.log(`Sending SMS to ${phoneNumber}: ${message}`)

  // Simulate API call
  return {
    success: true,
    messageId: "mock-message-id-" + Date.now(),
  }
}
