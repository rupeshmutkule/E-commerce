'use client'

import { useState } from 'react'

interface AddToCartButtonProps {
  productId: number
  sizeId?: number
  onSuccess?: () => void
}

export default function AddToCartButton({ productId, sizeId, onSuccess }: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAddToCart = async () => {
    setLoading(true)
    
    try {
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId,
          sizeId,
          quantity: 1
        })
      })

      if (response.ok) {
        setAdded(true)
        onSuccess?.()
        setTimeout(() => setAdded(false), 2000)
      }
    } catch (error) {
      console.error('Failed to add to cart:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading || added}
      className={`add-to-cart-btn ${added ? 'added' : ''}`}
    >
      {loading ? 'Adding...' : added ? 'Added to Cart!' : 'Add to Cart'}
    </button>
  )
}
