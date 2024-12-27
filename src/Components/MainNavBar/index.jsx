import React, { useState, useEffect } from "react";
import { Header } from "../../Basics";

const MainNavBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.25;
      if (window.scrollY > scrollThreshold) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-700 ease-in ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Header backGround={'bg-[#227cb8]'} />
    </header>
  );
};

export default MainNavBar
