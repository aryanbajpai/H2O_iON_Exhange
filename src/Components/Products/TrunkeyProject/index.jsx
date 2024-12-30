import React from 'react'
import { CommonHeader, Navigation } from '../../../ReusableComponents'

const TrunkeyProject = () => {
  return (
    <main>
      <CommonHeader
        head="Packaged Drinking Water Turnkey Project"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="RO Based Water Treatment Plant" />
    </main>
  )
}

export default TrunkeyProject;