// API utility functions

export async function fetchProducts() {
  const res = await fetch('/api/products')
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export async function fetchSession() {
  const res = await fetch('/api/session', { method: 'POST' })
  if (!res.ok) throw new Error('Failed to fetch session')
  return res.json()
}

export async function addToCart(productId: number, quantity: number = 1) {
  const res = await fetch('/api/cart/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, quantity })
  })
  if (!res.ok) throw new Error('Failed to add to cart')
  return res.json()
}
