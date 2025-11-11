"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface DecisionSuggestion {
  material: string
  cheapest_FOB: string
  cheapest_FOB_price: number
  cheapest_CFR: string
  cheapest_CFR_price: number
  decision_suggestion: string
}

const decisions: DecisionSuggestion[] = [
  {
    material: "Ammonia Southeast",
    cheapest_FOB: "Ammonia Southeast Asia FOB",
    cheapest_FOB_price: 334.68,
    cheapest_CFR: "Ammonia Southeast Asia CFR",
    cheapest_CFR_price: 364.68,
    decision_suggestion:
      "Cheapest FOB is Ammonia Southeast Asia FOB at 334.68; cheapest CFR is Ammonia Southeast Asia CFR at 364.68 (delta +30.00). If freight + insurance is expected to be < delta, buying FOB + freight may be cheaper; otherwise choose the CFR option.",
  },
  {
    material: "NPKs Baltic",
    cheapest_FOB: "NPKs Baltic Sea 15-15-15 FOB",
    cheapest_FOB_price: 388.34,
    cheapest_CFR: "",
    cheapest_CFR_price: 0,
    decision_suggestion:
      "Only FOB prices available; consider NPKs Baltic Sea 15-15-15 FOB at 388.34 and estimate freight to compare.",
  },
  {
    material: "NPKs India",
    cheapest_FOB: "",
    cheapest_FOB_price: 0,
    cheapest_CFR: "NPKs India 20-20-0-13 CFR",
    cheapest_CFR_price: 437.09,
    decision_suggestion: "Only CFR prices available; prefer NPKs India 20-20-0-13 CFR (delivered) at 437.09.",
  },
  {
    material: "PA India",
    cheapest_FOB: "",
    cheapest_FOB_price: 0,
    cheapest_CFR: "PA India CFR",
    cheapest_CFR_price: 1170.64,
    decision_suggestion: "Only CFR prices available; prefer PA India CFR (delivered) at 1170.64.",
  },
  {
    material: "PR Jordan",
    cheapest_FOB: "PR Jordan (66-72% BPL) FOB",
    cheapest_FOB_price: 155.0,
    cheapest_CFR: "",
    cheapest_CFR_price: 0,
    decision_suggestion:
      "Only FOB prices available; consider PR Jordan (66-72% BPL) FOB at 155.00 and estimate freight to compare.",
  },
  {
    material: "PR Moroco",
    cheapest_FOB: "PR Moroco (68-72% BPL) FOB",
    cheapest_FOB_price: 212.16,
    cheapest_CFR: "",
    cheapest_CFR_price: 0,
    decision_suggestion:
      "Only FOB prices available; consider PR Moroco (68-72% BPL) FOB at 212.16 and estimate freight to compare.",
  },
  {
    material: "Potash Standard",
    cheapest_FOB: "Potash Standard Vancouver FOB",
    cheapest_FOB_price: 300.18,
    cheapest_CFR: "Potash Standard Southeast Asia CFR",
    cheapest_CFR_price: 343.89,
    decision_suggestion:
      "Cheapest FOB is Potash Standard Vancouver FOB at 300.18; cheapest CFR is Potash Standard Southeast Asia CFR at 343.89 (delta +43.70). If freight + insurance is expected to be < delta, buying FOB + freight may be cheaper; otherwise choose the CFR option.",
  },
  {
    material: "Sulphur India",
    cheapest_FOB: "",
    cheapest_FOB_price: 0,
    cheapest_CFR: "Sulphur India ex Middle East CFR",
    cheapest_CFR_price: 279.39,
    decision_suggestion: "Only CFR prices available; prefer Sulphur India ex Middle East CFR (delivered) at 279.39.",
  },
  {
    material: "Sulphur Indonesia",
    cheapest_FOB: "",
    cheapest_FOB_price: 0,
    cheapest_CFR: "Sulphur Indonesia CFR",
    cheapest_CFR_price: 283.07,
    decision_suggestion: "Only CFR prices available; prefer Sulphur Indonesia CFR (delivered) at 283.07.",
  },
  {
    material: "Sulphur Middle",
    cheapest_FOB: "Sulphur Middle East FOB",
    cheapest_FOB_price: 266.18,
    cheapest_CFR: "",
    cheapest_CFR_price: 0,
    decision_suggestion:
      "Only FOB prices available; consider Sulphur Middle East FOB at 266.18 and estimate freight to compare.",
  },
  {
    material: "Sulphuric Acid",
    cheapest_FOB: "Sulphuric Acid Japan/South Korea FOB",
    cheapest_FOB_price: 38.11,
    cheapest_CFR: "",
    cheapest_CFR_price: 0,
    decision_suggestion:
      "Only FOB prices available; consider Sulphuric Acid Japan/South Korea FOB at 38.11 and estimate freight to compare.",
  },
  {
    material: "Urea China",
    cheapest_FOB: "Urea China FOB",
    cheapest_FOB_price: 395.77,
    cheapest_CFR: "",
    cheapest_CFR_price: 0,
    decision_suggestion:
      "Only FOB prices available; consider Urea China FOB at 395.77 and estimate freight to compare.",
  },
  {
    material: "Urea Indonesia",
    cheapest_FOB: "Urea Indonesia FOB",
    cheapest_FOB_price: 401.57,
    cheapest_CFR: "",
    cheapest_CFR_price: 0,
    decision_suggestion:
      "Only FOB prices available; consider Urea Indonesia FOB at 401.57 and estimate freight to compare.",
  },
  {
    material: "Urea Southeast",
    cheapest_FOB: "",
    cheapest_FOB_price: 0,
    cheapest_CFR: "Urea Southeast Asia CFR",
    cheapest_CFR_price: 430.82,
    decision_suggestion: "Only CFR prices available; prefer Urea Southeast Asia CFR (delivered) at 430.82.",
  },
  {
    material: "ZA Granular",
    cheapest_FOB: "ZA Granular China FOB",
    cheapest_FOB_price: 166.7,
    cheapest_CFR: "",
    cheapest_CFR_price: 0,
    decision_suggestion:
      "Only FOB prices available; consider ZA Granular China FOB at 166.70 and estimate freight to compare.",
  },
  {
    material: "ZA Standard",
    cheapest_FOB: "",
    cheapest_FOB_price: 0,
    cheapest_CFR: "ZA Standard Southeast Asia CFR",
    cheapest_CFR_price: 176.59,
    decision_suggestion: "Only CFR prices available; prefer ZA Standard Southeast Asia CFR (delivered) at 176.59.",
  },
]

export function DecisionSuggestionsBooth() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <Card className="mt-6 border-2 border-blue-200 dark:border-blue-900">
      <CardHeader className="bg-blue-50 dark:bg-blue-950">
        <CardTitle className="flex items-center gap-2">💡 Pricing Decision Support</CardTitle>
        <CardDescription>
          Ask questions about FOB vs CFR pricing options and get recommendations based on current global prices
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-3">
          {decisions.map((decision, idx) => (
            <div
              key={idx}
              className="border rounded-lg overflow-hidden hover:bg-muted/50 transition cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
            >
              <div className="p-4 flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">{decision.material}</h4>
                    <div className="flex gap-1">
                      {decision.cheapest_FOB && <Badge variant="secondary">FOB</Badge>}
                      {decision.cheapest_CFR && <Badge variant="outline">CFR</Badge>}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{decision.decision_suggestion}</p>
                </div>
                <div className="ml-4 text-2xl">{expandedIndex === idx ? "▼" : "▶"}</div>
              </div>

              {expandedIndex === idx && (
                <div className="border-t bg-muted/30 p-4 space-y-4">
                  <div>
                    <h5 className="font-semibold text-sm mb-3">📋 Key Questions & Answers</h5>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium text-blue-600 dark:text-blue-400">
                          Q: Should I choose FOB or CFR for {decision.material}?
                        </p>
                        <p className="text-muted-foreground mt-1">{decision.decision_suggestion}</p>
                      </div>

                      {decision.cheapest_FOB && (
                        <div className="pt-3 border-t">
                          <p className="font-medium text-blue-600 dark:text-blue-400">
                            Q: What is the cheapest FOB option for {decision.material}?
                          </p>
                          <p className="text-muted-foreground mt-1">
                            <strong>{decision.cheapest_FOB}</strong> at{" "}
                            <Badge>${decision.cheapest_FOB_price.toFixed(2)}</Badge>
                          </p>
                        </div>
                      )}

                      {decision.cheapest_CFR && (
                        <div className="pt-3 border-t">
                          <p className="font-medium text-blue-600 dark:text-blue-400">
                            Q: What is the cheapest CFR option for {decision.material}?
                          </p>
                          <p className="text-muted-foreground mt-1">
                            <strong>{decision.cheapest_CFR}</strong> at{" "}
                            <Badge>${decision.cheapest_CFR_price.toFixed(2)}</Badge>
                          </p>
                        </div>
                      )}

                      {decision.cheapest_FOB && decision.cheapest_CFR && (
                        <div className="pt-3 border-t bg-yellow-50 dark:bg-yellow-950/30 p-2 rounded">
                          <p className="font-medium text-amber-700 dark:text-amber-300">⚠️ Cost Comparison</p>
                          <p className="text-muted-foreground mt-1">
                            Price difference: ${(decision.cheapest_CFR_price - decision.cheapest_FOB_price).toFixed(2)}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Consider freight + insurance costs when making your decision
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
