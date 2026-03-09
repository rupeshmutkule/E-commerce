'use client'

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
            <img 
              src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-left-Wallpaper-04.02.2026.jpg" 
              alt="Buy Wallpapers Online" 
            />
          </a>
        </div>
        <div className="right-trending">
          <div className="right-trending-slide">
            <a href="/home-decor/furniture/all-furniture">
              <img 
                title="Furniture" 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider-Benches-04.02.2026.jpg" 
                alt="Buy Wooden Bench Online"
              />
            </a>
          </div>
          <div className="right-trending-slide">
            <a href="/dining/mugs-cups-saucers/cup-saucers">
              <img 
                title="Tea Set" 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider-Tea-Sets-04.02.2026.jpg" 
                alt="Buy Tea Set Online"
              />
            </a>
          </div>
          <div className="right-trending-slide">
            <a href="/home-decor/floor-covering/rugs">
              <img 
                title="Rugs" 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider-Rugs-04.02.2026.jpg" 
                alt="Buy Rugs Online"
              />
            </a>
          </div>
          <div className="right-trending-slide">
            <a href="/home-decor/bed-bath-linen/bed-covers-bed-sheets">
              <img 
                title="Bed Covers" 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider-Bed-Covers-04.02.2026.jpg" 
                alt="Buy Bed Covers Online"
              />
            </a>
          </div>
          <div className="right-trending-slide">
            <a href="/dining/tumblers-glassware/steel-tumblers/glasses">
              <img 
                title="Glasses" 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider-Champagne-Glasses-04.02.2026.jpg" 
                alt="Buy Glasses Online"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
