import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json()

    // Mock signup - replace with database
    if (email && password && name) {
      return NextResponse.json({
        success: true,
        user: {
          id: Date.now(),
          email,
          name
        },
        message: 'Account created successfully'
      })
    }

    return NextResponse.json(
      { error: 'Invalid data' },
      { status: 400 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Signup failed' },
      { status: 500 }
    )
  }
}
