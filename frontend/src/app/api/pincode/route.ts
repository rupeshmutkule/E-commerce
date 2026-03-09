import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { pincode } = await request.json()

    // Mock pincode validation - replace with actual API
    const validPincodes = ['400001', '110001', '560001', '600001']
    const isValid = validPincodes.includes(pincode)

    return NextResponse.json({
      success: isValid,
      pincode,
      deliveryDays: isValid ? 3 : null,
      message: isValid ? 'Delivery available' : 'Delivery not available'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to check pincode' },
      { status: 500 }
    )
  }
}
