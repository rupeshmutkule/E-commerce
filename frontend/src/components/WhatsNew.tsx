'use client'

import Image from 'next/image'
import { useSlickSlider } from '@/hooks/useSlickSlider'

export default function WhatsNew() {
  useSlickSlider('.whatsnew-slider', {
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
    <div className="whatsnew-section">
      <div className="section-title"><span>What&apos;s New</span></div>
      <div className="whatsnew-wrapper">
        <div className="left-section">
          <div className="whatsnew-slider">
            <div className="whatsnew-slide">
              <a className="whatsnew-link" href="/home-decor/cushion-cover/set-of-5-cushion-cover">
                <Image src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Whats-new-left-cushion-cover-04.02.2026.jpg?v=1" alt="Buy Cushion Covers Set of 5 Online" width={600} height={800} unoptimized />
              </a>
            </div>
            <div className="whatsnew-slide">
              <a className="whatsnew-link" href="/home-decor/cushion-cover/embroidered-cushion-covers">
                <Image src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Whats-new-left-cushion-embroided-04.02.2026.jpg?v=1" alt="Buy Embroidered Cushion Covers Online" width={600} height={800} unoptimized />
              </a>
            </div>
            <div className="whatsnew-slide">
              <a className="whatsnew-link" href="/home-decor/cushion-cover/solid-cushion-covers">
                <Image src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Whats-new-left-cushion-cotton-04.02.2026.jpg?v=1" alt="Buy Solid Cushion Covers Online" width={600} height={800} unoptimized />
              </a>
            </div>
            <div className="whatsnew-slide">
              <a className="whatsnew-link" href="/home-decor/cushion-cover/quilted-cushion-cover">
                <Image src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Whats-new-left-cushion-velvet-04.02.2026.jpg?v=1" alt="Buy Printed Cushion Covers Online" width={600} height={800} unoptimized />
              </a>
            </div>
            <div className="whatsnew-slide">
              <a className="whatsnew-link" href="/home-decor/cushion-cover/decorative-cushion-covers">
                <Image src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Whats-new-left-cushion-NGCPR-04.02.2026.jpg?v=1" alt="Buy NGCPR Cushion Covers Online" width={600} height={800} unoptimized />
              </a>
            </div>
          </div>
          <div className="new-plot">
            <div className="new-plot-img">
              <a href="/accessories/bags/embroidered-bags">
                <Image title="Clutch" src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Whats-new-middle-Embroidered-Clutch-04.02.2026.jpg?v=1" alt="Buy Oval Platter Online" width={400} height={400} unoptimized />
              </a>
            </div>
            <div className="new-plot-img">
              <a href="/dining/lunch-box">
                <Image title="Lunch Box" src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Whats-new-middle-Lunch-Box-04.02.2026.jpg" alt="Buy Roti Box Online" width={400} height={400} unoptimized />
              </a>
            </div>
          </div>
        </div>
        <div className="right-section">
          <a className="whatsnew-link" href="/dining/dinnerware">
            <Image src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Whats-new-right-Dinnerware-04.02.2026.jpg?v=1" alt="Buy Dinnerware online" width={600} height={800} unoptimized />
          </a>
        </div>
      </div>
    </div>
  )
}
