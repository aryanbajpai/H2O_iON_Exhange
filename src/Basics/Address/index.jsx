import React from "react";
import { addresses } from "../../db/dummyData";
import Container from "../Container";
import { addressBg, bg5 } from "../../assets";


const Address = () => {
  return (
    <div
      className="h-auto bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg5})`,
      }}
    >
      <Container classname1="py-7 bg-[#030f25]/80">
        <section className="w-full grid grid-cols-3 gap-7">
          {addresses?.map((a, i) => (
            <div key={i}>
              <div className="h-auto grid grid-cols-[20%_80%]  border border-[#d1d1d1]">
                <figure className="bg-[#020f1b]/90 flex items-center justify-center">
                  <img src="" alt="A" />
                </figure>

                <div className="p-6 bg-[#081d2f]/70">
                  <p className="text-[#8dbed2] font-bold">{a?.type}</p>
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
