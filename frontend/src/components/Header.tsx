'use client'

import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="ic-header" id="header">
      <div className="ic-subheader">
        <div className="ic-left-subheader">
          <button className="menu-close"></button> A Godrej Enterprises Brand
          <div className="shipping-pincode-plot">
            Deliver to:
            <div className="pincode-slot">
              <div className="loc-icon">
                <img src="/images/location-white.png" alt="location" />
              </div>
              <span className="pincode_custom">400001</span>
            </div>
          </div>
        </div>
        <div className="ic-right-subheader">
          <ul className="ic-right-subheader-ul">
            <li className="ic-right-subheader-li">
              <a href="tel:02248931878" className="ic-right-subheader-link">
                <img src="/images/phone_black_top.png" alt="phone" />
                <span>02248931878 </span>
              </a>
              <span className="time-span">(Mon-Sat, 09:30-18:30 IST)</span>
            </li>
            <li className="ic-right-subheader-li">
              <a href="mailto:support@indiacircus.com" className="ic-right-subheader-link">
                <span>support@indiacircus.com</span>
              </a>
            </li>
            <li className="ic-right-subheader-li">
              <a href="https://www.facebook.com/indiacircus/" className="ic-right-subheader-link">
                <img src="/images/fb_top.png" alt="facebook" />
              </a>
            </li>
            <li className="ic-right-subheader-li">
              <a href="https://www.instagram.com/indiacircus/" className="ic-right-subheader-link">
                <img src="/images/instagram_top.png" alt="instagram" />
              </a>
            </li>
            <li className="ic-right-subheader-li">
              <a href="#" className="ic-right-subheader-link godrej-logo">
                <img src="/images/godrej2024logo.png" alt="godrej-logo" />
              </a>
            </li>
          </ul>
        </div>
        <div className="ic-right-mob-godrej">
          <img src="/images/godrej2024logo.png" alt="godrej-logo" />
        </div>
      </div>

      <nav className="ic-navbar">
        <div className="ic-responsive-topbar">
          <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="/" className="ic-logo">
            <img src="/images/logo_indiacircus_new.svg" alt="ic-logo" />
          </a>
          <div className="popup-overlay"></div>
          <div className={`menu-wrapper ${menuOpen ? 'open' : ''}`}>
            <div className="mobile-top-bar">
              <button className="close-menu" onClick={() => setMenuOpen(false)}></button> A Godrej Enterprises Brand
            </div>
            <ul className="ic-nav-list">
              <li className="ic-nav-li"><a className="ic-nav-link" href="/new">new arrivals</a></li>
              
              <li className="ic-nav-li">
                <a className="ic-nav-link mob-link" data-href="homedecor">HOME DECOR<span className="arrow">&nbsp;</span></a>
                <a className="ic-nav-link web-link" href="/home-decor">HOME DECOR</a>
                <ul id="homedecor" className="ic-subnav-ul">
                  <li className="mobile-submenu-topbar"><button className="back-btn"></button> HOME DECOR <button className="close-btn"></button></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/cushion-cover">Cushion Covers</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/bed-bath-linen">Bedding</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/floor-covering">Floor Coverings</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/throws">Throws</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/curtain">Curtains</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/furniture/fabrics">Fabrics</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/multi-utility-storages">Storage & organisers</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/lamps">Lamps & Lanterns</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/Bath">Bath Accessories</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/candles-votives">Candle, Candle Holders & Votives</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/home-fragrances">Home Fragrances</a></li>
                </ul>
              </li>

              <li className="ic-nav-li">
                <a className="ic-nav-link mob-link" data-href="dining">DINING<span className="arrow">&nbsp;</span></a>
                <a className="ic-nav-link web-link" href="/dining">DINING</a>
                <ul id="dining" className="ic-subnav-ul">
                  <li className="mobile-submenu-topbar"><button className="back-btn"></button> DINING <button className="close-btn"></button></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/dining/tea-coffee">Mugs, cups & Saucers</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/dining/drinkware">Bottles,Jugs & Tumblers</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/multi-utility-storages/tissue-box-holders">Tissue Box Holders</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/dining/serveware">Trays</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/dining/bowls-platters">Bowls & Platters</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/dining/jars-containers">Jars & Containers</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/dining/table-runner-mats">Tableware</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/dining/dinnerware">Dinnerware</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/dining/dinnerware/dinner-set">Dinner Set</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/dining/lunch-box">Lunch Boxes</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/dining/bamboo-serveware">Bamboo Showcase</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/dining/copper-steel-showcase">Copper & Steel Showcase</a></li>
                </ul>
              </li>

              <li className="ic-nav-li">
                <a className="ic-nav-link mob-link" data-href="fashion">FASHION<span className="arrow">&nbsp;</span></a>
                <a className="ic-nav-link web-link" href="/fashion">FASHION</a>
                <ul id="fashion" className="ic-subnav-ul">
                  <li className="mobile-submenu-topbar"><button className="back-btn"></button> FASHION <button className="close-btn"></button></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/fashion-product/co-ord-sets">Co-ord Sets</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/fashion-product/shirts">Shirts</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/fashion-product/kurtis-kaftans">Kurtis & Kaftans</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/fashion-product/tops">Tops</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/fashion-product/stoles-dupattas">Scarfs</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/fashion-product/all-fashion">All Fashion</a></li>
                </ul>
              </li>

              <li className="ic-nav-li">
                <a className="ic-nav-link mob-link" data-href="accessories">ACCESSORIES<span className="arrow">&nbsp;</span></a>
                <a className="ic-nav-link web-link" href="/accessories">ACCESSORIES</a>
                <ul id="accessories" className="ic-subnav-ul">
                  <li className="mobile-submenu-topbar"><button className="back-btn"></button> ACCESSORIES <button className="close-btn"></button></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/accessories/bags">Bags & Sleeves</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/accessories/wallets">Wallets & Pouches</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/accessories/neck-pillow">Travel Pillows & Eye Masks</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/accessories/travel-tag">Travel Tag</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/accessories/pocket-mirror">Pocket Mirror</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/accessories/wrist-watches">Watches</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/accessories/stationery">Stationery</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/accessories/gift-bags">Gift Bags</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/accessories/umbrellas">Umbrella</a></li>
                </ul>
              </li>

              <li className="ic-nav-li">
                <a className="ic-nav-link mob-link" data-href="furniture">FURNITURE<span className="arrow">&nbsp;</span></a>
                <a className="ic-nav-link web-link" href="/furniture">FURNITURE</a>
                <ul id="furniture" className="ic-subnav-ul">
                  <li className="mobile-submenu-topbar"><button className="back-btn"></button> FURNITURE <button className="close-btn"></button></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/furniture/side-tables-and-multipurpose-stools">Table</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/furniture/ottomans-and-benches">Seating</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/furniture/all-furniture">All Furniture</a></li>
                </ul>
              </li>

              <li className="ic-nav-li">
                <a className="ic-nav-link mob-link" data-href="walldecor">WALL DECOR<span className="arrow">&nbsp;</span></a>
                <a className="ic-nav-link web-link" href="/wall-decor">WALL DECOR</a>
                <ul id="walldecor" className="ic-subnav-ul">
                  <li className="mobile-submenu-topbar"><button className="back-btn"></button> WALL DECOR <button className="close-btn"></button></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/wall-decor/feature-mural-walls">Feature Walls - <span className="menu-brand">Deewar-e-Khaas</span></a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/wall-decor/wallpapers-for-wall">Wallpapers for Wall - <span className="menu-brand">NIRVANA</span></a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/wall-decor/wallarts">Wall Arts</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/home-decor/decorative-platters">Wall Plates</a></li>
                </ul>
              </li>

              <li className="ic-nav-li">
                <a className="ic-nav-link mob-link" data-href="collections">COLLECTIONS<span className="arrow">&nbsp;</span></a>
                <a className="ic-nav-link web-link" href="#">Collections</a>
                <ul id="collections" className="ic-subnav-ul">
                  <li className="mobile-submenu-topbar"><button className="back-btn"></button> COLLECTIONS <button className="close-btn"></button></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/collections/twirling-tropics">Twirling Tropics</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/dining/bamboo-showcase">Bamboo Showcase</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/dining/copper-steel-showcase">Copper & Steel Showcase</a></li>
                  <li className="ic-subnav-li"><a className="ic-nav-sublink" href="/conscious-collective">Conscious Collective</a></li>
                </ul>
              </li>

              <li className="ic-nav-li"><a className="ic-nav-link pink-text" href="/gifting">Gifting</a></li>
              <li className="ic-nav-li"><a className="ic-nav-link blinker" href="/sales/clearance-sale">Summer Special</a></li>
              <li className="ic-nav-li"><a className="ic-nav-link pink-text" href="/monthly-deals">Monthly Deals</a></li>
            </ul>
          </div>
          <div className="ic-right-nav">
            <div className="right-nav-plot">
              <button className="search-btn" onClick={() => setSearchOpen(!searchOpen)}></button>
            </div>
            <div className="right-nav-plot">
              <button className="login-btn"></button>
            </div>
            <div className="right-nav-plot cart">
              <button className="cart-btn">
                <span className="cart-count">0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
