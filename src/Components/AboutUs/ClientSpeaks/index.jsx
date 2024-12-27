import React from "react";
import { Container } from "../../../Basics";
import { Heading } from "../../../ReusableComponents";
import { clientSpeak } from "../../../db/dummyData";

const ClientSpeaks = () => {
  return (
    <Container classname1={"py-24"}>
      <Heading text="Clients Speaks" span="__" />
      <div className="grid grid-cols-2 gap-7">
        {clientSpeak?.map(
          (c, index) =>
            index <= 1 && (
              <div key={c?.id} className="text-[15px] text-gray-500">
                <p className="my-7">{c?.comment}</p>
                <p className="italic">- {c?.client}</p>
              </div>
            )
        )}
      </div>
    </Container>
  );
};

export default ClientSpeaks;
