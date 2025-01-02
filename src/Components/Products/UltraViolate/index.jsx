import React from 'react'
import { CommonHeader, Navigation } from '../../../ReusableComponents'
import { Container } from '../../../Basics';
import Uvwt from './Uvwt';

const UltraViolate = () => {
  return (
    <main>
      <CommonHeader
        head="ULTRA VIOLATE WATER TREATMENT PLANT"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="ULTRA VIOLATE WATER TREATMENT PLANT" />

      <Container classname1={"my-24"}>
        <Uvwt />
      </Container>
    </main>
  )
}

export default UltraViolate;