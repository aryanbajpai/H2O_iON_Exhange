import React from 'react'
import { CommonHeader, Navigation } from '../../../ReusableComponents'
import { Container } from '../../../Basics'
import AutomaticTreatment from './AutomaticTreatment'

const FullyAutomatic = () => {
  return (
    <main>
      <CommonHeader
        head="RO Based Water Treatment Plant"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="RO Based Water Treatment Plant" />

      <Container classname1={"my-24"}>
        {/* Left */}
        <AutomaticTreatment />
      </Container>
    </main>
  )
}

export default FullyAutomatic