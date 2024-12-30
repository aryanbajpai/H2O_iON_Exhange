import React from 'react'
import { CommonHeader, Navigation } from '../../../ReusableComponents'

const DMPlant = () => {
  return (
    <main>
      <CommonHeader
        head="DM PLANT & FILTRATION PLANT"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="RO Based Water Treatment Plant" />
    </main>
  )
}

export default DMPlant;