'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="product-gallery">
      <div className="main-image">
        <Image 
          src={images[selectedImage]} 
          alt={productName}
          width={600}
          height={600}
          priority
        />
      </div>
      
      <div className="thumbnail-list">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
          >
            <Image 
              src={image} 
              alt={`${productName} ${index + 1}`}
              width={80}
              height={80}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
