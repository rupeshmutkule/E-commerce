export default function ShopByDesign() {
  return (
    <>
      <div className="sustainable-products">
        <img 
          className="web-img" 
          src="https://icmedianew.gumlet.io/pub/media//home_banner/images/Sustainable-Products-04.02.2026.jpg" 
          alt="sustainable-products" 
        />
        <img 
          className="mob-img" 
          src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Sustainble-Products_mob-04.02.2026.jpg" 
          alt="sustainable-products" 
        />
        <a href="/dining/sustainable-products" className="sustainable-link"></a>
        <a href="/dining/sustainable-products" className="sustainable-link sustainable-link1"></a>
      </div>

      <div className="bydesign-locator">
        <div className="bydesign-locator-img">
          <img 
            src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Store-Locator-07.05.2025.jpg?v=1" 
            alt="bydesign" 
          />
          <a className="bydesign-locator-link" href="/new-delhi-store"></a>
        </div>
        <div className="bydesign-locator-img">
          <img 
            src="https://icmedianew.gumlet.io/pub/media/home_banner/images/Shop-by-design-30.05.2025.jpg?v=1" 
            alt="bydesign" 
          />
          <a className="bydesign-locator-link" href="/shop-by-design"></a>
        </div>
      </div>
    </>
  )
}
