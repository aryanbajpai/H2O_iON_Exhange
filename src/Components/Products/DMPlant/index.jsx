import React from "react";
import { CommonHeader, Navigation } from "../../../ReusableComponents";
import { Container } from "../../../Basics";
import FiltrationPlant from "./FiltrationPlant";

const DMPlant = () => {
  return (
    <main>
      <CommonHeader
        head="DM PLANT & FILTRATION PLANT"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="RO Based Water Treatment Plant" />

      <Container classname1={"my-24"}>
        <FiltrationPlant />
      </Container>
    </main>
  );
};

export default DMPlant;
