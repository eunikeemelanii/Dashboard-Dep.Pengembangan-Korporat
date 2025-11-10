"use client"

import { useState, useCallback } from "react"

interface ConsumptionRateData {
  id: number
  factory: number
  product: string
  raw_material: string
  consumption_rate: number
  unit: string
}

interface HistoryRecord {
  id: number
  old_rate: number
  new_rate: number
  updated_at: string
}

export function useEditConsumptionRate(consumptionRateId: number) {
  const [currentData, setCurrentData] = useState<ConsumptionRateData | null>(null)
  const [history, setHistory] = useState<HistoryRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)

      // Get current data
      const response = await fetch(`/api/consumption-rates?id=${consumptionRateId}`)
      if (!response.ok) throw new Error("Failed to fetch data")
      const result = await response.json()
      setCurrentData(result.data?.[0] || null)

      // Get history
      const historyResponse = await fetch(`/api/consumption-rates/${consumptionRateId}/history`)
      if (historyResponse.ok) {
        const historyResult = await historyResponse.json()
        setHistory(historyResult.history || [])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }, [consumptionRateId])

  const updateRate = useCallback(
    async (newRate: number) => {
      try {
        setIsSaving(true)
        setError(null)

        const response = await fetch("/api/consumption-rates", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: consumptionRateId,
            consumption_rate: newRate,
          }),
        })

        if (!response.ok) throw new Error("Failed to update rate")

        // Refresh data
        await fetchData()
        return true
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to update")
        return false
      } finally {
        setIsSaving(false)
      }
    },
    [consumptionRateId, fetchData],
  )

  return {
    currentData,
    history,
    isLoading,
    isSaving,
    error,
    fetchData,
    updateRate,
  }
}
