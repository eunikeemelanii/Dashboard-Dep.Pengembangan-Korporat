import { type NextRequest, NextResponse } from "next/server"

// Mock database - in production, use a real database
const mockData = [
  { id: 1, factory: 1, product: "Ammonia", raw_material: "Gas", consumption_rate: 31.5, unit: "MMBTU/Ton" },
  { id: 2, factory: 1, product: "Ammonia", raw_material: "Nitrogen Liquid", consumption_rate: 0.21, unit: "Ton/Ton" },
  { id: 3, factory: 1, product: "Ammonia", raw_material: "Air Demin", consumption_rate: 4.39, unit: "m3/ton" },
  { id: 4, factory: 1, product: "Ammonia", raw_material: "Listrik", consumption_rate: 11.54, unit: "MWh/ton" },
  { id: 5, factory: 1, product: "Urea", raw_material: "Ammonia", consumption_rate: 0.57, unit: "Ton/Ton" },
  { id: 6, factory: 1, product: "Urea", raw_material: "Nitrogen Liquid", consumption_rate: 0.88, unit: "Ton/Ton" },
  { id: 7, factory: 1, product: "Urea", raw_material: "Air Demin", consumption_rate: 0.26, unit: "m3/ton" },
  { id: 8, factory: 1, product: "Urea", raw_material: "Listrik", consumption_rate: 48.16, unit: "MWh/ton" },
  { id: 9, factory: 1, product: "ZA", raw_material: "Ammonia", consumption_rate: 0.3, unit: "Ton/Ton" },
  { id: 10, factory: 1, product: "ZA", raw_material: "Sulphuric Acid", consumption_rate: 0.79, unit: "Ton/Ton" },
  { id: 11, factory: 1, product: "ZA", raw_material: "Cooling Water", consumption_rate: 0.32, unit: "m3/ton" },
  { id: 12, factory: 1, product: "ZA", raw_material: "Listrik", consumption_rate: 19.5, unit: "MWh/ton" },
  { id: 13, factory: 1, product: "ZA", raw_material: "Steam", consumption_rate: 189, unit: "Ton/Ton" },
  { id: 14, factory: 3, product: "Sulphuric Acid", raw_material: "Sulphur", consumption_rate: 0.33, unit: "Ton/Ton" },
  { id: 15, factory: 3, product: "Sulphuric Acid", raw_material: "Steam", consumption_rate: 85, unit: "Ton/Ton" },
  { id: 16, factory: 3, product: "Sulphuric Acid", raw_material: "Hard Water", consumption_rate: 2.5, unit: "m3/Ton" },
  { id: 17, factory: 3, product: "Sulphuric Acid", raw_material: "Air Demin", consumption_rate: 1.2, unit: "m3/Ton" },
  { id: 18, factory: 3, product: "Sulphuric Acid", raw_material: "Listrik", consumption_rate: 90, unit: "KWh/Ton" },
  {
    id: 19,
    factory: 3,
    product: "Phosphoric Acid",
    raw_material: "Sulphuric Acid",
    consumption_rate: 1.85,
    unit: "Ton/Ton",
  },
  {
    id: 20,
    factory: 3,
    product: "Phosphoric Acid",
    raw_material: "Phosphate Rock",
    consumption_rate: 3.9,
    unit: "Ton/Ton",
  },
  { id: 21, factory: 3, product: "Phosphoric Acid", raw_material: "Listrik", consumption_rate: 105, unit: "Ton/Ton" },
  { id: 22, factory: 3, product: "Phosphoric Acid", raw_material: "Steam", consumption_rate: 0.7, unit: "Ton/Ton" },
  { id: 23, factory: 3, product: "Phosphoric Acid", raw_material: "Hard Water", consumption_rate: 3, unit: "m3/Ton" },

  // NPK Chemical - NPK 15-10-12
  { id: 24, factory: 2, product: "NPK 15-10-12", raw_material: "Urea", consumption_rate: 0.001, unit: "Ton/Ton" },
  { id: 25, factory: 2, product: "NPK 15-10-12", raw_material: "ZA", consumption_rate: 0.27, unit: "Ton/Ton" },
  {
    id: 26,
    factory: 2,
    product: "NPK 15-10-12",
    raw_material: "Sulphuric Acid",
    consumption_rate: 0.25,
    unit: "Ton/Ton",
  },
  { id: 27, factory: 2, product: "NPK 15-10-12", raw_material: "KCl", consumption_rate: 0.21, unit: "Ton/Ton" },
  {
    id: 28,
    factory: 2,
    product: "NPK 15-10-12",
    raw_material: "Phosphoric Acid",
    consumption_rate: 0.23,
    unit: "Ton/Ton",
  },
  { id: 29, factory: 2, product: "NPK 15-10-12", raw_material: "Ammonia", consumption_rate: 0.12, unit: "Ton/Ton" },
  {
    id: 30,
    factory: 2,
    product: "NPK 15-10-12",
    raw_material: "Zink Sulphate",
    consumption_rate: 0.0001,
    unit: "Ton/Ton",
  },
  {
    id: 31,
    factory: 2,
    product: "NPK 15-10-12",
    raw_material: "Coating Oil",
    consumption_rate: 2.5,
    unit: "Liter/Ton",
  },
  {
    id: 32,
    factory: 2,
    product: "NPK 15-10-12",
    raw_material: "Coating Powder",
    consumption_rate: 1.5,
    unit: "kg/Ton",
  },
  { id: 33, factory: 2, product: "NPK 15-10-12", raw_material: "Steam", consumption_rate: 0.09, unit: "Ton/Ton" },
  { id: 34, factory: 2, product: "NPK 15-10-12", raw_material: "Hard Water", consumption_rate: 1.08, unit: "m3/Ton" },
  { id: 35, factory: 2, product: "NPK 15-10-12", raw_material: "Listrik", consumption_rate: 44.26, unit: "MWh/Ton" },
  { id: 36, factory: 2, product: "NPK 15-10-12", raw_material: "Gas", consumption_rate: 0.84, unit: "MMBTU/ton" },

  // NPK Chemical - NPK 15-15-15
  { id: 37, factory: 2, product: "NPK 15-15-15", raw_material: "Urea", consumption_rate: 0.03, unit: "Ton/Ton" },
  { id: 38, factory: 2, product: "NPK 15-15-15", raw_material: "ZA", consumption_rate: 0.13, unit: "Ton/Ton" },
  {
    id: 39,
    factory: 2,
    product: "NPK 15-15-15",
    raw_material: "Sulphuric Acid",
    consumption_rate: 0.2,
    unit: "Ton/Ton",
  },
  { id: 40, factory: 2, product: "NPK 15-15-15", raw_material: "KCl", consumption_rate: 0.255, unit: "Ton/Ton" },
  {
    id: 41,
    factory: 2,
    product: "NPK 15-15-15",
    raw_material: "Phosphoric Acid",
    consumption_rate: 0.285,
    unit: "Ton/Ton",
  },
  { id: 42, factory: 2, product: "NPK 15-15-15", raw_material: "Ammonia", consumption_rate: 0.137, unit: "Ton/Ton" },
  {
    id: 43,
    factory: 2,
    product: "NPK 15-15-15",
    raw_material: "Zink Sulphate",
    consumption_rate: 0.014,
    unit: "Ton/Ton",
  },
  {
    id: 44,
    factory: 2,
    product: "NPK 15-15-15",
    raw_material: "Coating Oil",
    consumption_rate: 2.5,
    unit: "Liter/Ton",
  },
  {
    id: 45,
    factory: 2,
    product: "NPK 15-15-15",
    raw_material: "Coating Powder",
    consumption_rate: 1.5,
    unit: "kg/Ton",
  },
  { id: 46, factory: 2, product: "NPK 15-15-15", raw_material: "Listrik", consumption_rate: 54, unit: "MWh/Ton" },
  { id: 47, factory: 2, product: "NPK 15-15-15", raw_material: "Gas", consumption_rate: 1.07, unit: "MMBTU/ton" },

  // NPK Chemical - NPS
  { id: 48, factory: 2, product: "NPS", raw_material: "Urea", consumption_rate: 0.04, unit: "Ton/Ton" },
  { id: 49, factory: 2, product: "NPS", raw_material: "ZA", consumption_rate: 0.25, unit: "Ton/Ton" },
  { id: 50, factory: 2, product: "NPS", raw_material: "Sulphuric Acid", consumption_rate: 0.24, unit: "Ton/Ton" },
  { id: 51, factory: 2, product: "NPS", raw_material: "Phosphoric Acid", consumption_rate: 0.38, unit: "Ton/Ton" },
  { id: 52, factory: 2, product: "NPS", raw_material: "Ammonia", consumption_rate: 0.17, unit: "Ton/Ton" },
  { id: 53, factory: 2, product: "NPS", raw_material: "Steam", consumption_rate: 0.01, unit: "Ton/Ton" },
  { id: 54, factory: 2, product: "NPS", raw_material: "Hard Water", consumption_rate: 1.53, unit: "m3/Ton" },
  { id: 55, factory: 2, product: "NPS", raw_material: "Listrik", consumption_rate: 80, unit: "MWh/Ton" },
  { id: 56, factory: 2, product: "NPS", raw_material: "Gas", consumption_rate: 1.07, unit: "MMBTU/ton" },

  // NPK Chemical - DAP
  { id: 57, factory: 2, product: "DAP", raw_material: "ZA", consumption_rate: 0.08, unit: "Ton/Ton" },
  { id: 58, factory: 2, product: "DAP", raw_material: "Sulphuric Acid", consumption_rate: 0.06, unit: "Ton/Ton" },
  { id: 59, factory: 2, product: "DAP", raw_material: "Phosphoric Acid", consumption_rate: 0.84, unit: "Ton/Ton" },
  { id: 60, factory: 2, product: "DAP", raw_material: "Ammonia", consumption_rate: 0.21, unit: "Ton/Ton" },
  { id: 61, factory: 2, product: "DAP", raw_material: "Steam", consumption_rate: 0.12, unit: "Ton/Ton" },
  { id: 62, factory: 2, product: "DAP", raw_material: "Hard Water", consumption_rate: 1.27, unit: "m3/Ton" },
  { id: 63, factory: 2, product: "DAP", raw_material: "Listrik", consumption_rate: 93.5, unit: "MWh/Ton" },
  { id: 64, factory: 2, product: "DAP", raw_material: "Gas", consumption_rate: 1.92, unit: "MMBTU/ton" },

  // NPK Chemical - SP36
  { id: 65, factory: 2, product: "SP36", raw_material: "Sulphuric Acid", consumption_rate: 0.15, unit: "Ton/Ton" },
  { id: 66, factory: 2, product: "SP36", raw_material: "Phosphoric Acid", consumption_rate: 0.4, unit: "Ton/Ton" },
  { id: 67, factory: 2, product: "SP36", raw_material: "Phosphate Rock", consumption_rate: 0.53, unit: "Ton/Ton" },
  { id: 68, factory: 2, product: "SP36", raw_material: "Coating Oil", consumption_rate: 0.145, unit: "Liter/Ton" },
  { id: 69, factory: 2, product: "SP36", raw_material: "Hard Water", consumption_rate: 2.51, unit: "m3/Ton" },
  { id: 70, factory: 2, product: "SP36", raw_material: "Listrik", consumption_rate: 118, unit: "MWh/Ton" },

  // NPK Chemical - SP20
  { id: 71, factory: 2, product: "SP20", raw_material: "Sulphuric Acid", consumption_rate: 0.03, unit: "Ton/Ton" },
  { id: 72, factory: 2, product: "SP20", raw_material: "Phosphoric Acid", consumption_rate: 0.08, unit: "Ton/Ton" },
  { id: 73, factory: 2, product: "SP20", raw_material: "Phosphate Rock", consumption_rate: 0.556, unit: "Ton/Ton" },
  { id: 74, factory: 2, product: "SP20", raw_material: "Phospogypsum", consumption_rate: 0.1, unit: "Ton/Ton" },
  { id: 75, factory: 2, product: "SP20", raw_material: "Clay", consumption_rate: 0.25, unit: "Ton/Ton" },

  // NPK Granulasi - NPK 15-15-15 Granulasi
  {
    id: 76,
    factory: 2,
    product: "NPK 15-15-15 Granulasi",
    raw_material: "Urea",
    consumption_rate: 0.2693,
    unit: "Ton/Ton",
  },
  {
    id: 77,
    factory: 2,
    product: "NPK 15-15-15 Granulasi",
    raw_material: "DAP Granul",
    consumption_rate: 0.1492,
    unit: "Ton/Ton",
  },
  {
    id: 78,
    factory: 2,
    product: "NPK 15-15-15 Granulasi",
    raw_material: "KCl",
    consumption_rate: 0.25,
    unit: "Ton/Ton",
  },
  {
    id: 79,
    factory: 2,
    product: "NPK 15-15-15 Granulasi",
    raw_material: "Bentonite",
    consumption_rate: 0.0301,
    unit: "Ton/Ton",
  },
  {
    id: 80,
    factory: 2,
    product: "NPK 15-15-15 Granulasi",
    raw_material: "Phosphate Rock",
    consumption_rate: 0.2712,
    unit: "Ton/Ton",
  },
  {
    id: 81,
    factory: 2,
    product: "NPK 15-15-15 Granulasi",
    raw_material: "Clay",
    consumption_rate: 0.0302,
    unit: "Ton/Ton",
  },
  {
    id: 82,
    factory: 2,
    product: "NPK 15-15-15 Granulasi",
    raw_material: "Hard Water",
    consumption_rate: 0.3213,
    unit: "m3/Ton",
  },
  {
    id: 83,
    factory: 2,
    product: "NPK 15-15-15 Granulasi",
    raw_material: "Listrik",
    consumption_rate: 28.608,
    unit: "MWh/Ton",
  },
  {
    id: 84,
    factory: 2,
    product: "NPK 15-15-15 Granulasi",
    raw_material: "Gas",
    consumption_rate: 0.2701,
    unit: "MMBTU/ton",
  },
]

const historyData: any[] = []

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const factory = searchParams.get("factory")
  const rawMaterial = searchParams.get("rawMaterial")
  const product = searchParams.get("product") // Added product parameter

  let filtered = [...mockData]

  if (factory) {
    filtered = filtered.filter((item) => item.factory === Number.parseInt(factory))
  }

  if (rawMaterial) {
    filtered = filtered.filter((item) => item.raw_material === rawMaterial)
  }

  if (product) {
    // Added product filter logic
    filtered = filtered.filter((item) => item.product === product)
  }

  const factories = [...new Set(mockData.map((item) => item.factory))].sort((a, b) => a - b)
  const rawMaterials = [...new Set(mockData.map((item) => item.raw_material))].sort()
  const products = [...new Set(mockData.map((item) => item.product))].sort() // Extract products list

  return NextResponse.json({
    data: filtered,
    factories,
    rawMaterials,
    products, // Return products list
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  // Update mock data
  const item = mockData.find((item) => item.id === body.id)
  if (item) {
    // Record history
    historyData.push({
      id: historyData.length + 1,
      consumption_rate_id: body.id,
      old_rate: item.consumption_rate,
      new_rate: body.consumption_rate,
      updated_at: new Date().toISOString(),
    })

    item.consumption_rate = body.consumption_rate
  }

  return NextResponse.json({ success: true })
}
