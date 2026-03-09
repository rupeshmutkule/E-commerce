'use client'

import { useState } from 'react'

interface Size {
  id: number
  name: string
  available: boolean
}

interface SizeSelectorProps {
  sizes: Size[]
  onSelect: (sizeId: number) => void
}

export default function SizeSelector({ sizes, onSelect }: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null)

  const handleSelect = (sizeId: number, available: boolean) => {
    if (available) {
      setSelectedSize(sizeId)
      onSelect(sizeId)
    }
  }

  return (
    <div className="size-selector">
      <h3>Select Size</h3>
      <div className="size-options">
        {sizes.map((size) => (
          <button
            key={size.id}
            onClick={() => handleSelect(size.id, size.available)}
            disabled={!size.available}
            className={`size-option ${selectedSize === size.id ? 'selected' : ''} ${!size.available ? 'disabled' : ''}`}
          >
            {size.name}
          </button>
        ))}
      </div>
    </div>
  )
}
