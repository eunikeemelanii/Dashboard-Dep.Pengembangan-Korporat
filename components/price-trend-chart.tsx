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

// Warna cyan ala Chart.js untuk realisasi
const REALISASI_BORDER_COLOR = "rgba(75,192,192,1)"
const REALISASI_FILL_TOP_COLOR = "rgba(75,192,192,0.4)" // Atas gradient (semi-transparan)
const REALISASI_FILL_BOTTOM_COLOR = "rgba(75,192,192,0.0)" // Bawah gradient (transparan)

// Helper function untuk sanitize ID SVG (untuk gradient unique)
const sanitizeForId = (str: string): string => {
  return str.replace(/[^a-zA-Z0-9]/g, "").substring(0, 20)
}

// Helper function untuk convert date string ke timestamp (milliseconds)
const dateToTimestamp = (dateString: string): number => {
  return new Date(dateString).getTime()
}

// Helper function untuk format tahun saja di XAxis
const formatYearOnly = (timestamp: number): string => {
  const date = new Date(timestamp)
  return date.getFullYear().toString()
}

// Helper untuk format YYYY-MM untuk tooltip
const formatYearMonth = (timestamp: number): string => {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  return `${year}-${month}`
}

// Helper untuk generate year ticks sebagai timestamps (1 Januari setiap tahun)
const generateYearTicks = (timestamps: number[]): number[] => {
  if (timestamps.length === 0) return []
  const uniqueYears = [...new Set(timestamps.map(ts => new Date(ts).getFullYear()))].sort((a, b) => a - b)
  return uniqueYears.map(year => new Date(year, 0, 1).getTime())
}

// Deteksi realisasi
const isRealisasiKey = (name: string) => name.endsWith(" - Realisasi PG") || name.includes("Realisasi")

export function PriceTrendChart() {
  const { data, materials, isLoading } = usePriceTrends()
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [chartType, setChartType] = useState<"line" | "bar">("line")

  const materialsToDisplay = useMemo(() => {
    if (selectedMaterials.length === 0 && materials.length > 0) {
      return materials.slice(0, 3)
    }
    return selectedMaterials
  }, [selectedMaterials, materials])

  // Extract semua timestamps dari data
  const allTimestamps = useMemo(() => {
    if (!data || data.length === 0) return []
    return data.map(d => dateToTimestamp(d.date))
  }, [data])

  // Generate year ticks dari timestamps
  const yearTicks = useMemo(() => generateYearTicks(allTimestamps), [allTimestamps])

  const chartData = useMemo(() => {
    if (!data || data.length === 0) return []

    // Group data by timestamp untuk menghindari duplicate dates
    const dataByTimestamp: Record<number, any> = {}
    
    data.forEach(item => {
      const ts = dateToTimestamp(item.date)
      if (!dataByTimestamp[ts]) {
        dataByTimestamp[ts] = { timestamp: ts }
      }
      dataByTimestamp[ts][item.material] = item.price || 0
    })

    // Convert ke array, sort by timestamp
    const sortedData = Object.values(dataByTimestamp).sort((a: any, b: any) => a.timestamp - b.timestamp)

    // Debug logs
    console.log("All Timestamps (monthly points):", sortedData.length, "points")
    console.log("Year Ticks (timestamps):", yearTicks.map(ts => new Date(ts).getFullYear()))
    console.log("Data range:", new Date(sortedData[0]?.timestamp), "to", new Date(sortedData[sortedData.length - 1]?.timestamp))
    console.log("Realisasi materials:", materialsToDisplay.filter(isRealisasiKey))
    console.log("Sample data:", sortedData.slice(0, 3))

    return sortedData
  }, [data, materialsToDisplay])

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]
    )
  }

  // Custom Legend - filter area fills, hanya tampilkan line series
  const renderLegend = (props: any) => {
    const { payload } = props
    // Filter hanya legend entries yang bukan "Fill" (area)
    const linePayload = payload.filter((entry: any) => !entry.value.toString().includes('Fill'))
    
    return (
      <ul className="flex flex-wrap gap-2 p-2 bg-background rounded-md">
        {linePayload.map((entry: any, index: number) => {
          const isRealisasi = isRealisasiKey(entry.value)
          const color = isRealisasi ? REALISASI_BORDER_COLOR : entry.color
          return (
            <li key={entry.dataKey} className="flex items-center gap-1">
              <div 
                className="w-4 h-1 rounded-full border-2" 
                style={{ 
                  backgroundColor: isRealisasi ? REALISASI_FILL_TOP_COLOR : 'transparent',
                  borderColor: color
                }}
              />
              <span className="text-xs text-foreground max-w-32 truncate">{entry.value}</span>
            </li>
          )
        })}
      </ul>
    )
  }

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Loading Chart Data...</CardTitle>
        </CardHeader>
      </Card>
    )
  }

  if (chartData.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>No Data Available</CardTitle>
          <CardDescription>Check your API connection or data source.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader className="space-y-4">
        <div className="space-y-2">
          <CardTitle>Global Raw Material Price Trends</CardTitle>
          <CardDescription>Track monthly price movements with yearly axis markers and gradient fills</CardDescription>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <label className="text-sm font-medium">Materials to Display</label>
            <div className="flex flex-wrap gap-2 max-w-full overflow-x-auto pb-2">
              {materials.map((material) => {
                const isRealisasi = isRealisasiKey(material)
                return (
                  <Button
                    key={material}
                    variant={materialsToDisplay.includes(material) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleMaterial(material)}
                    className={`text-xs whitespace-nowrap ${isRealisasi ? 'border-cyan-500 text-cyan-700' : ''}`}
                    title={material}
                  >
                    {material.length > 20 ? `${material.substring(0, 17)}...` : material}
                    {isRealisasi && <span className="ml-1 text-xs bg-cyan-100 text-cyan-800 px-1 py-0.5 rounded">R</span>}
                  </Button>
                )
              })}
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
                Line (Gradient Fill)
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
              <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis 
                  dataKey="timestamp"
                  type="number"
                  ticks={yearTicks}
                  tickFormatter={formatYearOnly}
                  stroke="rgba(0,0,0,0.5)" 
                  angle={0}
                  textAnchor="middle"
                  height={60}
                  interval={0}
                  tick={{ fontSize: 12, fontWeight: 'bold' }}
                  domain={[chartData[0]?.timestamp, chartData[chartData.length - 1]?.timestamp]}
                  scale="time"
                />
                <YAxis 
                  stroke="rgba(0,0,0,0.5)" 
                  domain={['dataMin', 'dataMax']}
                  allowDecimals={false}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  labelFormatter={(label) => formatYearMonth(label as number)}
                  cursor={{ strokeDasharray: '3 3' }}
                  formatter={(value, name, props) => [value, name]}
                />
                <Legend content={renderLegend} wrapperStyle={{ padding: '10px' }} />

                {/* 1. Render LINES dulu untuk semua materials */}
                {materialsToDisplay.map((material, idx) => {
                  const isRealisasi = isRealisasiKey(material)
                  const lineColor = isRealisasi ? REALISASI_BORDER_COLOR : COLORS[idx % COLORS.length]
                  
                  return (
                    <Line
                      key={`line-${material}`}
                      type="monotone"
                      dataKey={material}
                      stroke={lineColor}
                      strokeWidth={isRealisasi ? 3 : 2.5}
                      dot={false}
                      isAnimationActive={true}
                      animationDuration={800}
                      animationBegin={100}
                      name={material} // Nama asli untuk legend (tanpa suffix)
                      connectNulls={false}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )
                })}

                {/* 2. Definisi Gradient unik untuk setiap realisasi material */}
                <defs>
                  {materialsToDisplay
                    .filter((material) => isRealisasiKey(material))
                    .map((material) => {
                      const gradientId = `gradient-${sanitizeForId(material)}`
                      return (
                        <linearGradient
                          id={gradientId}
                          key={gradientId}
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          {/* Gradient dari atas (semi-transparan) ke bawah (transparan) */}
                          <stop 
                            offset="0%" 
                            stopColor={REALISASI_BORDER_COLOR.replace('1)', '0.4)')}
                            stopOpacity={0.4}
                          />
                          <stop 
                            offset="100%" 
                            stopColor={REALISASI_BORDER_COLOR.replace('1)', '0.0)')}
                            stopOpacity={0}
                          />
                        </linearGradient>
                      )
                    })}
                </defs>

                {/* 3. Render AREA FILL dengan gradient unik - nama beda untuk hindari duplikat legend */}
                {materialsToDisplay
                  .filter((material) => isRealisasiKey(material))
                  .map((material, idx) => {
                    const gradientId = `gradient-${sanitizeForId(material)}`
                    return (
                      <Area
                        key={`area-${material}`}
                        type="monotone"
                        dataKey={material}
                        stroke="none"
                        fill={`url(#${gradientId})`} // Reference ke gradient unik
                        isAnimationActive={true}
                        animationDuration={800}
                        animationBegin={300}
                        name={`${material} Fill`} // Nama unik dengan suffix "Fill"
                        baseLine={0}
                        connectNulls={false}
                        dot={false}
                        activeDot={false}
                      />
                    )
                  })}

              </LineChart>
            ) : (
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis 
                  dataKey="timestamp"
                  type="number"
                  ticks={yearTicks}
                  tickFormatter={formatYearOnly}
                  stroke="rgba(0,0,0,0.5)" 
                  angle={0}
                  textAnchor="middle"
                  height={60}
                  interval={0}
                  tick={{ fontSize: 12, fontWeight: 'bold' }}
                  domain={[chartData[0]?.timestamp, chartData[chartData.length - 1]?.timestamp]}
                  scale="time"
                />
                <YAxis stroke="rgba(0,0,0,0.5)" />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  labelFormatter={(label) => formatYearMonth(label as number)}
                />
                <Legend content={renderLegend} />
                {materialsToDisplay.map((material, idx) => {
                  const isRealisasi = isRealisasiKey(material)
                  const barColor = isRealisasi ? REALISASI_BORDER_COLOR : COLORS[idx % COLORS.length]
                  return (
                    <Bar 
                      key={material} 
                      dataKey={material} 
                      fill={barColor}
                      radius={[4, 4, 0, 0]}
                      name={material}
                    />
                  )
                })}
              </BarChart>
            )}
          </ResponsiveContainer>
        </ChartContainer>

        {/* Stats Summary dengan enhanced visual untuk realisasi */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
          {materialsToDisplay.map((material, idx) => {
            const isRealisasi = isRealisasiKey(material)
            const materialData = data.filter((d) => d.material === material)
            const latestPrice = materialData[materialData.length - 1]?.price || 0
            const previousPrice = materialData[materialData.length - 2]?.price || latestPrice
            const change = previousPrice === 0 ? 0 : ((latestPrice - previousPrice) / previousPrice) * 100
            const colorClass = isRealisasi 
              ? 'from-cyan-500 to-cyan-600 bg-gradient-to-r shadow-lg shadow-cyan-500/25 border-cyan-500' 
              : 'from-muted to-muted/80'

            return (
              <div 
                key={material} 
                className={`space-y-2 rounded-xl border p-4 transition-all hover:shadow-md ${colorClass}`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-muted-foreground line-clamp-2 flex-1">
                    {material}
                  </p>
                  {isRealisasi && (
                    <span className="ml-2 text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full font-semibold">
                      Actual
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-card-foreground">${latestPrice.toFixed(2)}</p>
                  <p className={`text-xs font-medium flex items-center gap-1 ${
                    change >= 0 ? "text-emerald-600" : "text-red-600"
                  }`}>
                    <span>{change >= 0 ? "↑" : "↓"}</span>
                    {Math.abs(change).toFixed(1)}% vs prev
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
