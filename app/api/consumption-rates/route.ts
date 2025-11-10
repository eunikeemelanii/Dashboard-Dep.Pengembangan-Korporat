import { type NextRequest, NextResponse } from "next/server"

// Mock database - in production, use a real database
const mockData = [
  { id: 1, factory: 1, product: "Ammonia", raw_material: "Gas Bumi", consumption_rate: 31.5, unit: "MMBTU/Ton" },
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
  { id: 24, factory: 2, product: "NPK 15-10-12", raw_material: "Urea", consumption_rate: 1, unit: "Ton/Ton" },
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
  { id: 30, factory: 2, product: "NPK 15-10-12", raw_material: "Zink Sulphate", consumption_rate: 1, unit: "Ton/Ton" },
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
]

const historyData: any[] = []

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const factory = searchParams.get("factory")
  const rawMaterial = searchParams.get("rawMaterial")

  let filtered = [...mockData]

  if (factory) {
    filtered = filtered.filter((item) => item.factory === Number.parseInt(factory))
  }

  if (rawMaterial) {
    filtered = filtered.filter((item) => item.raw_material === rawMaterial)
  }

  const factories = [...new Set(mockData.map((item) => item.factory))].sort()
  const rawMaterials = [...new Set(mockData.map((item) => item.raw_material))].sort()

  return NextResponse.json({
    data: filtered,
    factories,
    rawMaterials,
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
