'use client'

import { useState } from 'react'

export default function CustomerAccount() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <main className="customer-account-page">
      <div className="container">
        <h1>My Account</h1>
        {!isLoggedIn ? (
          <div className="login-section">
            <p>Please log in to view your account.</p>
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          </div>
        ) : (
          <div className="account-details">
            <h2>Account Information</h2>
            <p>Welcome back!</p>
          </div>
        )}
      </div>
    </main>
  )
}
