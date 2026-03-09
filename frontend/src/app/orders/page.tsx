'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Order {
  id: string
  date: string
  total: number
  status: 'pending' | 'shipped' | 'delivered'
  items: number
}

export default function OrdersPage() {
  const [orders] = useState<Order[]>([])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'green'
      case 'shipped': return 'blue'
      case 'pending': return 'orange'
      default: return 'gray'
    }
  }

  return (
    <main className="orders-page">
      <div className="container">
        <h1>My Orders</h1>
        
        {orders.length > 0 ? (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <span className="order-id">Order #{order.id}</span>
                  <span className="order-date">{order.date}</span>
                </div>
                <div className="order-body">
                  <p>{order.items} items</p>
                  <p className="order-total">₹{order.total}</p>
                  <span 
                    className="order-status"
                    style={{ color: getStatusColor(order.status) }}
                  >
                    {order.status.toUpperCase()}
                  </span>
                </div>
                <Link href={`/orders/${order.id}`} className="view-order-btn">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-orders">
            <p>You haven't placed any orders yet</p>
            <Link href="/">Start Shopping</Link>
          </div>
        )}
      </div>
    </main>
  )
}
