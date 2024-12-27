import React from "react";
import { aboutUsBg } from "../../assets";
import { CommonHeader, Navigation } from "../../ReusableComponents";
import MainServices from "./MainServices";

const ServicesComponent = () => {
  return (
    <div>
      <CommonHeader
        head="Services"
        tail="The Plumbing has been in business since 1978"
        bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="Services" />
      <MainServices/>
    </div>
  );
};

export default ServicesComponent;
