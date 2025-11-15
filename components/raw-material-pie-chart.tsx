// components/raw-material-pie-chart.tsx
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
  // Utility Colors (Group 1) - Warna biru dan hijau
  Steam: "#3b82f6",
  Listrik: "#10b981",
  Gas: "#06b6d4",
  "Air Demin": "#38bdf8",
  "Hard Water": "#22d3ee",
  "Cooling Water": "#0ea5e9", // Added for utility

  // Bahan Baku Colors (Group 2) - Warna merah dan orange
  Urea: "#ef4444",
  ZA: "#f59e0b",
  "Sulphuric Acid": "#f97316",
  KCl: "#fb923c",
  "Phosphoric Acid": "#f43f5e",
  "Phosphate Rock": "#ec4899",
  Ammonia: "#dc2626",
  "DAP Granul": "#b91c1c",
  "Zinc Sulphate": "#991b1b",
  "Zink Sulphate": "#991b1b", // Both spellings
  DAP: "#7f1d1d",
  SP36: "#dc2626",
  SP20: "#b91c1c",
  "Nitrogen Liquid": "#6366f1",
  "NPK 15-10-12": "#f59e0b",
  "NPK 15-15-15": "#f97316",
  "NPK 15-15-15 Granulasi": "#ef4444",
  Sulphur: "#b45309", // Added for raw material

  // Bahan Pelengkap Colors (Group 3) - Warna ungu dan kuning
  Bentonite: "#8b5cf6",
  "Coating Oil": "#a78bfa",
  "Coating Powder": "#c084fc",
  Silica: "#eab308",
  NPS: "#84cc16",
  Clay: "#a855f7", // Added
  Phospogypsum: "#d946ef", // Added
};

// Updated grouping (no Other category)
const GROUP_CONFIG = {
  utility: {
    name: "Utility",
    materials: [
      "Steam", "Listrik", "Gas", "Air Demin", "Hard Water", "Cooling Water"
    ],
    color: "#3b82f6"
  },
  bahanBaku: {
    name: "Bahan Baku",
    materials: [
      "Urea", "ZA", "Sulphuric Acid", "KCl", "Phosphoric Acid", 
      "Phosphate Rock", "Ammonia", "DAP Granul", "Zinc Sulphate", "Zink Sulphate",
      "DAP", "SP36", "SP20", "NPK 15-10-12", "NPK 15-15-15", "Nitrogen Liquid",
      "NPK 15-15-15 Granulasi", "Sulphur"
    ],
    color: "#ef4444"
  },
  bahanPelengkap: {
    name: "Bahan Pelengkap",
    materials: [
      "Bentonite", "Coating Oil", "Coating Powder", 
      "Silica", "NPS", "Clay", "Phospogypsum"
    ],
    color: "#8b5cf6"
  }
} as const;

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

  // Clean calculation - only recognized materials, no Other handling
  const calculateGroupTotals = () => {
    const groupTotals: Record<string, number> = {};
    const groupTypeCounts: Record<string, { present: number; total: number; activeMaterials: string[] }> = {};
    const allRecognizedMaterials = new Set<string>();
    
    // Collect all defined materials across the 3 groups
    Object.values(GROUP_CONFIG).forEach(group => {
      group.materials.forEach(material => allRecognizedMaterials.add(material));
    });
    
    // Filter data to only include recognized materials
    const recognizedData = data.filter(item => 
      allRecognizedMaterials.has(item.raw_material) || 
      allRecognizedMaterials.has(item.raw_material.trim())
    );
    
    // Calculate for each of the 3 main groups only
    Object.entries(GROUP_CONFIG).forEach(([groupKey, group]) => {
      const groupItems = recognizedData.filter(item => 
        group.materials.includes(item.raw_material)
      );
      const activeItems = groupItems.filter(item => Math.max(0, item.consumption_rate) > 0);
      
      const groupTotal = groupItems.reduce((sum, item) => sum + Math.max(0, item.consumption_rate), 0);
      groupTotals[groupKey] = groupTotal;
      
      groupTypeCounts[groupKey] = {
        present: activeItems.length,
        total: group.materials.length,
        activeMaterials: [...new Set(activeItems.map(item => item.raw_material))]
      };
    });
    
    // Grand total = sum of only the 3 groups (no Other)
    const grandTotal = Object.values(groupTotals).reduce((sum, total) => sum + total, 0);
    
    // Total unique types from recognized materials only
    const totalUniqueTypes = new Set(
      recognizedData.filter(item => Math.max(0, item.consumption_rate) > 0).map(item => item.raw_material)
    ).size;
    
    // Debug: Log ignored materials
    const ignoredMaterials = data.filter(item => !allRecognizedMaterials.has(item.raw_material));
    if (ignoredMaterials.length > 0) {
      console.log("Ignored materials (not in GROUP_CONFIG):", 
        ignoredMaterials.map(item => ({ name: item.raw_material, rate: item.consumption_rate }))
      );
    }
    
    console.log("Group totals:", groupTotals);
    console.log("Total unique types (recognized):", totalUniqueTypes);
    console.log("Grand total:", grandTotal);
    
    return { 
      groupTotals, 
      groupTypeCounts, 
      grandTotal, 
      totalUniqueTypes,
      allRecognizedMaterials,
      recognizedData
    };
  };

  const { 
    groupTotals, 
    groupTypeCounts, 
    grandTotal, 
    totalUniqueTypes,
    allRecognizedMaterials,
    recognizedData
  } = calculateGroupTotals();

  // Get pie data for main groups only
  const getGroupPieData = (groupKey: string, groupTotal: number) => {
    if (groupTotal === 0) {
      return [];
    }

    const group = GROUP_CONFIG[groupKey as keyof typeof GROUP_CONFIG];
    if (!group) return [];
    
    const groupItems = recognizedData
      .filter(item => group.materials.includes(item.raw_material))
      .filter(item => Math.max(0, item.consumption_rate) > 0);
    
    const groupData = groupItems.map(item => ({
      name: item.raw_material,
      value: Math.max(0, item.consumption_rate),
      itemStyle: { 
        color: MATERIAL_COLORS[item.raw_material] || getRandomGroupColor(groupKey)
      },
      percentage: ((Math.max(0, item.consumption_rate) / groupTotal) * 100).toFixed(1)
    }));
    
    // Sort by value descending
    groupData.sort((a, b) => b.value - a.value);
    
    return groupData;
  };

  // Color helper functions
  const getRandomGroupColor = (groupKey: string) => {
    const group = GROUP_CONFIG[groupKey as keyof typeof GROUP_CONFIG];
    if (!group) return "#6b7280";
    
    const baseColor = group.color;
    const shades = [
      baseColor,
      adjustColor(baseColor, -20),
      adjustColor(baseColor, -40),
      adjustColor(baseColor, 20),
      adjustColor(baseColor, 40)
    ];
    
    return shades[Math.floor(Math.random() * shades.length)];
  };

  const adjustColor = (color: string, amount: number) => {
    const usePound = color.indexOf("#") >= 0;
    const colorWithoutPound = usePound ? color.replace("#", "") : color;
    const num = parseInt(colorWithoutPound, 16);
    let amt = Math.round(2.55 * amount);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    const newR = Math.min(255, Math.max(0, R));
    const newG = Math.min(255, Math.max(0, G));
    const newB = Math.min(255, Math.max(0, B));
    
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
  };

  // Pie chart configuration (3 charts only)
  const createPieOption = (title: string, data: any[], groupTotal: number, grandTotal: number) => {
    if (data.length === 0) {
      return {
        title: {
          text: `${title}\n(0%)`,
          left: 'center',
          top: 'center',
          textStyle: { fontSize: 16, fontWeight: 'bold', color: '#6b7280' }
        },
        series: [{
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          data: [{
            name: 'No Active Materials',
            value: 1,
            itemStyle: { color: '#e5e7eb' }
          }],
          label: { show: false },
          labelLine: { show: false },
          silent: true
        }]
      };
    }

    return {
      title: {
        text: title,
        left: 'center',
        top: 10,
        textStyle: { 
          fontSize: 14, 
          fontWeight: 'bold',
          color: '#374151'
        }
      },
      tooltip: {
        trigger: "item",
        formatter: (params: any) => {
          const groupPercentage = ((params.value / groupTotal) * 100).toFixed(1);
          const overallPercentage = ((params.value / grandTotal) * 100).toFixed(1);
          return `
            <div style="text-align: left; padding: 8px; min-width: 120px;">
              <div style="font-weight: bold; margin-bottom: 4px;">${params.name}</div>
              <div style="font-size: 12px;">${groupPercentage}% of ${title.toLowerCase()}</div>
              <div style="color: #6b7280; font-size: 11px; margin-top: 2px;">
                Overall: ${overallPercentage}% of total
              </div>
            </div>
          `;
        }
      },
      legend: {
        orient: "vertical",
        left: "left",
        top: "middle",
        bottom: 10,
        textStyle: { fontSize: 10 },
        itemWidth: 8,
        itemHeight: 8,
        formatter: (name: string) => {
          const item = data.find((d: any) => d.name === name);
          if (item) {
            return `${name} (${item.percentage}%)`;
          }
          return name;
        }
      },
      series: [
        {
          name: `${title} Composition`,
          type: "pie",
          radius: ["40%", "70%"],
          center: ["60%", "50%"],
          avoidLabelOverlap: true,
          label: {
            show: data.length <= 5, // More restrictive for cleaner look
            formatter: "{b|{b}}\n{per|{d}%}",
            rich: {
              b: { fontSize: 9, lineHeight: 14 },
              per: { fontSize: 11, fontWeight: 'bold', color: '#374151' }
            },
            position: 'outside'
          },
          labelLine: { 
            show: data.length <= 5,
            length: 12,
            length2: 8
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 8,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "rgba(0, 0, 0, 0.2)",
            }
          },
          data: data
        }
      ]
    };
  };

  // Generate exactly 3 pie charts (no Other)
  const pieCharts = Object.entries(GROUP_CONFIG).map(([groupKey, groupConfig], index) => {
    const groupTotal = groupTotals[groupKey];
    const typeInfo = groupTypeCounts[groupKey];
    const groupData = getGroupPieData(groupKey, groupTotal);
    const groupPercentage = grandTotal > 0 ? ((groupTotal / grandTotal) * 100).toFixed(1) : "0";
    const typeDisplay = typeInfo.present > 0 
      ? `${typeInfo.present}/${typeInfo.total} types`
      : `0/${typeInfo.total} types`;
    
    return (
      <div key={groupKey} className={`flex-1 min-w-[280px] ${index === 1 ? "lg:mx-4" : ""}`}>
        <Card className={`mb-6 ${index < 2 ? "lg:mr-2" : "lg:ml-2"}`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg leading-tight">{groupConfig.name}</CardTitle>
            <CardDescription className="text-xs space-y-1">
              <div className="font-medium">{groupPercentage}% of total</div>
              <div className="text-muted-foreground/80 text-[10px]">
                {typeDisplay} active
                {typeInfo.present > 0 && typeInfo.present <= 3 && (
                  <span className="ml-1">({typeInfo.activeMaterials.join(', ')})</span>
                )}
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] p-0 relative">
            <ReactECharts 
              option={createPieOption(groupConfig.name, groupData, groupTotal, grandTotal)}
              style={{ height: "100%", width: "100%" }}
              opts={{ renderer: 'svg', lazyUpdate: true }}
            />
            {/* Empty state overlay */}
            {groupData.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-md">
                <div className="text-center text-muted-foreground">
                  <div className="text-xl font-bold">0%</div>
                  <div className="text-xs mt-1">No active materials</div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  });

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Raw Material Composition by Category</CardTitle>
        <CardDescription className="text-sm">
          Distribution for <span className="font-medium">{product}</span> across 
          <span className="font-semibold"> {totalUniqueTypes}</span> recognized material types
          <span className="ml-2 text-xs text-muted-foreground">
            (Only materials defined in categories are included)
          </span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Clean 3-column overview - always 100% */}
        <div className="p-4 bg-muted/50 rounded-lg border">
          <h3 className="font-semibold text-base mb-3">Category Distribution</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {Object.entries(groupTotals).map(([groupKey, total]) => {
              const percentage = grandTotal > 0 ? ((total / grandTotal) * 100).toFixed(1) : "0";
              const typeInfo = groupTypeCounts[groupKey];
              const group = GROUP_CONFIG[groupKey as keyof typeof GROUP_CONFIG];
              const displayColor = group.color;
              const typeSummary = typeInfo.present > 0 
                ? `${typeInfo.present}/${typeInfo.total} types`
                : `No types active`;
              
              return (
                <div key={groupKey} className="text-center space-y-2 p-3 bg-background rounded-md border">
                  <div className="text-2xl font-bold text-primary">{percentage}%</div>
                  <div className="text-xs font-medium capitalize">{group.name}</div>
                  <div className="text-[10px] text-muted-foreground">{typeSummary}</div>
                  <div 
                    className="w-full h-2 bg-muted rounded-full mx-auto"
                    style={{ 
                      background: `linear-gradient(to right, ${displayColor}20 0%, ${displayColor}20 ${parseFloat(percentage)}%, transparent ${parseFloat(percentage)}%)` 
                    }}
                  />
                </div>
              );
            })}
          </div>
          
          {/* Summary - always 100% across 3 categories */}
          {grandTotal > 0 && (
            <div className="mt-4 pt-3 border-t border-border text-xs text-center">
              <div className="font-medium text-primary">Total: 100% composition</div>
              <div className="text-[10px] text-muted-foreground mt-1">
                {totalUniqueTypes} recognized material types • 
                {recognizedData.length > 0 && (
                  <span>{recognizedData.length} data entries processed</span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Fixed 3-column pie charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pieCharts}
        </div>

        {/* Coverage notice */}
        {data.length > recognizedData.length && (
          <div className="text-xs text-muted-foreground text-center p-2 bg-muted/30 rounded-md">
            <span className="font-medium">Data Coverage:</span> 
            {((recognizedData.length / data.length) * 100).toFixed(0)}% of input materials match defined categories
            ({data.length - recognizedData.length} entries excluded)
          </div>
        )}
      </CardContent>
    </Card>
  );
}
