import { type NextRequest, NextResponse } from "next/server"

// Mock history data
const historyData: any[] = []

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  // In production, fetch from database
  const filteredHistory = historyData.filter((item) => item.consumption_rate_id === Number.parseInt(id))

  return NextResponse.json({
    history: filteredHistory,
  })
}
