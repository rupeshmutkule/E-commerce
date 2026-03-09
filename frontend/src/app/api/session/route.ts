import { NextResponse } from 'next/server'

export async function POST() {
  // Mock session data - replace with actual session logic
  const sessionData = {
    status: 'success',
    customer_id: 'not logged in',
    cart_count: 0,
    isLoggedIn: false
  }

  return NextResponse.json(sessionData)
}
