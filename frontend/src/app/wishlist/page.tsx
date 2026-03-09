'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface WishlistItem {
  id: number
  name: string
  price: number
  image: string
  url: string
  inStock: boolean
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter(item => item.id !== id))
  }

  return (
    <main className="wishlist-page">
      <div className="container">
        <h1>My Wishlist</h1>
        
        {wishlist.length > 0 ? (
          <div className="wishlist-grid">
            {wishlist.map((item) => (
              <div key={item.id} className="wishlist-item">
                <Link href={item.url}>
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    width={200}
                    height={200}
                  />
                  <h3>{item.name}</h3>
                  <p className="price">₹{item.price}</p>
                  <p className={`stock ${item.inStock ? 'in-stock' : 'out-of-stock'}`}>
                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </Link>
                <button 
                  onClick={() => removeFromWishlist(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-wishlist">
            <p>Your wishlist is empty</p>
            <Link href="/">Continue Shopping</Link>
          </div>
        )}
      </div>
    </main>
  )
}
