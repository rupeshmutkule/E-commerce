'use client'

import Image from 'next/image'
import { useSlickSlider } from '@/hooks/useSlickSlider'

export default function TrendingSection() {
  useSlickSlider('.trending-section .right-trending', {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  })

  return (
    <div className="trending-section">
      <div className="section-title"><span>Trending</span></div>
      <div className="trending-wrapper">
        <div className="left-trending">
          <a className="left-trending-link" href="/home-decor/wall-decor/feature-mural-walls">
            <Image 
              src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-left-Wallpaper-04.02.2026.jpg" 
              alt="Buy Wallpapers Online"
              width={600}
              height={800}
              unoptimized
            />
          </a>
        </div>
        <div className="right-trending">
          <div className="right-trending-slide">
            <a href="/home-decor/furniture/all-furniture">
              <Image 
                title="Furniture" 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider-Benches-04.02.2026.jpg" 
                alt="Buy Wooden Bench Online"
                width={600}
                height={800}
                unoptimized
              />
            </a>
          </div>
          <div className="right-trending-slide">
            <a href="/dining/mugs-cups-saucers/cup-saucers">
              <Image 
                title="Tea Set" 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider-Tea-Sets-04.02.2026.jpg" 
                alt="Buy Tea Set Online"
                width={600}
                height={800}
                unoptimized
              />
            </a>
          </div>
          <div className="right-trending-slide">
            <a href="/home-decor/floor-covering/rugs">
              <Image 
                title="Rugs" 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider-Rugs-04.02.2026.jpg" 
                alt="Buy Rugs Online"
                width={600}
                height={800}
                unoptimized
              />
            </a>
          </div>
          <div className="right-trending-slide">
            <a href="/home-decor/bed-bath-linen/bed-covers-bed-sheets">
              <Image 
                title="Bed Covers" 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider-Bed-Covers-04.02.2026.jpg" 
                alt="Buy Bed Covers Online"
                width={600}
                height={800}
                unoptimized
              />
            </a>
          </div>
          <div className="right-trending-slide">
            <a href="/dining/tumblers-glassware/steel-tumblers/glasses">
              <Image 
                title="Glasses" 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider-Champagne-Glasses-04.02.2026.jpg" 
                alt="Buy Glasses Online"
                width={600}
                height={800}
                unoptimized
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

