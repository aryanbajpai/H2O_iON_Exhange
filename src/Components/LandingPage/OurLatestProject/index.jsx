import React from "react";
import { Container } from "../../../Basics";
import { Heading } from "../../../ReusableComponents";
import { ourLatest, viewAll } from "../../../db/dummyData";

const OurLatestProject = () => {
  return (
    <Container classname1={"py-24"}>
      <Heading text="Our Latest Projets" span="__" />

      <section className="w-full grid grid-cols-3 gap-7 mt-10">
        {ourLatest?.map((l, i) => (
          <div key={i} className="border-b border-dashed py-5 w-full">
            <figure className="w-full h-[270px] overflow-hidden">
              <img
                src={l?.img}
                alt="Latest"
                className="w-full h-full object-cover cursor-pointer transition-transform duration-700 ease-in-out hover:scale-110"
              />
            </figure>
            <p className="text-lg font-semibold py-5 hover:text-[#35a4c0] hover:underline cursor-pointer">
              {l?.text}
            </p>
            <p className="text-[#727272] text-[15px]">{l?.para}</p>
          </div>
        ))}
        <div className="flex flex-col">
          {viewAll?.map((v) => (
            <div className="border h-full font-[500] text-lg p-7">
              {v?.text}
            </div>
          ))}
          <div className="border text-center font-bold py-4 text-[#298fa8] hover:text-[#252525] transition-all duration-700 cursor-pointer">
            View All Projects
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OurLatestProject;
