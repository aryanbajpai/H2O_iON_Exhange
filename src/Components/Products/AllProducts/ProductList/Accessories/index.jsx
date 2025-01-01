import React from 'react'
import { Container } from '../../../../../Basics';
import PurifiedWater from '../../../AddedMinerals/PurifiedWater';
import { CommonHeader, Navigation } from '../../../../../ReusableComponents';


const Accessories = () => {
  return (
    <main>
      <CommonHeader
        head="ACCESSORIES"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="ACCESSORIES" />

      <Container classname1={"my-24"}>
        {/* Left */}
        <PurifiedWater />
      </Container>
    </main>
  )
}

export default Accessories;