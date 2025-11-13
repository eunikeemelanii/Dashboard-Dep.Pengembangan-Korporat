// components/price-trend-chart.tsx
"use client"

import { useState, useMemo } from "react"
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Area
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { usePriceTrends } from "@/hooks/use-price-trends"

const COLORS = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"]

export function PriceTrendChart() {
  const { data, materials, isLoading } = usePriceTrends()

  // SUGGESTION: jika API sudah mengirim source, kamu bisa derive daftar realisasi di sini
  const isRealisasiKey = (name: string) => name.endsWith(" - Realisasi PG")

  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [chartType, setChartType] = useState<"line" | "bar">("line")

  const materialsToDisplay = useMemo(() => {
    if (selectedMaterials.length === 0 && materials.length > 0) {
      return materials.slice(0, 3)
    }
    return selectedMaterials
  }, [selectedMaterials, materials])

  const chartData = useMemo(() => {
    if (!data || data.length === 0) return []

    const dates = [...new Set(data.map((d) => d.date))].sort()
    return dates.map((date) => {
      const entry: Record<string, any> = { date }
      materialsToDisplay.forEach((material) => {
        // cocokkan material tepat, karena label realisasi sudah unik
        const found = data.find((d) => d.date === date && d.material === material)
        if (found) entry[material] = found.price
      })
      return entry
    })
  }, [data, materialsToDisplay])

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]
    )
  }

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Loading...</CardTitle>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader className="space-y-4">
        <div className="space-y-2">
          <CardTitle>Global Raw Material Price Trends</CardTitle>
          <CardDescription>Track price movements and volatility of key production materials</CardDescription>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <label className="text-sm font-medium">Materials to Display</label>
            <div className="flex flex-wrap gap-2">
              {materials.map((material) => (
                <Button
                  key={material}
                  variant={materialsToDisplay.includes(material) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleMaterial(material)}
                  className="text-xs"
                >
                  {material}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Chart Type</label>
            <div className="flex gap-2">
              <Button
                variant={chartType === "line" ? "default" : "outline"}
                size="sm"
                onClick={() => setChartType("line")}
              >
                Line
              </Button>
              <Button
                variant={chartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setChartType("bar")}
              >
                Bar
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={{
            price: { label: "Price (USD/Unit)", color: "hsl(var(--chart-1))" },
          }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "line" ? (
              <LineChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="date" stroke="rgba(0,0,0,0.5)" />
                <YAxis stroke="rgba(0,0,0,0.5)" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />

                {/* Definisi gradient sekali; bisa dipakai ulang oleh semua seri realisasi */}
                <defs>
                  <linearGradient id="realisasiGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0.05} />
                  </linearGradient>
                </defs>

                {/* Garis untuk semua seri */}
                {materialsToDisplay.map((material, idx) => (
                  <Line
                    key={`line-${material}`}
                    type="monotone"
                    dataKey={material}
                    stroke={COLORS[idx % COLORS.length]}
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                  />
                ))}

                {/* Fill area hanya untuk seri realisasi */}
                {materialsToDisplay
                  .filter((m) => isRealisasiKey(m))
                  .map((material, idx) => (
                    <Area
                      key={`area-${material}`}
                      type="monotone"
                      dataKey={material}
                      stroke="none"
                      fill="url(#realisasiGradient)"
                      isAnimationActive={false}
                    />
                  ))}
              </LineChart>
            ) : (
              <BarChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="date" stroke="rgba(0,0,0,0.5)" />
                <YAxis stroke="rgba(0,0,0,0.5)" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                {materialsToDisplay.map((material, idx) => (
                  <Bar key={material} dataKey={material} fill={COLORS[idx % COLORS.length]} />
                ))}
              </BarChart>
            )}
          </ResponsiveContainer>
        </ChartContainer>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
          {materialsToDisplay.map((material) => {
            const materialData = data.filter((d) => d.material === material)
            const latestPrice = materialData[materialData.length - 1]?.price || 0
            const previousPrice = materialData[materialData.length - 2]?.price || latestPrice
            const change = previousPrice === 0 ? 0 : ((latestPrice - previousPrice) / previousPrice) * 100

            return (
              <div key={material} className="space-y-1 rounded-lg bg-muted p-3">
                <p className="text-xs font-medium text-muted-foreground">{material}</p>
                <p className="text-lg font-bold">${latestPrice.toFixed(2)}</p>
                <p className={`text-xs font-medium ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {change >= 0 ? "+" : ""}
                  {change.toFixed(2)}%
                </p>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
