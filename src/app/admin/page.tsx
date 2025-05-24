"use client"

import { useState, useEffect } from "react"
import { toast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface Order {
  orderId: string
  items: OrderItem[]
  subtotal: number
  tax: number
  deliveryFee: number
  total: number
  deliveryOption: string
  address: string | null
  phoneNumber: string
  status: string
  createdAt: string
}

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("pending")

  useEffect(() => {
    // In a real app, this would fetch from your API
    const fetchOrders = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setOrders([
            {
              orderId: "JMD-123456",
              items: [
                { id: 1, name: "Jelly Biscuit", price: 1.49, quantity: 2 },
                { id: 3, name: "Sausage Egg", price: 2.69, quantity: 1 },
              ],
              subtotal: 5.67,
              tax: 0.4,
              deliveryFee: 0,
              total: 6.07,
              deliveryOption: "pickup",
              address: null,
              phoneNumber: "+1234567890",
              status: "pending",
              createdAt: new Date().toISOString(),
            },
            {
              orderId: "JMD-123457",
              items: [
                { id: 24, name: "Cheeseburger", price: 5.99, quantity: 1 },
                { id: 72, name: "Fries", price: 2.39, quantity: 1 },
              ],
              subtotal: 8.38,
              tax: 0.59,
              deliveryFee: 5.0,
              total: 13.97,
              deliveryOption: "delivery",
              address: "123 Main St, Knoxville, TN",
              phoneNumber: "+1987654321",
              status: "completed",
              createdAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
            },
          ])
          setIsLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching orders:", error)
        setIsLoading(false)
      }
    }

    fetchOrders()
  }, [])

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      // In a real app, this would call your API
      setOrders(orders.map((order) => (order.orderId === orderId ? { ...order, status: newStatus } : order)))

      // Find the order to get the phone number
      const order = orders.find((o) => o.orderId === orderId)

      if (order) {
        // Send SMS notification
        if (newStatus === "ready") {
          await fetch("/api/send-sms", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              phoneNumber: order.phoneNumber,
              message: `Your order #${orderId} is ready for pickup! Thank you for choosing Julie's Market and Deli.`,
            }),
          })
        }

        toast({
          title: "Order Updated",
          description: `Order #${orderId} status changed to ${newStatus}`,
        })
      }
    } catch (error) {
      console.error("Error updating order:", error)
      toast({
        title: "Update Failed",
        description: "There was a problem updating the order status.",
        variant: "destructive",
      })
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">
            Pending
          </Badge>
        )
      case "preparing":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
            Preparing
          </Badge>
        )
      case "ready":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
            Ready
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
            Completed
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
            Cancelled
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "all") return true
    return order.status === activeTab
  })

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-orange-600 text-center">Admin Dashboard</h1>
        <div className="flex items-center justify-center py-12">
          <div className="animate-pulse text-center">
            <p className="text-gray-500">Loading orders...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-orange-600 text-center">Admin Dashboard</h1>

      <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="preparing">Preparing</TabsTrigger>
          <TabsTrigger value="ready">Ready</TabsTrigger>
          <TabsTrigger value="all">All Orders</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No {activeTab === "all" ? "" : activeTab} orders found.</p>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <Card key={order.orderId} className="mb-4">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>Order #{order.orderId}</CardTitle>
                    {getStatusBadge(order.status)}
                  </div>
                  <p className="text-sm text-gray-500">
                    {formatDate(order.createdAt)} • {order.deliveryOption === "pickup" ? "Pickup" : "Delivery"}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Items</h3>
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-sm py-1">
                          <span>
                            {item.name} x{item.quantity}
                          </span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${order.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tax</span>
                        <span>${order.tax.toFixed(2)}</span>
                      </div>
                      {order.deliveryFee > 0 && (
                        <div className="flex justify-between text-sm">
                          <span>Delivery Fee</span>
                          <span>${order.deliveryFee.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${order.total.toFixed(2)}</span>
                      </div>
                    </div>

                    {order.address && (
                      <div>
                        <h3 className="font-medium mb-1">Delivery Address</h3>
                        <p className="text-sm">{order.address}</p>
                      </div>
                    )}

                    <div>
                      <h3 className="font-medium mb-1">Contact</h3>
                      <p className="text-sm">{order.phoneNumber}</p>
                    </div>

                    {order.status === "pending" && (
                      <div className="flex space-x-2 pt-2">
                        <Button
                          onClick={() => updateOrderStatus(order.orderId, "preparing")}
                          className="bg-blue-500 hover:bg-blue-600"
                        >
                          Start Preparing
                        </Button>
                        <Button
                          onClick={() => updateOrderStatus(order.orderId, "cancelled")}
                          variant="outline"
                          className="text-red-500 border-red-300 hover:bg-red-50"
                        >
                          Cancel Order
                        </Button>
                      </div>
                    )}

                    {order.status === "preparing" && (
                      <Button
                        onClick={() => updateOrderStatus(order.orderId, "ready")}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Mark as Ready
                      </Button>
                    )}

                    {order.status === "ready" && (
                      <Button
                        onClick={() => updateOrderStatus(order.orderId, "completed")}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Complete Order
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
