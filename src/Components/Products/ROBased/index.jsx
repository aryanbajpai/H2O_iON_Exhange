import React from 'react';
import { CommonHeader, Navigation } from '../../../ReusableComponents'
import { Container } from '../../../Basics';
import TreatmentPlants from './TreatmentPlants';

const ROBased = () => {
  return (
    <main>
      <CommonHeader
        head="RO Based Water Treatment Plant"
        tail='"Nothing in the world is more flexible and yielding then water""'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="RO Based Water Treatment Plant" />

      <Container classname1={"my-24"}>
        {/* Left */}
        <TreatmentPlants/>
      </Container>
    </main>
  )
}

export default ROBased