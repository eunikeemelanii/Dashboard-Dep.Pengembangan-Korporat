"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ConsumptionRateTable } from "./consumption-rate-table"
import { DataFilters } from "./data-filters"
import { PriceTrendChart } from "./price-trend-chart"
import { useConsumptionData } from "@/hooks/use-consumption-data"
import { useState } from "react"
import { PriceRankingCard } from "./price-ranking-card"
import { DecisionSuggestionsBooth } from "./decision-suggestions-booth"
import { RawMaterialPieChart } from "./raw-material-pie-chart"

interface DashboardTabsProps {
  onEdit: (id: number) => void
  selectedFactory: number | null
  onFactoryChange: (factory: number | null) => void
}

export function DashboardTabs({ onEdit, selectedFactory, onFactoryChange }: DashboardTabsProps) {
  const [selectedRawMaterial, setSelectedRawMaterial] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const { data, isLoading, factories, rawMaterials, products } = useConsumptionData({
    factory: selectedFactory,
    rawMaterial: selectedRawMaterial,
    product: selectedProduct,
  })

  const selectedProductData = selectedProduct ? data.filter((item) => item.product === selectedProduct) : []

  return (
    <Tabs defaultValue="consumption" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="consumption">Consumption Rates</TabsTrigger>
        <TabsTrigger value="trends">Price Trends</TabsTrigger>
      </TabsList>

      <TabsContent value="consumption" className="space-y-6">
        <DataFilters
          factories={factories}
          selectedFactory={selectedFactory}
          onFactoryChange={onFactoryChange}
          rawMaterials={rawMaterials}
          selectedRawMaterial={selectedRawMaterial}
          onRawMaterialChange={setSelectedRawMaterial}
          products={products}
          selectedProduct={selectedProduct}
          onProductChange={setSelectedProduct}
        />

        {selectedProduct && selectedProductData.length > 0 && (
          <RawMaterialPieChart data={selectedProductData} product={selectedProduct} />
        )}

        <ConsumptionRateTable data={data} isLoading={isLoading} onEdit={onEdit} />
      </TabsContent>

      <TabsContent value="trends" className="space-y-6">
        <PriceTrendChart />
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Global Raw Material Price from International Sources</h2>
          <PriceRankingCard />
          <DecisionSuggestionsBooth />
        </div>
      </TabsContent>
    </Tabs>
  )
}
