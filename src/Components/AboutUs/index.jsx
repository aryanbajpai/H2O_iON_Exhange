import React from "react";
import {
  CommonHeader,
  ContactBanner,
  Heading,
  Navigation,
} from "../../ReusableComponents";
import { aboutUs, aboutUsBg } from "../../assets";
import { Container } from "../../Basics";
import { paragraphs } from "../../db/dummyData";
import ClientSpeaks from "./ClientSpeaks";

const AboutUs = () => {
  return (
    <main>
      <CommonHeader
        head="About Us"
        tail='"Nothing in the world is more flexible and yielding then water"'
        bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="About Us" />

      {/* BODY */}
      <Container classname1={"py-24"} classname2={"flex gap-20"}>
        <figure className="w-[35%]">
          <img src={aboutUs} alt="About Us" className="w-full h-full" />
        </figure>
        <div className="w-[65%]">
          <Heading text="About Us" span="__" />
          <p className="my-7 text-[#626262]">
            H2O Technologies Pvt Ltd. has been in water industry since last 5
            years. The company deals in cleaning chemical, domestic, commercial
            & industrial water purification system.
          </p>
          <div className="w-full h-[1px] bg-gray-200"></div>
          {paragraphs?.map((p) => (
            <p key={p?.id} className="my-7 text-[#626262]">
              {p?.para}
            </p>
          ))}
        </div>
      </Container>

      <ContactBanner
        small="It is leading and fast growing company in water industry. The company's motto is to supply the kind of water treatment system that deliver the mysteriously enchanting high purified filtered drinking water that is un-definable and it's a just near to Pure Magic."
        big1="IF  YOU HAVE ANY EMERGENCY WATER SYSTEM NEED,"
        big2="SIMPLY CALL OUR 24 HOUR EMERGENCY WATER SYSTEM"
        contact="+079-29095355"
      />
      <ClientSpeaks />
    </main>
  );
};

export default AboutUs;
