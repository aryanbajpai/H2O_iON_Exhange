import React from 'react'
import { Container } from '../../../../../Basics';
import PurifiedWater from '../../../AddedMinerals/PurifiedWater';
import { CommonHeader, Navigation } from '../../../../../ReusableComponents';


const Vessel = () => {
  return (
    <main>
      <CommonHeader
        head="Vessel"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="Vessel" />

      <Container classname1={"my-24"}>
        {/* Left */}
        <PurifiedWater />
      </Container>
    </main>
  )
}

export default Vessel;