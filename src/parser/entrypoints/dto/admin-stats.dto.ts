export class AdminStatsResponseDto {
  ok: boolean
  totalUsers: number
  totalJobs: number
  jobsByStatus: Record<string, number>
  jobsByType: Record<string, number>
  totalProducts: number
  totalSnapshots: number
}