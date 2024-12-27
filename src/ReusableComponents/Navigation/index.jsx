import React from "react";
import { Container } from "../../Basics";

const Navigation = ({ child, subChild }) => {
  return (
    <Container classname1={"border-b py-4 shadow-md"}>
      <p className="text-[#bebebe] text-[15px] font-bold">
        <span className="cursor-pointer">HOME</span> {" > "}{" "}
        <span className={`${subChild ? "cursor-pointer" : null}`}>{child}</span>{" "}
        {subChild && (
          <span>
            {" > "} {subChild}
          </span>
        )}
      </p>
    </Container>
  );
};

export default Navigation;
