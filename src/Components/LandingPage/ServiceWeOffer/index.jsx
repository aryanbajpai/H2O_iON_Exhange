import React from "react";
import { Container } from "../../../Basics";
import { Heading } from "../../../ReusableComponents";
import { services } from "../../../db/dummyData";

const ServiceWeOffer = () => {
  return (
    <Container classname1={"bg-gray-200 py-20"}>
      <Heading text="Services that we offers" span="__" />
      <p className="text-[#949494] my-3">
        Providing reliable water treatment solutions to ensure clean, safe, and
        sustainable water for your H2O plant operations.
      </p>
      <div className="grid grid-cols-4 gap-6 my-7">
        {services?.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <figure className="rounded-full w-[200px] h-[200px] bg-white my-5">
              <img
                src={s?.img}
                alt="services"
                className="w-full h-full rounded-full object-contain"
              />
            </figure>
            <div className="font-bold text-[#252525] text-center my-3">
              {s?.title}
            </div>
            <p className="text-[#949494] text-[16px] text-center">{s?.para}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ServiceWeOffer;
