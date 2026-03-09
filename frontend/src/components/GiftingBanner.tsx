import Image from 'next/image'

export default function GiftingBanner() {
  return (
    <>
      <div className="gift-999">
        <Image 
          className="web-img" 
          src="https://icmedianew.gumlet.io/pub/media/home_banner/images/corporate-Gifting-06.11.2025.jpg" 
          alt="gift-999"
          width={1920}
          height={400}
          unoptimized
        />
        <Image 
          className="mob-img" 
          src="https://icmedianew.gumlet.io/pub/media/home_banner/images/corporatr-Gifting_mob-06.11.2025.jpg" 
          alt="gift-999"
          width={750}
          height={600}
          unoptimized
        />
        <a href="/indiacircus-gift-card" className="gift-999-link"></a>
        <a href="/gifting-home-page" className="gift-999-link corporate-link"></a>
      </div>
      
      <div className="press-franchisee">
        <div className="press-franchisee-img">
          <a className="Corporate Gifting" href="/corporate">
            <Image 
              className="web-img" 
              src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Corporate-Gifting-19.05.2025.jpg?v=1" 
              alt="press"
              width={960}
              height={400}
              unoptimized
            />
            <Image 
              className="mob-img" 
              src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Corporate-Gifting_Mob-19.05.2025.jpg?v=1" 
              alt="Corporate Gifting"
              width={750}
              height={600}
              unoptimized
            />
          </a>
        </div>
        <div className="press-franchisee-img">
          <a className="Business" href="/retail-business-enquiry">
            <Image 
              className="web-img" 
              src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Business-Partners-19.05.2025.jpg?v=1" 
              alt="franchisee"
              width={960}
              height={400}
              unoptimized
            />
            <Image 
              className="mob-img" 
              src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Business-Partners_Mob-19.05.2025.jpg?v=1" 
              alt="Business Partner"
              width={750}
              height={600}
              unoptimized
            />
          </a>
        </div>
      </div>
    </>
  )
}

