import React, { useState } from "react";
import { Container, Button } from "../../Basics";
import { useNavigate } from "react-router-dom";
import { menuItems, productsDummy } from "../../db/dummyData";

const Header = ({ backGround }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Container classname1={`${backGround} h-auto py-1`}>
      <div className="bg-[#227cb8] p-1 group">
        <nav className="border border-dashed border-[#afafaf]">
          <div className="text-white text-[16px] font-bold flex justify-between">
            <ul className="hidden lg:flex py-2">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`px-7 relative py-2 cursor-pointer group ${index > 0 && "border-l-2 border-[#114c70]"
                    } hover:text-[#5cd0f3] transition-all duration-300`}
                  onClick={() => {
                    if (item?.item !== "PRODUCTS") {
                      navigate(`${item?.link}`);
                    }
                  }}
                  onMouseEnter={() => {
                    if (item?.item === "PRODUCTS") setHovered(true);
                  }}
                  onMouseLeave={() => {
                    if (item?.item === "PRODUCTS") setHovered(false);
                  }}
                >
                  {item?.item}
                  {item?.item === "PRODUCTS" && (
                    <div
                      className={`${hovered ? "block" : "hidden"
                        } absolute left-0 min-w-[350px] py-3 top-[100%]`}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      {productsDummy?.map((p) => (
                        <div
                          key={p?.id}
                          className="px-5 py-3 bg-[#1c93b8] text-[15px] font-[300] hover:bg-[#27b5e0] text-white border-b border-[#27b5e0]"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent event bubbling
                            navigate(p?.link);
                          }}
                        >
                          {p?.name}
                        </div>
                      ))}
                    </div>
                  )}
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
