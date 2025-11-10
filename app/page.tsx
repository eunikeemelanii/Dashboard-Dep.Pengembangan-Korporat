"use client"

import { useState, useCallback } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { EditModal } from "@/components/edit-modal"
import { DashboardTabs } from "@/components/dashboard-tabs"
import { useConsumptionData } from "@/hooks/use-consumption-data"

export default function DashboardPage() {
  const [selectedFactory, setSelectedFactory] = useState<number | null>(null)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const { refetch } = useConsumptionData({
    factory: selectedFactory,
  })

  const handleEdit = useCallback((id: number) => {
    setEditingId(id)
    setIsEditModalOpen(true)
  }, [])

  const handleModalClose = useCallback(() => {
    setIsEditModalOpen(false)
    setEditingId(null)
    refetch()
  }, [refetch])

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <DashboardTabs onEdit={handleEdit} selectedFactory={selectedFactory} onFactoryChange={setSelectedFactory} />
        </div>
      </main>

      {editingId && <EditModal isOpen={isEditModalOpen} consumptionRateId={editingId} onClose={handleModalClose} />}
    </div>
  )
}
