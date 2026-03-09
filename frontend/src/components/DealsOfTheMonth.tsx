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
      image: 'https://icmedianew.gumlet.io/pub/media/catalog/product/cache/8146ef1b96804dd4246ef773e8951496/52121512SD01698/India-Circus-by-Krsnaa-Mehta-Aureolin-Luxurious-Drape-12-x-12-Cushion-Cover-52121512SD01698-2.jpg',
      link: '/aureolin-luxurious-drape-cushion-cover',
      endDate: 'Wed, 11th Mar'
    },
    {
      id: 2,
      title: 'Flight of Birds Dinner Plate',
      price: 559,
      originalPrice: 1399,
      discount: '60% OFF',
      image: 'https://icmedianew.gumlet.io/pub/media/catalog/product/cache/8146ef1b96804dd4246ef773e8951496/i/n/india-circus-by-krsnaa-mehta-flight-of-birds-dinner-plate-52152000sd02228-2.jpg',
      link: '/flight-of-birds-dinner-plate',
      endDate: 'Wed, 11th Mar'
    },
    {
      id: 3,
      title: 'Garden Hi-Tea Cushion Cover Set of 5',
      price: 799,
      originalPrice: 1999,
      discount: '60% OFF',
      image: 'https://icmedianew.gumlet.io/pub/media/catalog/product/cache/8146ef1b96804dd4246ef773e8951496/i/n/india-circus-by-krsnaa-mehta-garden-hi-tea-12-x-12-cushion-cover-set-of-5-52121512sd01766-1.jpg',
      link: '/garden-hi-tea-cushion-cover-set-of-5',
      endDate: 'Wed, 11th Mar'
    },
    {
      id: 4,
      title: 'Abstract Camellia Cushion Cover Set of 5',
      price: 799,
      originalPrice: 1999,
      discount: '60% OFF',
      image: 'https://icmedianew.gumlet.io/pub/media/catalog/product/cache/8146ef1b96804dd4246ef773e8951496/i/n/india-circus-by-krsnaa-mehta-abstract-camellia-12-x-12-cushion-cover-set-of-5-52121512sd01767-1.jpg',
      link: '/abstract-camellia-cushion-cover-set-of-5',
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
              onError={(e) => {
                console.error('Banner image failed to load');
                e.currentTarget.style.display = 'block';
              }}
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
                      onError={(e) => {
                        console.error(`Product image failed to load: ${deal.title}`);
                        e.currentTarget.style.display = 'block';
                      }}
                    />
                  </div>
                  <div className="deal-card-content">
                    <h3 className="deal-title">{deal.title}</h3>
                    <div className="deal-price">
                      <span className="current-price">₹{deal.price}</span>
                      <span className="original-price">₹{deal.originalPrice}</span>
                    </div>
                    <div className="deal-timer">
                      <span className="timer-icon">⏰</span>
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
