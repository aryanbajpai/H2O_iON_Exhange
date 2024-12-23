import React from "react";
import { Container } from "../../../Basics";
import { Heading, ItalicSubHead } from "../../../ReusableComponents";
import { videoShort, waterBg } from "../../../assets";

const ModernTech = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${waterBg})`,
        backgroundSize: "cover",  // Ensure the image covers the entire background
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent repeating the image
      }}
    >
      <Container
        classname1="py-24 bg-gray-800"
        classname2="grid grid-cols-2 gap-16"
      >
        <figure className="cursor-pointer">
          <img src={videoShort} alt="Video" className="" />
        </figure>
        <div>
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
