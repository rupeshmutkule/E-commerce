import Image from 'next/image'

export default function ShopByDesign() {
  return (
    <>
      <div className="sustainable-products">
        <Image 
          className="web-img" 
          src="https://icmedianew.gumlet.io/pub/media//home_banner/images/Sustainable-Products-04.02.2026.jpg" 
          alt="sustainable-products"
          width={1920}
          height={400}
          unoptimized
        />
        <Image 
          className="mob-img" 
          src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Sustainble-Products_mob-04.02.2026.jpg" 
          alt="sustainable-products"
          width={750}
          height={600}
          unoptimized
        />
        <a href="/dining/sustainable-products" className="sustainable-link"></a>
        <a href="/dining/sustainable-products" className="sustainable-link sustainable-link1"></a>
      </div>

      <div className="bydesign-locator">
        <div className="bydesign-locator-img">
          <Image 
            src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Store-Locator-07.05.2025.jpg?v=1" 
            alt="bydesign"
            width={960}
            height={400}
            unoptimized
          />
          <a className="bydesign-locator-link" href="/new-delhi-store"></a>
        </div>
        <div className="bydesign-locator-img">
          <Image 
            src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Shop-by-design-30.05.2025.jpg?v=1" 
            alt="bydesign"
            width={960}
            height={400}
            unoptimized
          />
          <a className="bydesign-locator-link" href="/shop-by-design"></a>
        </div>
      </div>
    </>
  )
}

