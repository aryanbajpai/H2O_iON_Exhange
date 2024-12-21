import React from "react";
import Container from "../Container";
import Button from "../Button";

const Header = ({ backGround }) => {
  const menuItems = ["HOME", "ABOUT US", "PRODUCTS", "SERVICES", "CONTACT US"];

  return (
    <Container classname1={`${backGround} h-auto py-1`}>
      <div className="bg-[#006994] p-1">
        <nav className="border border-dashed border-[#afafaf]">
          <div className="text-white text-[16px] font-bold flex justify-between">
            <ul className="flex py-2">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="px-5 py-2 cursor-pointer hover:text-[#5cd0f3]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Button btnText="GET APPOINTMENT" type="primary" />
          </div>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
