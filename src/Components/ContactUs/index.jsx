import React from "react";
import { aboutUsBg } from "../../assets";
import { CommonHeader, Navigation } from "../../ReusableComponents";
import GetInTouch from "./GetInTouch";

const ContactUs = () => {
  return (
    <div>
      <CommonHeader
        head="Contact Us"
        tail='"Nothing in the world is more flexible and yielding then water"'
        bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="Contact Us" />
      <GetInTouch/>
    </div>
  );
};

export default ContactUs;
