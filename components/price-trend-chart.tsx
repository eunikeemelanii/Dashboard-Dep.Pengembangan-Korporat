// components/price-trend-chart.tsx
"use client"

import { useState, useMemo } from "react"
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Area
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Download, FileText } from "lucide-react"
import * as XLSX from 'xlsx' // Import tanpa dynamic, langsung untuk client-side
import { format } from "date-fns"
import { usePriceTrends } from "@/hooks/use-price-trends"

const COLORS = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"]

// Warna cyan ala Chart.js untuk realisasi
const REALISASI_BORDER_COLOR = "rgba(75,192,192,1)"
const REALISASI_FILL_TOP_COLOR = "rgba(75,192,192,0.4)"
const REALISASI_FILL_BOTTOM_COLOR = "rgba(75,192,192,0.0)"

// Helper function untuk sanitize ID SVG (untuk gradient unique)
const sanitizeForId = (str: string): string => {
  return str.replace(/[^a-zA-Z0-9]/g, "").substring(0, 20)
}

// Helper function untuk convert date string ke timestamp (milliseconds)
const dateToTimestamp = (dateString: string): number => {
  return new Date(dateString).getTime()
}

// Helper untuk format tahun saja di XAxis
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

// Safe format function yang handle invalid dates
const safeFormat = (date: Date | undefined | null, formatStr: string): string => {
  if (!date || isNaN(date.getTime())) {
    return "N/A"
  }
  try {
    return format(date, formatStr)
  } catch (error) {
    console.warn("Error formatting date:", error, date)
    return "Invalid Date"
  }
}

// Helper untuk generate year ticks sebagai timestamps (1 Januari setiap tahun)
const generateYearTicks = (timestamps: number[], startYear?: number, endYear?: number): number[] => {
  if (timestamps.length === 0) return []
  const uniqueYears = [...new Set(timestamps.map(ts => new Date(ts).getFullYear()))].sort((a, b) => a - b)
  
  // Filter berdasarkan range tahun jika ada
  if (startYear && endYear) {
    return uniqueYears
      .filter(year => year >= startYear && year <= endYear)
      .map(year => new Date(year, 0, 1).getTime())
  }
  
  return uniqueYears.map(year => new Date(year, 0, 1).getTime())
}

// Deteksi realisasi
const isRealisasiKey = (name: string) => name.endsWith(" - Realisasi PG") || name.includes("Realisasi")

// Type untuk year range yang lebih safe
interface SafeYearRange {
  fromYear: number | null
  toYear: number | null
}

// Browser-safe function untuk download file
const downloadFile = (data: any, filename: string, mimeType: string) => {
  // Convert data to blob
  const blob = new Blob([data], { type: mimeType })
  
  // Create URL object
  const url = window.URL.createObjectURL(blob)
  
  // Create download link
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  
  // Trigger download
  document.body.appendChild(link)
  link.click()
  
  // Cleanup
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

// Fixed export function untuk browser (tanpa writeFile)
const exportToExcel = (
  filteredData: any[],
  materialsToDisplay: string[],
  yearRange: SafeYearRange,
  chartType: "line" | "bar"
) => {
  if (filteredData.length === 0 || materialsToDisplay.length === 0) {
    alert("No data available to export. Please select materials and/or year range.")
    return
  }

  try {
    // Buat data export dari filteredData yang sudah diproses seperti chartData
    const dataByTimestamp: Record<number, any> = {}
    
    filteredData.forEach(item => {
      const ts = dateToTimestamp(item.date)
      if (!dataByTimestamp[ts]) {
        dataByTimestamp[ts] = { 
          timestamp: ts,
          date: item.date, // Keep original date string for export
          formattedDate: safeFormat(new Date(item.date), 'MMM yyyy') // Human readable
        }
      }
      dataByTimestamp[ts][item.material] = item.price || 0
    })

    // Convert ke array, sort by timestamp, filter hanya materials yang dipilih
    let exportData = Object.values(dataByTimestamp).sort((a: any, b: any) => a.timestamp - b.timestamp)
    
    // Filter hanya columns yang dipilih
    exportData = exportData.map(row => {
      const filteredRow: any = { Date: row.formattedDate }
      materialsToDisplay.forEach(material => {
        filteredRow[material] = row[material] || 0
      })
      return filteredRow
    })

    // Buat headers dengan materials yang dipilih
    const headers = ['Date', ...materialsToDisplay]

    // Generate filename berdasarkan filter yang dipilih
    const getYearRangeText = () => {
      if (!yearRange.fromYear && !yearRange.toYear) return 'All_Years'
      if (yearRange.fromYear && yearRange.toYear) return `${yearRange.fromYear}-${yearRange.toYear}`
      if (yearRange.fromYear) return `From_${yearRange.fromYear}`
      if (yearRange.toYear) return `Until_${yearRange.toYear}`
      return 'All_Years'
    }

    const getMaterialsText = () => {
      if (materialsToDisplay.length === 0) return 'All'
      const shortNames = materialsToDisplay.slice(0, 3).map(m => 
        m.length > 10 ? m.substring(0, 7) + '...' : m.replace(/[^a-zA-Z0-9]/g, '_')
      ).join('_')
      if (materialsToDisplay.length > 3) return `${shortNames}_etc`
      return shortNames
    }

    const timestamp = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-')
    const filename = `Price_Trends_${getYearRangeText()}_${getMaterialsText()}_${chartType}_${timestamp}.xlsx`

    // Buat worksheet dari data
    const worksheet = XLSX.utils.json_to_sheet(exportData)
    
    // Set column widths
    const colWidths = [
      { wch: 12 }, // Date column
      ...materialsToDisplay.map(() => ({ wch: 18 })) // Material columns
    ]
    worksheet['!cols'] = colWidths

    // Format date column sebagai date
    const dateRange = XLSX.utils.decode_range(worksheet['!ref']!)
    for (let C = dateRange.s.c; C <= dateRange.e.c; ++C) {
      for (let R = dateRange.s.r + 1; R <= dateRange.e.r; ++R) {
        const cell_address = XLSX.utils.encode_cell({ c: C, r: R })
        if (!worksheet[cell_address]) continue
        
        // Format date column (column A)
        if (C === 0) {
          worksheet[cell_address].z = 'MMM YYYY' // Date format
          if (typeof worksheet[cell_address].v === 'string' && !isNaN(Date.parse(worksheet[cell_address].v))) {
            worksheet[cell_address].t = 'd' // Set as date type
            worksheet[cell_address].v = new Date(worksheet[cell_address].v)
          }
        }
        
        // Format number columns dengan 2 decimal places
        if (C > 0) {
          worksheet[cell_address].z = '#,##0.00 "USD"' // Currency format
          if (typeof worksheet[cell_address].v === 'number') {
            worksheet[cell_address].t = 'n'
          }
        }
      }
    }

    // Buat workbook dan append worksheet
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Price Trends")

    // Tambah summary sheet jika diperlukan
    if (materialsToDisplay.length > 0 && filteredData.length > 0) {
      const summaryData = materialsToDisplay.map(material => {
        const materialData = filteredData.filter(d => d.material === material)
        if (materialData.length === 0) return null
        
        const prices = materialData.map(d => d.price || 0).filter(p => p > 0)
        const avgPrice = prices.length > 0 ? (prices.reduce((a, b) => a + b, 0) / prices.length) : 0
        const minPrice = prices.length > 0 ? Math.min(...prices) : 0
        const maxPrice = prices.length > 0 ? Math.max(...prices) : 0
        const isRealisasi = isRealisasiKey(material)
        
        return {
          Material: material,
          Type: isRealisasi ? 'Actual (Realisasi)' : 'Forecast',
          'Data Points': materialData.length,
          'Avg Price (USD)': avgPrice.toFixed(2),
          'Min Price (USD)': minPrice.toFixed(2),
          'Max Price (USD)': maxPrice.toFixed(2),
          'Year Range': `${yearRange.fromYear || 'Min'} - ${yearRange.toYear || 'Max'}`
        }
      }).filter(Boolean)

      if (summaryData.length > 0) {
        const summaryWorksheet = XLSX.utils.json_to_sheet(summaryData)
        summaryWorksheet['!cols'] = [
          { wch: 25 }, // Material
          { wch: 15 }, // Type
          { wch: 12 }, // Data Points
          { wch: 16 }, // Avg Price
          { wch: 16 }, // Min Price
          { wch: 16 }, // Max Price
          { wch: 12 }  // Year Range
        ]
        
        // Format summary sheet
        const summaryRange = XLSX.utils.decode_range(summaryWorksheet['!ref']!)
        for (let C = summaryRange.s.c; C <= summaryRange.e.c; ++C) {
          for (let R = summaryRange.s.r + 1; R <= summaryRange.e.r; ++R) {
            const cell_address = XLSX.utils.encode_cell({ c: C, r: R })
            if (!summaryWorksheet[cell_address]) continue
            
            if (C >= 3 && C <= 5) { // Price columns
              summaryWorksheet[cell_address].z = '#,##0.00 "USD"'
            }
          }
        }

        XLSX.utils.book_append_sheet(workbook, summaryWorksheet, "Summary")
      }
    }

    // GENERATE FILE DATA UNTUK BROWSER (bukan writeFile)
    // Gunakan write dengan type 'base64' untuk browser compatibility
    const excelBuffer = XLSX.write(workbook, { 
      bookType: 'xlsx', 
      type: 'base64',
      compression: true 
    })

    // Decode base64 ke binary string
    const binaryString = atob(excelBuffer)
    const byteArray = new Uint8Array(binaryString.length)
    for (let i = 0; i < binaryString.length; i++) {
      byteArray[i] = binaryString.charCodeAt(i)
    }

    // Download file menggunakan browser API
    downloadFile(byteArray.buffer, filename, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')

    console.log(`Exported ${exportData.length} rows for ${materialsToDisplay.length} materials to ${filename}`)

  } catch (error) {
    console.error("Error exporting to Excel:", error)
    alert("Error generating Excel file. Please try again.")
  }
}

// Custom Year Range Picker (sama seperti sebelumnya)
const YearRangePicker = ({ 
  yearRange, 
  setYearRange 
}: { 
  yearRange: SafeYearRange, 
  setYearRange: (range: SafeYearRange) => void 
}) => {
  const startYear = 2015
  const endYear = 2025
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i)

  const handleFromYearChange = (value: string) => {
    const year = value ? parseInt(value) : null
    setYearRange({
      ...yearRange,
      fromYear: year
    })
  }

  const handleToYearChange = (value: string) => {
    const year = value ? parseInt(value) : null
    setYearRange({
      ...yearRange,
      toYear: year
    })
  }

  const handleReset = () => {
    setYearRange({ fromYear: null, toYear: null })
  }

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium">Filter Tahun</label>
      <div className="flex gap-2 items-center">
        <div className="flex-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date-from"
                variant={"outline"}
                size="sm"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Tahun Awal: {yearRange.fromYear || 'Pilih'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="flex flex-col space-y-2 p-3">
                <label className="text-sm font-medium">Tahun Awal</label>
                <select
                  value={yearRange.fromYear || ''}
                  onChange={(e) => handleFromYearChange(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Pilih tahun awal</option>
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <span className="text-muted-foreground">-</span>

        <div className="flex-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date-to"
                variant={"outline"}
                size="sm"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Tahun Akhir: {yearRange.toYear || 'Pilih'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="flex flex-col space-y-2 p-3">
                <label className="text-sm font-medium">Tahun Akhir</label>
                <select
                  value={yearRange.toYear || ''}
                  onChange={(e) => handleToYearChange(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Pilih tahun akhir</option>
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Tombol reset jika ada range yang dipilih */}
        {(yearRange.fromYear || yearRange.toYear) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="h-10 w-10 p-0"
            title="Reset filter tahun"
          >
            ×
          </Button>
        )}
      </div>
      
      {/* Display current range */}
      {(yearRange.fromYear && yearRange.toYear) && (
        <div className="text-xs text-muted-foreground mt-1">
          Menampilkan data dari {yearRange.fromYear} hingga {yearRange.toYear}
        </div>
      )}
    </div>
  )
}

export function PriceTrendChart() {
  const { data, materials, isLoading } = usePriceTrends()
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [chartType, setChartType] = useState<"line" | "bar">("line")
  const [yearRange, setYearRange] = useState<SafeYearRange>({ fromYear: null, toYear: null })
  const [isExporting, setIsExporting] = useState(false)

  const materialsToDisplay = useMemo(() => {
    if (selectedMaterials.length === 0 && materials.length > 0) {
      return materials.slice(0, 3)
    }
    return selectedMaterials
  }, [selectedMaterials, materials])

  // Filter data berdasarkan range tahun dengan validasi yang lebih ketat
  const filteredData = useMemo(() => {
    if (!data || data.length === 0) return []
    
    // Jika tidak ada range atau salah satu kosong, return semua data
    if (!yearRange.fromYear || !yearRange.toYear) {
      return data
    }

    // Validasi range (tahun akhir harus >= tahun awal)
    if (yearRange.toYear < yearRange.fromYear) {
      console.warn("Invalid year range: toYear < fromYear")
      return data // Fallback ke semua data
    }
    
    return data.filter(item => {
      const itemDate = new Date(item.date)
      const itemYear = itemDate.getFullYear()
      
      // Skip jika date invalid
      if (isNaN(itemDate.getTime())) {
        console.warn("Invalid date in data:", item.date)
        return false
      }
      
      return itemYear >= yearRange.fromYear && itemYear <= yearRange.toYear
    })
  }, [data, yearRange])

  // Extract semua timestamps dari filtered data
  const allTimestamps = useMemo(() => {
    if (!filteredData || filteredData.length === 0) return []
    return filteredData.map(d => dateToTimestamp(d.date))
  }, [filteredData])

  // Generate year ticks dari filtered timestamps dan range
  const yearTicks = useMemo(() => 
    generateYearTicks(allTimestamps, yearRange.fromYear, yearRange.toYear), 
    [allTimestamps, yearRange]
  )

  const chartData = useMemo(() => {
    if (!filteredData || filteredData.length === 0) return []

    // Group data by timestamp untuk menghindari duplicate dates
    const dataByTimestamp: Record<number, any> = {}
    
    filteredData.forEach(item => {
      const ts = dateToTimestamp(item.date)
      if (!dataByTimestamp[ts]) {
        dataByTimestamp[ts] = { timestamp: ts }
      }
      dataByTimestamp[ts][item.material] = item.price || 0
    })

    // Convert ke array, sort by timestamp
    const sortedData = Object.values(dataByTimestamp).sort((a: any, b: any) => a.timestamp - b.timestamp)

    return sortedData
  }, [filteredData, materialsToDisplay])

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]
    )
  }

  // Handler untuk export Excel (browser-safe)
  const handleExportExcel = () => {
    if (isExporting) return
    
    setIsExporting(true)
    try {
      exportToExcel(filteredData, materialsToDisplay, yearRange, chartType)
    } finally {
      setIsExporting(false)
    }
  }

  // Custom Legend - filter area fills, hanya tampilkan line series
  const renderLegend = (props: any) => {
    const { payload } = props
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
          <CardDescription>
            {yearRange.fromYear && yearRange.toYear 
              ? `No data found for ${yearRange.fromYear}-${yearRange.toYear}. Try adjusting the year range or check your data source.`
              : "Check your API connection or data source."
            }
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }

  // Check apakah ada data untuk export
  const hasDataForExport = filteredData.length > 0 && materialsToDisplay.length > 0

  return (
    <Card className="w-full">
      <CardHeader className="space-y-4">
        <div className="space-y-2">
          <CardTitle>Global Raw Material Price Trends</CardTitle>
          <CardDescription>Track monthly price movements with yearly axis markers and gradient fills</CardDescription>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          {/* Year Range Picker */}
          <div className="flex-1 min-w-0">
            <YearRangePicker yearRange={yearRange} setYearRange={setYearRange} />
          </div>

          <div className="space-y-2 flex-1 min-w-0">
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

          <div className="space-y-2 w-fit flex flex-col gap-2">
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

            {/* Export Button - Fixed untuk browser */}
            <Button
              onClick={handleExportExcel}
              disabled={!hasDataForExport || isExporting}
              variant={hasDataForExport ? "default" : "outline"}
              size="sm"
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              {isExporting ? (
                <>
                  <FileText className="h-4 w-4 animate-spin" />
                  Exporting...
                </>
              ) : (
                "Export Excel"
              )}
              {!hasDataForExport && <span className="text-xs text-destructive ml-1">(No data)</span>}
            </Button>
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
                  domain={chartData.length > 0 ? [chartData[0]?.timestamp, chartData[chartData.length - 1]?.timestamp] : [0, 1]}
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
                      name={material}
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

                {/* 3. Render AREA FILL dengan gradient unik */}
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
                        fill={`url(#${gradientId})`}
                        isAnimationActive={true}
                        animationDuration={800}
                        animationBegin={300}
                        name={`${material} Fill`}
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
                  domain={chartData.length > 0 ? [chartData[0]?.timestamp, chartData[chartData.length - 1]?.timestamp] : [0, 1]}
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

        {/* Stats Summary menggunakan filteredData */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
          {materialsToDisplay.map((material, idx) => {
            const materialData = filteredData.filter((d) => d.material === material)
            const latestPrice = materialData[materialData.length - 1]?.price || 0
            const previousPrice = materialData[materialData.length - 2]?.price || latestPrice
            const change = previousPrice === 0 ? 0 : ((latestPrice - previousPrice) / previousPrice) * 100
            const isRealisasi = isRealisasiKey(material)
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
                  <p className="text-lg font-bold text-card-foreground">
                    ${latestPrice.toFixed(2)}
                    {materialData.length === 0 && <span className="text-xs text-muted-foreground ml-1">(No data)</span>}
                  </p>
                  {materialData.length > 1 && (
                    <p className={`text-xs font-medium flex items-center gap-1 ${
                      change >= 0 ? "text-emerald-600" : "text-red-600"
                    }`}>
                      <span>{change >= 0 ? "↑" : "↓"}</span>
                      {Math.abs(change).toFixed(1)}% vs prev
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Export Info */}
        {hasDataForExport && (
          <div className="mt-4 p-3 bg-muted rounded-md text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4 text-muted-foreground" />
              <span>Ready to export: {filteredData.length} data points for {materialsToDisplay.length} materials</span>
              {yearRange.fromYear && yearRange.toYear && (
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {yearRange.fromYear}-{yearRange.toYear}
                </span>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
