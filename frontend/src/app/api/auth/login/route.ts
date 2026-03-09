import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Mock authentication - replace with actual auth
    if (email && password) {
      return NextResponse.json({
        success: true,
        user: {
          id: 1,
          email,
          name: 'User Name'
        },
        token: 'mock-jwt-token'
      })
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    )
  }
}
