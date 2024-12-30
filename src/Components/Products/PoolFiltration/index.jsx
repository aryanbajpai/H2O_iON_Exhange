import React from 'react'
import { CommonHeader, Navigation } from '../../../ReusableComponents'

const PoolFiltration = () => {
  return (
    <main>
      <CommonHeader
        head="Swimming Pool Filtration Plant"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="RO Based Water Treatment Plant" />
    </main>
  )
}

export default PoolFiltration;