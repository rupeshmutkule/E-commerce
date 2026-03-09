export default function BestSeller() {
  const bestSellers = [
    {
      href: '/blossomy-mosaic-rug-000283',
      image: 'https://icmedianew.gumlet.io/pub/media//home_banner/images/Best-Seller-rug01-06.11.2025.jpg',
      caption: 'RUG',
      alt: 'best-seller rug'
    },
    {
      href: '/chevron-palms-satin-blend-cushion-cover-set-of-5',
      image: 'https://icmedianew.gumlet.io/pub/media//home_banner/images/Best-Seller-cushion01-06.11.2025.jpg',
      caption: 'CUSHION COVER',
      alt: 'best-seller cushion'
    },
    {
      href: '/regal-romance-nikko-bowl-set-of-3',
      image: 'https://icmedianew.gumlet.io/pub/media//home_banner/images/Best-Seller-niko-bowl01-06.11.2025.jpg',
      caption: 'NIKKO BOWL',
      alt: 'best-seller bowl'
    },
    {
      href: '/bird-land-micro-velvet-bed-and-table-runner',
      image: 'https://icmedianew.gumlet.io/pub/media//home_banner/images/Best-Seller-runner01-06.11.2025.jpg',
      caption: 'TABLE RUNNER',
      alt: 'best-seller runner'
    }
  ]

  return (
    <div className="best-seller">
      <div className="section-title"><span>Best Seller</span></div>
      <div className="best-seller-wrapper">
        {bestSellers.map((item, index) => (
          <a key={index} href={item.href} className="best-seller-grid">
            <div className="best-seller-img">
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="best-seller-caption">{item.caption}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
