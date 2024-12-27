import React from "react";
import { addresses } from "../../../db/dummyData";
import { Container } from "../../../Basics";
import { addressBg } from "../../../assets";

const Address = () => {
  return (
    <div
      className="h-auto bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${addressBg})`,
      }}
    >
      <Container classname1={"h-auto py-5 bg-[#102f42]/50"}>
        <section className="w-full grid grid-cols-3 gap-7">
          {addresses?.map((a, i) => (
            <div key={i}>
              <div className="h-auto grid grid-cols-[20%_80%]  border border-[#d1d1d1]">
                <figure className="bg-[#081b36] flex items-center justify-center">
                  <img src="" alt="A" />
                </figure>

                <div className="p-6 bg-[#132949]/60">
                  <p className="text-[#468cb8] font-bold">{a?.type}</p>
                  <p className="text-white text-[15px]">{a?.value}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
};

export default Address;
