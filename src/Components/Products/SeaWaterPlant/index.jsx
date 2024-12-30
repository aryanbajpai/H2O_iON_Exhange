import React from 'react'
import { CommonHeader, Navigation } from '../../../ReusableComponents'

const SeaWaterPlant = () => {
  return (
    <main>
      <CommonHeader
        head="Sea Water Plant"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="RO Based Water Treatment Plant" />
    </main>
  )
}

export default SeaWaterPlant;