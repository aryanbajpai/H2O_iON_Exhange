import React from 'react'
import { CommonHeader, Navigation } from '../../../ReusableComponents'
import { Container } from '../../../Basics';
import PurifiedWater from './PurifiedWater';

const AddedMinerals = () => {
  return (
    <main>
      <CommonHeader
        head="ADDED MINERAL"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="ADDED MINERAL" />

      <Container classname1={"my-24"}>
        {/* Left */}
        <PurifiedWater />
      </Container>
    </main>
  )
}

export default AddedMinerals;