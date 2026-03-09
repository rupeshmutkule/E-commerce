'use client'

import { useState } from 'react'
import Link from 'next/link'

interface CheckoutForm {
  email: string
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
  pincode: string
  phone: string
}

export default function CheckoutPage() {
  const [formData, setFormData] = useState<CheckoutForm>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  })

  const [orderSummary] = useState({
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Process checkout
    console.log('Checkout data:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="checkout-page">
      <div className="container">
        <h1>Checkout</h1>
        
        <div className="checkout-layout">
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              <section className="contact-info">
                <h2>Contact Information</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </section>

              <section className="shipping-info">
                <h2>Shipping Address</h2>
                <div className="form-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <div className="form-row">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </section>

              <button type="submit" className="checkout-btn">
                Continue to Payment
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{orderSummary.subtotal}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>₹{orderSummary.shipping}</span>
            </div>
            <div className="summary-row">
              <span>Tax:</span>
              <span>₹{orderSummary.tax}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>₹{orderSummary.total}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
