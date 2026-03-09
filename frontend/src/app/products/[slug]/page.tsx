import Image from 'next/image'
import { notFound } from 'next/navigation'

interface ProductPageProps {
  params: {
    slug: string
  }
}

// Mock product data - replace with actual API call
async function getProduct(slug: string) {
  // Simulate API call
  const products: Record<string, any> = {
    'aureolin-luxurious-drape-cushion-cover': {
      id: 15244,
      name: 'Aureolin Luxurious Drape Cushion Cover',
      price: 1439,
      originalPrice: 3599,
      discount: '60% off',
      image: 'https://icmedianew.gumlet.io/pub/media/catalog/product/cache/8146ef1b96804dd4246ef773e8951496/i/n/india-circus-by-krsnaa-mehta-aureolin-luxurious-drape-cushion-cover-52121512sd01826-2.jpg',
      description: 'Luxurious drape cushion cover with contemporary Indian design.',
      sku: '52121512SD01826'
    }
  }

  return products[slug] || null
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="product-detail-page">
      <div className="container">
        <div className="product-layout">
          <div className="product-images">
            <Image 
              src={product.image} 
              alt={product.name}
              width={600}
              height={600}
              priority
            />
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="product-price">
              <span className="current-price">₹{product.price}</span>
              <span className="original-price">₹{product.originalPrice}</span>
              <span className="discount">{product.discount}</span>
            </div>
            <p className="product-description">{product.description}</p>
            <div className="product-actions">
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-now-btn">Buy Now</button>
            </div>
            <div className="product-meta">
              <p>SKU: {product.sku}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
