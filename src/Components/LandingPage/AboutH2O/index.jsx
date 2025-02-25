import React from "react";
import { ItalicSubHead, Heading } from "../../../ReusableComponents";
import { aboutH2O } from "../../../db/dummyData";
import { Container } from "../../../Basics";
import { rgbBg } from "../../../assets";

const AboutH2O = () => {
  return (
    <Container classname1={"relative"}>
      <>
        <section className="w-full lg:grid grid-cols-2 gap-5 py-24">
          <div className="pr-10">
            <Heading text="About" span="H2O Exchange" />
            <ItalicSubHead subHead="The water treatment company" />
            <p className="text-gray-400 my-3">
              We provide peace-of-mind solutions by effectively handling your
              contamination, operational problems, so as for you to pursue your
              core competence, the business of manufacturing.
            </p>
            <p className="text-gray-400 my-3">
              H2O Exchange is a technology driven Engineering, assembling
              Commissioning company presenting a single source for advanced
              water treatment technologies used internationally.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-10 lg:mt-0">
            {aboutH2O?.map((aboutH2O, index) => (
              <div key={index}>
                <figure className="w-full h-[150px] mb-5">
                  <img
                    src={aboutH2O?.img}
                    className="w-full h-full object-contain"
                  />
                </figure>
                <p className="text-[#383838] text-xl font-bold py-2">
                  {aboutH2O?.title}
                </p>
                <p className="text-gray-500 pb-2">{aboutH2O?.para}</p>
                <p className="text-red-500 font-semibold cursor-pointer">
                  Read more..{" >>"}
                </p>
              </div>
            ))}
          </div>
        </section>
        <img
          src={rgbBg}
          alt="Empty Frame"
          className="object-cover absolute w-full bottom-0 left-0 -z-20 opacity-[40%]"
        />
      </>
    </Container>
  );
};

export default AboutH2O;
