export interface ListingProduct {
  asin: string
  title: string
  sellerId: string | null
  rating: number | null
  reviewCount: number | null
  price: string | null
}

export interface ReviewData {
  title: string | null
  rating: number | null
  date: string | null
}

export interface ProductStat {
  asin: string
  title: string
  sellerId: string | null
  rating: number | null
  totalReviewsOnListing: number | null
  reviewsOnPage: ReviewData[]
  parseStatus: 'ok' | 'captcha' | 'parse_error' | 'network_error'
}

export type FetchResult =
  | { ok: true; html: string }
  | { ok: false; reason: 'captcha' | 'network_error' | 'timeout' | 'blocked'; status?: number }