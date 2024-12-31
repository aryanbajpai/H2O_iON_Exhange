import React from "react";
import { CommonHeader, Navigation } from "../../../ReusableComponents";
import { Container } from "../../../Basics";
import SwimmingPool from "./SwimmingPool";

const PoolFiltration = () => {
  return (
    <main>
      <CommonHeader
        head="Swimming Pool Filtration Plant"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="RO Based Water Treatment Plant" />

      <Container classname1={"my-24"}>
        <SwimmingPool />
      </Container>
    </main>
  );
};

export default PoolFiltration;
