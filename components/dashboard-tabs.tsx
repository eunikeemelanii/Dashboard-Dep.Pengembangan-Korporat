"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ConsumptionRateTable } from "./consumption-rate-table"
import { DataFilters } from "./data-filters"
import { PriceTrendChart } from "./price-trend-chart"
import { useConsumptionData } from "@/hooks/use-consumption-data"

interface DashboardTabsProps {
  onEdit: (id: number) => void
  selectedFactory: number | null
  onFactoryChange: (factory: number | null) => void
}

export function DashboardTabs({ onEdit, selectedFactory, onFactoryChange }: DashboardTabsProps) {
  const { data, isLoading, factories } = useConsumptionData({
    factory: selectedFactory,
  })

  return (
    <Tabs defaultValue="consumption" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="consumption">Consumption Rates</TabsTrigger>
        <TabsTrigger value="trends">Price Trends</TabsTrigger>
      </TabsList>

      <TabsContent value="consumption" className="space-y-6">
        <DataFilters factories={factories} selectedFactory={selectedFactory} onFactoryChange={onFactoryChange} />
        <ConsumptionRateTable data={data} isLoading={isLoading} onEdit={onEdit} />
      </TabsContent>

      <TabsContent value="trends">
        <PriceTrendChart />
      </TabsContent>
    </Tabs>
  )
}
