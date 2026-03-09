import HeroSlider from '@/components/HeroSlider'
import DealsOfTheMonth from '@/components/DealsOfTheMonth'
import WhatsNew from '@/components/WhatsNew'
import TrendingSection from '@/components/TrendingSection'
import GiftingBanner from '@/components/GiftingBanner'
import BestSeller from '@/components/BestSeller'
import KrsnaaPicks from '@/components/KrsnaaPicks'
import ShopByDesign from '@/components/ShopByDesign'
import WatchAndShop from '@/components/WatchAndShop'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="upgrade-wrapper">
      <div className="home-layout">
        <HeroSlider />
        <DealsOfTheMonth />
        <WhatsNew />
        <TrendingSection />
        <GiftingBanner />
        <BestSeller />
        <KrsnaaPicks />
        <ShopByDesign />
        <WatchAndShop />
        <Testimonials />
      </div>
    </main>
  )
}
