"use client"

import { useState, useEffect, useCallback } from "react"

interface ConsumptionRateData {
  id: number
  factory: number
  product: string
  raw_material: string
  consumption_rate: number
  unit: string
}

interface UseConsumptionDataOptions {
  factory?: number | null
  rawMaterial?: string | null
}

export function useConsumptionData(options: UseConsumptionDataOptions) {
  const [data, setData] = useState<ConsumptionRateData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [factories, setFactories] = useState<number[]>([])
  const [rawMaterials, setRawMaterials] = useState<string[]>([])

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const params = new URLSearchParams()
      if (options.factory) params.append("factory", options.factory.toString())
      if (options.rawMaterial) params.append("rawMaterial", options.rawMaterial)

      const response = await fetch(`/api/consumption-rates?${params.toString()}`)
      if (!response.ok) throw new Error("Failed to fetch data")

      const result = await response.json()
      setData(result.data || [])
      setFactories(result.factories || [])
      setRawMaterials(result.rawMaterials || [])
    } catch (error) {
      console.error("Error fetching consumption data:", error)
      setData([])
    } finally {
      setIsLoading(false)
    }
  }, [options.factory, options.rawMaterial])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const refetch = useCallback(() => {
    fetchData()
  }, [fetchData])

  return { data, isLoading, factories, rawMaterials, refetch }
}
