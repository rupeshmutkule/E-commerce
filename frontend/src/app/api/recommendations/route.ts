import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const productId = searchParams.get('productId')

  // Mock recommendations - replace with actual recommendation engine
  const recommendations = [
    {
      id: 1,
      name: 'Chevron Melavo Steel Platter',
      price: 919,
      originalPrice: 2299,
      image: 'https://icmedianew.gumlet.io/pub/media/catalog/product/cache/8146ef1b96804dd4246ef773e8951496/i/n/india-circus-by-krsnaa-mehta-chevron-melavo-small-steel-platter-52152000sd01568-2.jpg',
      url: '/products/chevron-melavo-steel-platter'
    },
    {
      id: 2,
      name: 'Lion Lady Coffee Mug',
      price: 319,
      originalPrice: 799,
      image: 'https://icmedianew.gumlet.io/pub/media/catalog/product/cache/8146ef1b96804dd4246ef773e8951496/i/n/india-circus-by-krsnaa-mehta-lion-lady-coffee-mug-52152101sd00899-2.jpg',
      url: '/products/lion-lady-coffee-mug'
    }
  ]

  return NextResponse.json({ recommendations })
}
