import React from "react";
import { CommonHeader, Navigation } from "../../../ReusableComponents";
import { Container } from "../../../Basics";
import SoftBaseTreatment from "./SoftBaseTreatment";

const SoftnerBased = () => {
  return (
    <main>
      <CommonHeader
        head="Softner Base Water Treatment Plant"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="Softner Base Water Treatment Plant" />

      <Container classname1={"my-24"}>
        <SoftBaseTreatment />
      </Container>
    </main>
  );
};

export default SoftnerBased;
