"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { Edit2 } from "lucide-react"

interface ConsumptionRateData {
  id: number
  factory: number
  product: string
  raw_material: string
  consumption_rate: number
  unit: string
}

interface ConsumptionRateTableProps {
  data: ConsumptionRateData[]
  isLoading: boolean
  onEdit: (id: number) => void
}

export function ConsumptionRateTable({ data, isLoading, onEdit }: ConsumptionRateTableProps) {
  if (isLoading) {
    return (
      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Factory</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Raw Material</TableHead>
              <TableHead>Consumption Rate</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead className="w-20">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-4 w-8" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-20" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-8" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg border border-border bg-card">
        <p className="text-center text-muted-foreground">No data found. Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-border overflow-x-auto">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="font-semibold">Factory</TableHead>
            <TableHead className="font-semibold">Product</TableHead>
            <TableHead className="font-semibold">Raw Material</TableHead>
            <TableHead className="font-semibold text-right">Consumption Rate</TableHead>
            <TableHead className="font-semibold">Unit</TableHead>
            <TableHead className="font-semibold text-center w-20">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} className="hover:bg-muted/50">
              <TableCell className="font-medium">Pabrik {row.factory}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.raw_material}</TableCell>
              <TableCell className="text-right font-medium">{row.consumption_rate}</TableCell>
              <TableCell className="text-sm text-muted-foreground">{row.unit}</TableCell>
              <TableCell className="text-center">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onEdit(row.id)}
                  className="h-8 w-8 p-0"
                  title="Edit consumption rate"
                >
                  <Edit2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
