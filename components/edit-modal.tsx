"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle, Check } from "lucide-react"
import { useEditConsumptionRate } from "@/hooks/use-edit-consumption-rate"

interface EditModalProps {
  isOpen: boolean
  consumptionRateId: number
  onClose: () => void
}

export function EditModal({ isOpen, consumptionRateId, onClose }: EditModalProps) {
  const [newRate, setNewRate] = useState<string>("")
  const { currentData, history, isLoading, isSaving, error, fetchData, updateRate } =
    useEditConsumptionRate(consumptionRateId)

  useEffect(() => {
    if (isOpen && currentData) {
      setNewRate(currentData.consumption_rate.toString())
      fetchData()
    }
  }, [isOpen, currentData, fetchData])

  const handleUpdate = async () => {
    if (!newRate || isNaN(Number.parseFloat(newRate))) {
      return
    }

    const success = await updateRate(Number.parseFloat(newRate))
    if (success) {
      setNewRate("")
      onClose()
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setNewRate("")
      onClose()
    }
  }

  if (!currentData) return null

  const rateChanged = Number.parseFloat(newRate) !== currentData.consumption_rate

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Update Consumption Rate</DialogTitle>
          <DialogDescription>
            {currentData.product} - {currentData.raw_material}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="edit" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Edit Tab */}
          <TabsContent value="edit" className="space-y-4">
            <div className="space-y-4 rounded-lg border border-border bg-muted/30 p-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Factory (Pabrik)</Label>
                  <div className="flex h-10 items-center rounded-md border border-border bg-background px-3">
                    <span className="text-foreground">Pabrik {currentData.factory}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Product</Label>
                  <div className="flex h-10 items-center rounded-md border border-border bg-background px-3">
                    <span className="text-foreground">{currentData.product}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Raw Material</Label>
                  <div className="flex h-10 items-center rounded-md border border-border bg-background px-3">
                    <span className="text-foreground">{currentData.raw_material}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Unit</Label>
                  <div className="flex h-10 items-center rounded-md border border-border bg-background px-3">
                    <span className="text-foreground">{currentData.unit}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-900 dark:bg-blue-950">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Current Value</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{currentData.consumption_rate}</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-rate" className="text-sm font-medium">
                New Consumption Rate
              </Label>
              <Input
                id="new-rate"
                type="number"
                step="0.01"
                value={newRate}
                onChange={(e) => setNewRate(e.target.value)}
                placeholder="Enter new consumption rate"
                className="h-10"
              />
            </div>

            {error && (
              <div className="flex gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-destructive">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setNewRate(currentData.consumption_rate.toString())
                }}
              >
                Reset
              </Button>
              <Button onClick={handleUpdate} disabled={!rateChanged || isSaving || !newRate}>
                {isSaving ? "Updating..." : "Update Rate"}
              </Button>
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-4">
            {isLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="space-y-2 rounded-lg border border-border p-3">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                ))}
              </div>
            ) : history.length === 0 ? (
              <div className="flex h-32 items-center justify-center text-center">
                <p className="text-muted-foreground">No update history yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {history.map((record: any) => (
                  <div
                    key={record.id}
                    className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {record.old_rate} → {record.new_rate}
                      </p>
                      <p className="text-xs text-muted-foreground">{new Date(record.updated_at).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
