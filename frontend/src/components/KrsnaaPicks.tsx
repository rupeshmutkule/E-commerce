'use client'

import { useSlickSlider } from '@/hooks/useSlickSlider'

export default function KrsnaaPicks() {
  useSlickSlider('.krsnaa-picks-section .right-trending', {
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
    <div className="trending-section krsnaa-picks-section">
      <div className="section-title"><span>Krsnaa&apos;s Picks</span></div>
      <div className="trending-wrapper">
        <div className="left-trending">
          <a className="left-trending-link" href="/krsnaa-style-picks">
            <img 
              title="Krsnaa Picks" 
              src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-left_KP-04.02.2026.jpg" 
              alt="Buy Products of Krsnaa Picks Online"
            />
          </a>
        </div>
        <div className="right-trending">
          <div className="right-trending-slide">
            <a href="/dining/copper-steel-showcase">
              <img 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider_KP-copper-04.02.2026.jpg" 
                alt="Buy Copper Online"
              />
            </a>
          </div>
          <div className="right-trending-slide">
            <a href="/home-decor/multi-utility-storages/tissue-box-holders">
              <img 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider_KP-tissuebox-04.02.2026.jpg" 
                alt="Buy Tissue Box Online"
              />
            </a>
          </div>
          <div className="right-trending-slide">
            <a href="/home-decor/wall-decor/wall-art">
              <img 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider_KP-wall-art-04.02.2026.jpg" 
                alt="Buy Wall Art Online"
              />
            </a>
          </div>
          <div className="right-trending-slide">
            <a href="/dining/serveware/trays">
              <img 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider_KP-trays-04.02.2026.jpg" 
                alt="Buy Trays Online"
              />
            </a>
          </div>
          <div className="right-trending-slide">
            <a href="/home-decor/furniture/all-furniture">
              <img 
                src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Trending-Slider_KP-furniture-04.02.2026.jpg" 
                alt="Buy Furniture Online"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
