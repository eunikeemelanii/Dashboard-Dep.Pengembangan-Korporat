import useSWR from "swr"

export interface PriceTrendData {
  date: string
  material: string
  price: number
}

interface PriceTrendsResponse {
  data: PriceTrendData[]
  materials: string[]
  dateRange: {
    start: string
    end: string
  }
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function usePriceTrends() {
  // Pastikan file route.ts yang saya beri sebelumnya disimpan di folder:
  // app/api/price-trends/route.ts 
  const { data, error, isLoading } = useSWR<PriceTrendsResponse>("/api/price-trends", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    data: data?.data || [],
    materials: data?.materials || [],
    dateRange: data?.dateRange,
    isLoading,
    isError: !!error,
  }
}
