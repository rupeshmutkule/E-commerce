import { NextResponse } from 'next/server'

export async function GET() {
  // Mock product data - replace with actual API call
  const products = [
    {
      id: 15244,
      name: 'Aureolin Luxurious Drape Cushion Cover',
      price: 1439,
      originalPrice: 3599,
      discount: '60% off',
      image: 'https://icmedianew.gumlet.io/pub/media/catalog/product/cache/8146ef1b96804dd4246ef773e8951496/i/n/india-circus-by-krsnaa-mehta-aureolin-luxurious-drape-cushion-cover-52121512sd01826-2.jpg',
      url: '/aureolin-luxurious-drape-cushion-cover',
      type: 'simple'
    }
  ]

  return NextResponse.json({ products })
}
