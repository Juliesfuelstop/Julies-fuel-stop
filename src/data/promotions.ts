export interface Promotion {
  id: string
  title: string
  description: string
  validPeriod: string
  startDate: string // ISO date string
  endDate?: string // ISO date string, optional
  isActive: boolean
}

export const promotions: Promotion[] = [
  {
    id: "promo1",
    title: "Extra Bite, Zero Cost! Buy 4, Get 1 on Us!",
    description: "4 PC Tenders @ $8.49 ONLY + FREE Tender/Biscuit + Add Any Size Fountain Drink for 99¢ ONLY",
    validPeriod: "Available daily.",
    startDate: "2025-01-01",
    isActive: true,
  },
  {
    id: "promo2",
    title: "Monday Breakfast Deal",
    description: "Get a free coffee with any breakfast purchase over $5 every Monday!",
    validPeriod: "Valid on Mondays only.",
    startDate: "2025-01-01",
    isActive: true,
  },
  {
    id: "promo3",
    title: "Family Chicken Pack",
    description: "20 Piece Chicken (Dark or White) + 2 Large Sides for only $29.99!",
    validPeriod: "Available every day.",
    startDate: "2025-01-01",
    isActive: true,
  },
  {
    id: "promo4",
    title: "Lunch Combo Special",
    description: "Any sandwich + fries + 20oz drink for $8.99!",
    validPeriod: "Available 11 AM - 2 PM daily.",
    startDate: "2025-01-01",
    isActive: true,
  },
]
