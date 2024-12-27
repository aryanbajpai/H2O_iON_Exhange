import React from "react";
import { Container } from "../../Basics";
import { useNavigate } from "react-router-dom";

const Navigation = ({ child, subChild }) => {
  const navigate = useNavigate();
  return (
    <Container classname1={"border-b py-4 shadow-md"}>
      <p className="text-[#bebebe] text-[15px] font-bold">
        <span className="cursor-pointer" onClick={() => navigate('/')}>HOME</span> {" > "}{" "}
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
