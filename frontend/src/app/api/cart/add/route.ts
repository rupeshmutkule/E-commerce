import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { productId, quantity, sizeId } = await request.json()

    // Mock add to cart - replace with session/database
    return NextResponse.json({
      success: true,
      cartCount: quantity,
      message: 'Product added to cart'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add to cart' },
      { status: 500 }
    )
  }
}
