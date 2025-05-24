// This is a simplified version for demonstration purposes
// In a production environment, you would use a geocoding service like Google Maps API

// Haversine formula to calculate distance between two points on Earth
function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3958.8 // Earth's radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c

  return distance
}

// Mock geocoding function (in a real app, you would use a geocoding API)
async function geocodeAddress(address: string): Promise<{ lat: number; lng: number }> {
  // For demonstration, we'll return random coordinates near the store
  // In a real app, you would use Google Maps Geocoding API or similar

  // Store coordinates (Julie's Market and Deli)
  const storeLat = 35.9601
  const storeLng = -83.8651

  // Generate random coordinates within ~5 miles of the store
  const randomLat = storeLat + (Math.random() - 0.5) * 0.1
  const randomLng = storeLng + (Math.random() - 0.5) * 0.1

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return { lat: randomLat, lng: randomLng }
}

// Calculate distance between two addresses
export async function calculateDistance(address1: string, address2: string): Promise<number> {
  try {
    // In a real app, you would geocode both addresses
    // For this demo, we'll use the store's actual coordinates and generate random ones for the customer

    // Store coordinates (Julie's Market and Deli)
    const coords1 = { lat: 35.9601, lng: -83.8651 }

    // Get coordinates for customer address (mock)
    const coords2 = await geocodeAddress(address2)

    // Calculate distance
    const distance = haversineDistance(coords1.lat, coords1.lng, coords2.lat, coords2.lng)

    return distance
  } catch (error) {
    console.error("Error calculating distance:", error)
    throw error
  }
}
