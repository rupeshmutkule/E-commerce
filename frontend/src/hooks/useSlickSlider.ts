import { useEffect, useRef } from 'react'

interface ResponsiveSettings {
  breakpoint: number
  settings: {
    slidesToShow?: number
    slidesToScroll?: number
    dots?: boolean
    arrows?: boolean
  }
}

interface SlickSettings {
  dots?: boolean
  infinite?: boolean
  speed?: number
  slidesToShow?: number
  slidesToScroll?: number
  autoplay?: boolean
  autoplaySpeed?: number
  arrows?: boolean
  prevArrow?: string
  nextArrow?: string
  responsive?: ResponsiveSettings[]
}

export function useSlickSlider(selector: string, settings: SlickSettings) {
  const initialized = useRef(false)

  useEffect(() => {
    let attempts = 0
    const maxAttempts = 50 // Try for 5 seconds

    const initSlider = () => {
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn && (window as any).$.fn.slick) {
        const $slider = (window as any).$(selector)
        
        if ($slider.length && !$slider.hasClass('slick-initialized') && !initialized.current) {
          try {
            $slider.slick(settings)
            initialized.current = true
          } catch (error) {
            console.error('Slick initialization error:', error)
          }
        }
      } else if (attempts < maxAttempts) {
        attempts++
        setTimeout(initSlider, 100)
      }
    }

    // Start initialization
    setTimeout(initSlider, 100)

    return () => {
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn && (window as any).$.fn.slick) {
        const $slider = (window as any).$(selector)
        if ($slider.length && $slider.hasClass('slick-initialized')) {
          try {
            $slider.slick('unslick')
          } catch (error) {
            console.error('Slick cleanup error:', error)
          }
        }
      }
      initialized.current = false
    }
  }, [selector, settings])
}
