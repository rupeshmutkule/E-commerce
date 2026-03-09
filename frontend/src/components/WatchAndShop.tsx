'use client'

import { useEffect } from 'react'

export default function WatchAndShop() {
  useEffect(() => {
    // Load Lively video shopping script
    const script = document.createElement('script')
    script.src = 'https://video.lively.li/LIVELY_SF_FEED.js'
    script.type = 'module'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div>
      <h1 className="title-head section-title">
        <span>Watch & Shop</span>
      </h1>
      <div 
        className="render_lively_html_content" 
        brand_id="b937c8b85a" 
        flow="h0kl3" 
        wid_id="1fd86d3760"
      >
      </div>
    </div>
  )
}
