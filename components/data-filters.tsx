"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DataFiltersProps {
  factories: number[]
  selectedFactory: number | null
  onFactoryChange: (factory: number | null) => void
  rawMaterials: string[]
  selectedRawMaterial: string | null
  onRawMaterialChange: (rawMaterial: string | null) => void
}

export function DataFilters({
  factories,
  selectedFactory,
  onFactoryChange,
  rawMaterials,
  selectedRawMaterial,
  onRawMaterialChange,
}: DataFiltersProps) {
  const handleClearFilters = () => {
    onFactoryChange(null)
    onRawMaterialChange(null)
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4">
      <h2 className="font-semibold text-foreground">Filters</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Factory (Pabrik)</label>
          <Select
            value={selectedFactory?.toString() || ""}
            onValueChange={(value) => onFactoryChange(value ? Number.parseInt(value) : null)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select factory..." />
            </SelectTrigger>
            <SelectContent>
              {factories.map((factory) => (
                <SelectItem key={factory} value={factory.toString()}>
                  Pabrik {factory}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Raw Material (Bahan Baku)</label>
          <Select value={selectedRawMaterial || ""} onValueChange={(value) => onRawMaterialChange(value || null)}>
            <SelectTrigger>
              <SelectValue placeholder="Select material..." />
            </SelectTrigger>
            <SelectContent>
              {rawMaterials.map((material) => (
                <SelectItem key={material} value={material}>
                  {material}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters Button */}
        <div className="flex items-end">
          <Button onClick={handleClearFilters} variant="outline" className="w-full bg-transparent">
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  )
}
