"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface PriceRankingData {
  col: string
  avg_price: number
  base: string
  material: string
  region: string
  type: string
  rank_within_material: number
  material_group: string
  material_clean: string
  rank_within_material_clean: number
}

const COUNTRY_FLAGS: Record<string, string> = {
  China: "🇨🇳",
  Indonesia: "🇮🇩",
  "Southeast Asia": "🌏",
  India: "🇮🇳",
  Jordan: "🇯🇴",
  Moroco: "🇲🇦",
  Morocco: "🇲🇦",
  "Middle East": "🌍",
  "ex Middle East": "🌍",
  Vancouver: "🇨🇦",
  "Baltic ": "🇪🇺",
  Baltic: "🇪🇺",
  "Japan/South Korea": "🇯🇵",
  Japan: "🇯🇵",
  "South Korea": "🇰🇷",
}

const priceData: PriceRankingData[] = [
  {
    col: "Ammonia Southeast Asia FOB",
    avg_price: 334.6818181818182,
    base: "Ammonia Southeast Asia",
    material: "Ammonia Southeast",
    region: "Southeast Asia",
    type: "FOB",
    rank_within_material: 1,
    material_group: "Ammonia Southeast",
    material_clean: "Ammonia",
    rank_within_material_clean: 1,
  },
  {
    col: "Ammonia Southeast Asia CFR",
    avg_price: 364.6818181818182,
    base: "Ammonia Southeast Asia",
    material: "Ammonia Southeast",
    region: "Southeast Asia",
    type: "CFR",
    rank_within_material: 2,
    material_group: "Ammonia Southeast",
    material_clean: "Ammonia",
    rank_within_material_clean: 2,
  },
  {
    col: "NPKs Baltic Sea 15-15-15 FOB",
    avg_price: 388.34090909090907,
    base: "NPKs Baltic Sea 15-15-15",
    material: "NPKs Baltic",
    region: "Baltic ",
    type: "FOB",
    rank_within_material: 1,
    material_group: "NPKs Baltic",
    material_clean: "NPKs 15-15-15",
    rank_within_material_clean: 1,
  },
  {
    col: "NPKs India 20-20-0-13 CFR",
    avg_price: 437.09090909090907,
    base: "NPKs India 20-20-0-13",
    material: "NPKs India",
    region: "India",
    type: "CFR",
    rank_within_material: 1,
    material_group: "NPKs India",
    material_clean: "NPKs 20-20",
    rank_within_material_clean: 1,
  },
  {
    col: "PA India CFR",
    avg_price: 1170.6363636363637,
    base: "PA India",
    material: "PA India",
    region: "India",
    type: "CFR",
    rank_within_material: 1,
    material_group: "PA India",
    material_clean: "PA",
    rank_within_material_clean: 1,
  },
  {
    col: "PR Jordan (66-72% BPL) FOB",
    avg_price: 155.0,
    base: "PR Jordan (66-72% BPL)",
    material: "PR Jordan",
    region: "Jordan",
    type: "FOB",
    rank_within_material: 1,
    material_group: "PR Jordan",
    material_clean: "PR (66-72% BPL)",
    rank_within_material_clean: 1,
  },
  {
    col: "PR Moroco (68-72% BPL) FOB",
    avg_price: 212.1590909090909,
    base: "PR Moroco (68-72% BPL)",
    material: "PR Moroco",
    region: "Moroco",
    type: "FOB",
    rank_within_material: 1,
    material_group: "PR Moroco",
    material_clean: "PR (68-72% BPL)",
    rank_within_material_clean: 2,
  },
  {
    col: "PR Jordan (73-75% BPL) FOB",
    avg_price: 235.0,
    base: "PR Jordan (73-75% BPL)",
    material: "PR Jordan",
    region: "Jordan",
    type: "FOB",
    rank_within_material: 2,
    material_group: "PR Jordan",
    material_clean: "PR  (73-75% BPL)",
    rank_within_material_clean: 3,
  },
  {
    col: "Potash Standard Vancouver FOB",
    avg_price: 300.1818181818182,
    base: "Potash Standard Vancouver",
    material: "Potash Standard",
    region: "Vancouver",
    type: "FOB",
    rank_within_material: 1,
    material_group: "Potash Standard",
    material_clean: "Potash Standard",
    rank_within_material_clean: 1,
  },
  {
    col: "Potash Standard Southeast Asia CFR",
    avg_price: 343.8863636363636,
    base: "Potash Standard Southeast Asia",
    material: "Potash Standard",
    region: "Southeast Asia",
    type: "CFR",
    rank_within_material: 2,
    material_group: "Potash Standard",
    material_clean: "Potash Standard",
    rank_within_material_clean: 2,
  },
  {
    col: "Sulphur Middle East FOB",
    avg_price: 266.1818181818182,
    base: "Sulphur Middle East",
    material: "Sulphur Middle",
    region: "Middle East",
    type: "FOB",
    rank_within_material: 1,
    material_group: "Sulphur Middle",
    material_clean: "Sulphur",
    rank_within_material_clean: 1,
  },
  {
    col: "Sulphur India ex Middle East CFR",
    avg_price: 279.3863636363636,
    base: "Sulphur India ex Middle East",
    material: "Sulphur India",
    region: "India ex Middle East",
    type: "CFR",
    rank_within_material: 1,
    material_group: "Sulphur India",
    material_clean: "Sulphur",
    rank_within_material_clean: 2,
  },
  {
    col: "Sulphur Indonesia CFR",
    avg_price: 283.0681818181818,
    base: "Sulphur Indonesia",
    material: "Sulphur Indonesia",
    region: "Indonesia",
    type: "CFR",
    rank_within_material: 1,
    material_group: "Sulphur Indonesia",
    material_clean: "Sulphur",
    rank_within_material_clean: 3,
  },
  {
    col: "Sulphuric Acid Japan/South Korea FOB",
    avg_price: 38.111111111111114,
    base: "Sulphuric Acid Japan/South Korea",
    material: "Sulphuric Acid",
    region: "Japan/South Korea",
    type: "FOB",
    rank_within_material: 1,
    material_group: "Sulphuric Acid",
    material_clean: "Sulphuric Acid",
    rank_within_material_clean: 1,
  },
  {
    col: "Urea China FOB",
    avg_price: 395.7692307692308,
    base: "Urea China",
    material: "Urea China",
    region: "China",
    type: "FOB",
    rank_within_material: 1,
    material_group: "Urea China",
    material_clean: "Urea",
    rank_within_material_clean: 1,
  },
  {
    col: "Urea Indonesia FOB",
    avg_price: 401.5681818181818,
    base: "Urea Indonesia",
    material: "Urea Indonesia",
    region: "Indonesia",
    type: "FOB",
    rank_within_material: 1,
    material_group: "Urea Indonesia",
    material_clean: "Urea",
    rank_within_material_clean: 2,
  },
  {
    col: "Urea Southeast Asia CFR",
    avg_price: 430.8181818181818,
    base: "Urea Southeast Asia",
    material: "Urea Southeast",
    region: "Southeast Asia",
    type: "CFR",
    rank_within_material: 1,
    material_group: "Urea Southeast",
    material_clean: "Urea",
    rank_within_material_clean: 3,
  },
  {
    col: "ZA Granular China FOB",
    avg_price: 166.70454545454547,
    base: "ZA Granular China",
    material: "ZA Granular",
    region: "China",
    type: "FOB",
    rank_within_material: 1,
    material_group: "ZA Granular",
    material_clean: "ZA",
    rank_within_material_clean: 1,
  },
  {
    col: "ZA Standard Southeast Asia CFR",
    avg_price: 176.5909090909091,
    base: "ZA Standard Southeast Asia",
    material: "ZA Standard",
    region: "Southeast Asia",
    type: "CFR",
    rank_within_material: 1,
    material_group: "ZA Standard",
    material_clean: "ZA",
    rank_within_material_clean: 2,
  },
]

// Get flag emoji for region
function getFlag(region: string): string {
  for (const [key, flag] of Object.entries(COUNTRY_FLAGS)) {
    if (region.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(region.toLowerCase())) {
      return flag
    }
  }
  return "🌍"
}

export function PriceRankingCard() {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>("all")

  const uniqueMaterials = Array.from(new Set(priceData.map((item) => item.material_clean))).sort()

  const filteredData =
    selectedMaterial !== "all" ? priceData.filter((item) => item.material_clean === selectedMaterial) : priceData

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filter by Material</CardTitle>
        </CardHeader>
        <CardContent className="flex items-end gap-3">
          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">Select Material</label>
            <Select value={selectedMaterial} onValueChange={(value) => setSelectedMaterial(value)}>
              <SelectTrigger>
                <SelectValue placeholder="All Materials" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Materials</SelectItem>
                {uniqueMaterials.map((material) => (
                  <SelectItem key={material} value={material}>
                    {material}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" onClick={() => setSelectedMaterial("all")} className="px-6">
            Clear
          </Button>
        </CardContent>
      </Card>

      {/* Overall Price Ranking */}
      <Card>
        <CardHeader>
          <CardTitle>Global Raw Material Price Rankings</CardTitle>
          <CardDescription>
            Price comparison {selectedMaterial ? `for ${selectedMaterial}` : "across materials and regions"} (USD)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredData
              .sort((a, b) => a.avg_price - b.avg_price)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl">{getFlag(item.region)}</span>
                    <div className="flex-1">
                      <p className="font-medium text-sm">
                        {selectedMaterial === "all" ? `${item.material_clean} ${item.region}` : item.region}
                      </p>
                      <p className="text-xs text-muted-foreground">{item.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={idx === 0 ? "default" : "outline"}
                      className={idx === 0 ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      ${item.avg_price.toFixed(2)}
                    </Badge>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
