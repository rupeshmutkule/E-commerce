'use client'

import { useState } from 'react'

export default function PincodeChecker() {
  const [pincode, setPincode] = useState('')
  const [result, setResult] = useState<{
    success: boolean
    message: string
    deliveryDays?: number
  } | null>(null)
  const [loading, setLoading] = useState(false)

  const checkPincode = async () => {
    if (pincode.length !== 6) {
      setResult({ success: false, message: 'Please enter a valid 6-digit pincode' })
      return
    }

    setLoading(true)
    
    try {
      const response = await fetch('/api/pincode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pincode })
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({ success: false, message: 'Failed to check pincode' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pincode-checker">
      <h3>Check Delivery</h3>
      <div className="pincode-input-group">
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
          placeholder="Enter Pincode"
          maxLength={6}
        />
        <button onClick={checkPincode} disabled={loading}>
          {loading ? 'Checking...' : 'Check'}
        </button>
      </div>
      
      {result && (
        <p className={`result ${result.success ? 'success' : 'error'}`}>
          {result.message}
          {result.deliveryDays && ` - Delivery in ${result.deliveryDays} days`}
        </p>
      )}
    </div>
  )
}
