"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface RawMaterialPieChartProps {
  data: Array<{
    raw_material: string;
    consumption_rate: number;
  }>;
  product: string;
}

const MATERIAL_COLORS: Record<string, string> = {
  Urea: "#3b82f6",
  ZA: "#ef4444",
  "Sulphuric Acid": "#10b981",
  KCl: "#f59e0b",
  "Phosphoric Acid": "#8b5cf6",
  "Phosphate Rock": "#ec4899",
  Ammonia: "#06b6d4",
  "DAP Granul": "#f97316",
  Bentonite: "#6366f1",
  Clay: "#14b8a6",
  "Zinc Sulphate": "#eab308",
  "Coating Oil": "#84cc16",
  "Coating Powder": "#f43f5e",
  Steam: "#22d3ee",
  Listrik: "#a78bfa",
  Gas: "#fbbf24",
  "Nitrogen Liquid": "#4ade80",
  "Air Demin": "#38bdf8",
  Silica: "#f97316",
  NPS: "#c084fc",
  DAP: "#fb923c",
  SP36: "#22c55e",
  SP20: "#06b6d4",
  "NPK 15-10-12": "#8b5cf6",
  "NPK 15-15-15": "#ec4899",
  "NPK 15-15-15 Granulasi": "#f59e0b",
};

export function RawMaterialPieChart({ data, product }: RawMaterialPieChartProps) {
  if (!data || data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Raw Material Composition</CardTitle>
          <CardDescription>No data available for {product}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const total = data.reduce((sum, item) => sum + item.consumption_rate, 0);
  const chartData = data.map((item, index) => ({
    name: item.raw_material,
    value: item.consumption_rate,
    itemStyle: { color: MATERIAL_COLORS[item.raw_material] || undefined },
  }));

  const option = {
    tooltip: {
      trigger: "item",
      formatter: (params: any) =>
        `${params.name}<br/>${params.value} (${((params.value / total) * 100).toFixed(1)}%)`,
    },
    legend: {
      orient: "vertical",
      left: "left",
      top: "middle",
      textStyle: { fontSize: 13 },
    },
    series: [
      {
        name: "Raw Materials",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: "{b}: {d}%",
          fontSize: 12,
        },
        labelLine: { show: true },
        data: chartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 15,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.4)",
          },
        },
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Raw Material Composition</CardTitle>
        <CardDescription>Distribution of raw materials for {product}</CardDescription>
      </CardHeader>
      <CardContent className="h-[420px]">
        <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
      </CardContent>
    </Card>
  );
}
