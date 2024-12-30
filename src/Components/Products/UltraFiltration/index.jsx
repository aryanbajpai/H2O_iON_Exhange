import React from 'react'
import { CommonHeader, Navigation } from '../../../ReusableComponents'

const UltraFiltration = () => {
  return (
    <main>
      <CommonHeader
        head="ULTRA FILTRATION WATER TREATMENT PLANT"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="RO Based Water Treatment Plant" />
    </main>
  )
}

export default UltraFiltration;