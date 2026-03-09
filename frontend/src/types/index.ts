export interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  discount: string
  image: string
  url: string
  type: 'simple' | 'configurable'
  sku?: string
  category?: string
}

export interface CartItem {
  productId: number
  quantity: number
  product: Product
}

export interface Session {
  status: string
  customer_id: string
  cart_count: number
  isLoggedIn: boolean
}
