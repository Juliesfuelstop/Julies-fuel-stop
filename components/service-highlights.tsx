import { Clock, MapPin, Truck } from "lucide-react"

export function ServiceHighlights() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-orange-600">Our Services</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Convenient options to fit your busy lifestyle.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-8">
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
            <div className="p-3 rounded-full bg-sky-100">
              <Clock className="h-10 w-10 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold">Quick Pickup</h3>
            <p className="text-center text-muted-foreground">
              Order online and pick up in-store without waiting in line. Your items will be ready when you arrive.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
            <div className="p-3 rounded-full bg-sky-100">
              <Truck className="h-10 w-10 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold">Local Delivery</h3>
            <p className="text-center text-muted-foreground">
              Get your essentials delivered right to your door. SMS notifications keep you updated on your delivery
              status.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
            <div className="p-3 rounded-full bg-sky-100">
              <MapPin className="h-10 w-10 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold">Multiple Locations</h3>
            <p className="text-center text-muted-foreground">
              With several locations throughout the area, Julie&apos;s Market and Deli is always nearby when you need
              us.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
