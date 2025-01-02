import React from 'react'
import { Container } from '../../../../../Basics';
import { CommonHeader, Navigation } from '../../../../../ReusableComponents';
import Greenz from '../../ProductList/Ozonator/Greenz';


const Ozonator = () => {
  return (
    <main>
      <CommonHeader
        head="OZONATOR / OXYGEN CONCENTRATOR – GREENZ"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="OZONATOR / OXYGEN CONCENTRATOR – GREENZ" />

      <Container classname1={"my-24"}>
        {/* Left */}
        <Greenz />
      </Container>
    </main>
  )
}

export default Ozonator;