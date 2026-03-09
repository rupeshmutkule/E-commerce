import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const productId = searchParams.get('productId')

  // Mock product sizes - replace with database query
  const sizes = [
    { id: 1, name: 'Small', available: true },
    { id: 2, name: 'Medium', available: true },
    { id: 3, name: 'Large', available: false }
  ]

  return NextResponse.json({ sizes })
}
