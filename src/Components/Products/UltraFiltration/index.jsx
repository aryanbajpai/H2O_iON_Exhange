import React from 'react'
import { CommonHeader, Navigation } from '../../../ReusableComponents'
import { Container } from '../../../Basics';
import Ufwt from './Ufwt';

const UltraFiltration = () => {
  return (
    <main>
      <CommonHeader
        head="ULTRA FILTRATION WATER TREATMENT PLANT"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}0000
        headBanner={true}
      />
      <Navigation child="RO Based Water Treatment Plant" />

      <Container classname1={"my-24"}>
        <Ufwt />
      </Container>
    </main>
  )
}

export default UltraFiltration;