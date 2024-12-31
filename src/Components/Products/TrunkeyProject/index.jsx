import React from 'react'
import { CommonHeader, Navigation } from '../../../ReusableComponents'
import PackageDrinking from './PackageDrinking';
import { Container } from '../../../Basics';

const TrunkeyProject = () => {
  return (
    <main>
      <CommonHeader
        head="Packaged Drinking Water Turnkey Project"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="RO Based Water Treatment Plant" />

      <Container classname1={"my-24"}>
        <PackageDrinking />
      </Container>
    </main>
  )
}

export default TrunkeyProject;