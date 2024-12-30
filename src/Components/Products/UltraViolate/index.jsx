import React from 'react'
import { CommonHeader, Navigation } from '../../../ReusableComponents'

const UltraViolate = () => {
  return (
    <main>
      <CommonHeader
        head="ULTRA VIOLATE WATER TREATMENT PLANT"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="RO Based Water Treatment Plant" />
    </main>
  )
}

export default UltraViolate;