import React from "react";
import { Container } from "../../../Basics";
import { Heading, ItalicSubHead } from "../../../ReusableComponents";
import { playBtn, videoShort, bg2 } from "../../../assets";

const ModernTech = () => {
  return (
    <main
      className="h-auto bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg2})`,
      }}
    >
      <Container
        classname1="py-24 bg-[#030f25]/80"
        classname2="xl:grid grid-cols-[53%_42%] gap-16"
      >
        <figure className="cursor-pointer flex items-center justify-center relative">
          <img src={videoShort} alt="Video" className="w-[50%] xl:w-full" />
          <img src={playBtn} className="absolute top-[35%] left-[46%] xl:top-[40%] xl:left-[44%] w-20 h-20" />
          <div className="w-[50%] xl:w-full h-full absolute top-0 bg-black opacity-[45%] hover:opacity-[30%] transition-all duration-500"></div>
        </figure>
        <div className="w-full mt-5 xl:mt-0">
          <Heading text="Modern Technology __" dark={true} />
          <ItalicSubHead
            dark={true}
            subHead="We are adopting latest technology and effective communication for better service support.."
          />
          <p className="text-gray-200 my-3">
            H2o Ion Exchange is Fast Growing Company in Water and Waste water
            Treatment field. We are Manufacturers and suppliers of water
            Treatment plants, Mineral Water Plant, R.O. Plant, Reverse Osmosis
            System, Sea Water desalination Plant, Desalination Plant, Bottled
            Water Plant, Filtration System, Water Softening Plant,
            Demineralization Plant.
          </p>
        </div>
      </Container>
    </main>
  );
};

export default ModernTech;
