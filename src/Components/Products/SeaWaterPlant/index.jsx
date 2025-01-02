import React from "react";
import { CommonHeader, Navigation } from "../../../ReusableComponents";
import { Container } from "../../../Basics";
import Info from "./Info";

const SeaWaterPlant = () => {
  return (
    <main>
      <CommonHeader
        head="Sea Water Plant"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="Sea Water Plant" />

      <Container classname1={"my-24"}>
        <Info />
      </Container>
    </main>
  );
};

export default SeaWaterPlant;
