import React from 'react'
import { Container } from '../../../../../Basics';
import PurifiedWater from '../../../AddedMinerals/PurifiedWater';
import { CommonHeader, Navigation } from '../../../../../ReusableComponents';
import Sewage from './Sewage';


const Effluenttreatment = () => {
  return (
    <main>
      <CommonHeader
        head="Effluent Treatment Plant / Sewage Treatment Plant"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="Effluent Treatment Plant / Sewage Treatment Plant" />

      <Container classname1={"my-24"}>
        {/* Left */}
        <Sewage />
      </Container>
    </main>
  )
}

export default Effluenttreatment;