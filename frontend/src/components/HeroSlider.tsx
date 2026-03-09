'use client'

import { useSlickSlider } from '@/hooks/useSlickSlider'

const slides = [
  {
    id: 1,
    href: '/sales/clearance-sale',
    webImg: 'https://icmedianew.gumlet.io/pub/media/home_banner/main_slider/Summer-Specials-02.03.2026.webp',
    mobImg: 'https://icmedianew.gumlet.io/pub/media/home_banner/main_slider/Summer-Specials_Mob-02.03.2026.jpg',
    alt: 'Summer Specials'
  },
  {
    id: 2,
    href: '/conscious-collective',
    webImg: 'https://icmedianew.gumlet.io/pub/media/home_banner/main_slider/NGCPR-Banner-02.01.2026.webp',
    mobImg: 'https://icmedianew.gumlet.io/pub/media/home_banner/main_slider/NGCPR_Mob-02.01.2026.jpg',
    alt: 'Conscious Collective'
  }
]

export default function HeroSlider() {
  useSlickSlider('.home-hero-slider', {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  })

  return (
    <div className="home-hero-slider">
      {slides.map((slide) => (
        <div key={slide.id} className="home-hero-slide">
          <a href={slide.href}>
            <img className="web-img" src={slide.webImg} alt={slide.alt} />
            <img className="mob-img" src={slide.mobImg} alt={slide.alt} />
          </a>
        </div>
      ))}
    </div>
  )
}
