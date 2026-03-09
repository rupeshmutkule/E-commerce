'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  image: string
  url: string
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock search - replace with actual API call
    setLoading(true)
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: 'Aureolin Luxurious Drape Cushion Cover',
          price: 1439,
          originalPrice: 3599,
          image: 'https://icmedianew.gumlet.io/pub/media/catalog/product/cache/8146ef1b96804dd4246ef773e8951496/i/n/india-circus-by-krsnaa-mehta-aureolin-luxurious-drape-cushion-cover-52121512sd01826-2.jpg',
          url: '/products/aureolin-luxurious-drape-cushion-cover'
        }
      ])
      setLoading(false)
    }, 500)
  }, [query])

  return (
    <main className="search-page">
      <div className="container">
        <h1>Search Results for "{query}"</h1>
        
        {loading ? (
          <p>Loading...</p>
        ) : products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <Link href={product.url}>
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={300}
                    height={300}
                  />
                  <h3>{product.name}</h3>
                  <div className="price">
                    <span className="current">₹{product.price}</span>
                    <span className="original">₹{product.originalPrice}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </main>
  )
}
