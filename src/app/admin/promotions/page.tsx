"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function PromotionsAdminPage() {
  const [activeTab, setActiveTab] = useState("current")

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-orange-600 text-center">Promotions Management</h1>

        <Alert className="mb-6">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Guide for Managing Promotions</AlertTitle>
          <AlertDescription>
            This page allows you to manage promotions for Julie's Market and Deli. You can add, edit, and delete
            promotions. Changes made here will be reflected on the Promotions page that customers see.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="current" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="current">Current Promotions</TabsTrigger>
            <TabsTrigger value="add">Add Promotion</TabsTrigger>
            <TabsTrigger value="guide">How-To Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Example promotion cards */}
              <PromotionCard
                title="Extra Bite, Zero Cost! Buy 4, Get 1 on Us!"
                description="4 PC Tenders @ $8.49 ONLY + FREE Tender/Biscuit + Add Any Size Fountain Drink for 99¢ ONLY"
                validPeriod="Available daily."
                id="promo1"
              />

              <PromotionCard
                title="Monday Breakfast Deal"
                description="Get a free coffee with any breakfast purchase over $5 every Monday!"
                validPeriod="Valid on Mondays only."
                id="promo2"
              />

              <PromotionCard
                title="Family Chicken Pack"
                description="20 Piece Chicken (Dark or White) + 2 Large Sides for only $29.99!"
                validPeriod="Available every day."
                id="promo3"
              />

              <PromotionCard
                title="Lunch Combo Special"
                description="Any sandwich + fries + 20oz drink for $8.99!"
                validPeriod="Available 11 AM - 2 PM daily."
                id="promo4"
              />
            </div>
          </TabsContent>

          <TabsContent value="add">
            <Card>
              <CardHeader>
                <CardTitle>Add New Promotion</CardTitle>
                <CardDescription>Create a new promotion to display on the website.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="promo-title">Promotion Title</Label>
                    <Input id="promo-title" placeholder="Enter promotion title" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="promo-description">Description</Label>
                    <Textarea id="promo-description" placeholder="Describe the promotion details" rows={3} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="promo-valid">Valid Period</Label>
                    <Input id="promo-valid" placeholder="e.g., Available daily, Valid until June 30, etc." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="promo-start">Start Date</Label>
                    <Input id="promo-start" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="promo-end">End Date (optional)</Label>
                    <Input id="promo-end" type="date" />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="bg-orange-500 hover:bg-orange-600 w-full">Add Promotion</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>How to Manage Promotions</CardTitle>
                <CardDescription>
                  A step-by-step guide for updating promotions on Julie's Market and Deli website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Adding a New Promotion</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Click on the "Add Promotion" tab above</li>
                    <li>Fill in the promotion details (title, description, valid period, etc.)</li>
                    <li>Click "Add Promotion" to save</li>
                    <li>The new promotion will appear on the website immediately</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Editing an Existing Promotion</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Go to the "Current Promotions" tab</li>
                    <li>Find the promotion you want to edit</li>
                    <li>Click the "Edit" button</li>
                    <li>Make your changes and click "Save Changes"</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Deleting a Promotion</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Go to the "Current Promotions" tab</li>
                    <li>Find the promotion you want to delete</li>
                    <li>Click the "Delete" button</li>
                    <li>Confirm deletion when prompted</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Best Practices for Promotions</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Keep titles short and attention-grabbing</li>
                    <li>Include all important details in the description</li>
                    <li>Always specify when the promotion is valid</li>
                    <li>Use consistent formatting for similar promotions</li>
                    <li>Remove expired promotions promptly</li>
                    <li>Consider seasonal promotions for holidays and special events</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Details</h3>
                  <p>
                    The promotions are stored in the <code>data/promotions.ts</code> file. If you're comfortable with
                    code, you can also edit this file directly to update promotions. After editing, you'll need to
                    rebuild and deploy the website for changes to take effect.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

interface PromotionCardProps {
  title: string
  description: string
  validPeriod: string
  id: string
}

function PromotionCard({ title, description, validPeriod, id }: PromotionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">{description}</p>
        <p className="text-sm text-orange-600 font-semibold">{validPeriod}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Edit</Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  )
}
