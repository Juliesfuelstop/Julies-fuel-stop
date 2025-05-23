import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { phoneNumber, message } = await request.json()

    if (!phoneNumber || !message) {
      return NextResponse.json({ error: "Phone number and message are required" }, { status: 400 })
    }

    // In a real implementation, you would use Twilio or another SMS service
    console.log(`Sending SMS to ${phoneNumber}: ${message}`)

    // Simulate successful SMS sending
    return NextResponse.json({
      success: true,
      messageId: "mock-message-id-" + Date.now(),
    })
  } catch (error) {
    console.error("Error sending SMS:", error)
    return NextResponse.json({ error: "Failed to send SMS" }, { status: 500 })
  }
}
