'use client'

import { useSlickSlider } from '@/hooks/useSlickSlider'

export default function DealsOfTheMonth() {
  useSlickSlider('.deals-slider', {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })

  const deals = [
    {
      id: 1,
      title: 'Aureolin Luxurious Drape Cushion Cover',
      price: 1439,
      originalPrice: 3599,
      discount: '60% OFF',
      image: '/images/deal-cushion-aureolin.jpg',
      link: '/aureolin-luxurious-drape-cushion-cover',
      endDate: 'Wed, 11th Mar'
    },
    {
      id: 2,
      title: 'Flight of Birds Dinner Plate',
      price: 559,
      originalPrice: 1399,
      discount: '60% OFF',
      image: '/images/deal-plate-birds.jpg',
      link: '/flight-of-birds-dinner-plate',
      endDate: 'Wed, 11th Mar'
    },
    {
      id: 3,
      title: 'Garden Hi-Tea Cushion Cover Set of 5',
      price: 799,
      originalPrice: 1999,
      discount: '60% OFF',
      image: '/images/deal-cushion-garden.jpg',
      link: '/garden-hi-tea-cushion-cover-set-of-5',
      endDate: 'Wed, 11th Mar'
    },
    {
      id: 4,
      title: 'Abstract Camellia Cushion Cover Set of 5',
      price: 799,
      originalPrice: 1999,
      discount: '60% OFF',
      image: '/images/deal-cushion-camellia.jpg',
      link: '/abstract-camellia-cushion-cover-set-of-5',
      endDate: 'Wed, 11th Mar'
    },
    {
      id: 5,
      title: 'Aureolin Luxurious Drape Cushion Cover',
      price: 1439,
      originalPrice: 3599,
      discount: '60% OFF',
      image: '/images/deal-cushion-aureolin.jpg',
      link: '/aureolin-luxurious-drape-cushion-cover',
      endDate: 'Wed, 11th Mar'
    },
    {
      id: 6,
      title: 'Flight of Birds Dinner Plate',
      price: 559,
      originalPrice: 1399,
      discount: '60% OFF',
      image: '/images/deal-plate-birds.jpg',
      link: '/flight-of-birds-dinner-plate',
      endDate: 'Wed, 11th Mar'
    }
  ]

  return (
    <div className="deals-of-month-section">
      <div className="deals-wrapper">
        <div className="deals-left-banner">
          <a href="/monthly-deals.html">
            <img 
              src="/images/DOM_16_02_26.jpg" 
              alt="Deals of the Month"
              width={400}
              height={600}
            />
          </a>
        </div>
        <div className="deals-slider-wrapper">
          <div className="deals-slider">
            {deals.map((deal) => (
              <div key={deal.id} className="deal-card">
                <a href={deal.link}>
                  <div className="deal-card-image">
                    <span className="discount-badge">{deal.discount}</span>
                    <img 
                      src={deal.image} 
                      alt={deal.title}
                      width={300}
                      height={300}
                    />
                    <button className="deal-cart-btn" aria-label="Add to cart">
                      <img src="/images/add-to-cart-1.png" alt="cart" width={16} height={16} />
                    </button>
                  </div>
                  <div className="deal-card-content">
                    <h3 className="deal-title">{deal.title}</h3>
                    <div className="deal-price">
                      <span className="current-price">₹{deal.price}</span>
                      <span className="original-price">₹{deal.originalPrice}</span>
                    </div>
                    <div className="deal-timer">
                      <span className="timer-icon"></span>
                      <span className="timer-text">Get it by: {deal.endDate}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
