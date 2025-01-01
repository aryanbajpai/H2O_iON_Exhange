import React from "react";
import { useNavigate } from "react-router-dom";

const ListOfContent = ({ dummyData, setSelectedIndex, selectedIndex }) => {
  const navigate = useNavigate();

  return (  
    <section className="w-full">
      {dummyData?.map((d, i) => (
        <div key={i} className="w-full">
          <div
            className={`w-full p-5 cursor-pointer border border-[#d1d1d1] hover:bg-[#24a7cf] hover:text-white hover:border-l-[#001f35] border-l-4 text-[#747474] font-[500] ${
              selectedIndex?.id === d?.id
                ? "bg-[#24a7cf] text-white border-l-[#001f35]"
                : "text-[#747474] bg-[#f3f3f3]"
            } transition-all duration-300 ease-out`}
            onClick={() =>
              i === 0 ? navigate("/products") : d?.link ? navigate(`${d?.link}`) : setSelectedIndex(d)
            }
          >
            {d?.name}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListOfContent;
