import React, { useState, useEffect } from "react";
import { bannerSliderData } from "../../db/dummyData";
import { Button } from "../../Basics";
import {
  checkIcon,
  emptyFrame,
  heroLines,
  list1,
  list2,
  list3,
  shapeRGB,
  shapeRed,
  threeLines,
} from "../../assets";

const TrialBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerSliderData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[700px]">
      {bannerSliderData.map((b, index) => (
        <main
          key={b?.id}
          className={`absolute inset-0 w-full h-full flex justify-between ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <section className="w-full flex flex-col relative justify-center z-10 ml-10 lg:ml-20 xl:ml-24 2xl:ml-[360px]">
            <img
              src={threeLines}
              alt="Empty Frame"
              className="object-cover absolute -left-[200px] top-[100px]"
            />
            <img
              src={threeLines}
              alt="Empty Frame"
              className="object-cover absolute right-16 xl:right-[700px] bottom-[0px]"
            />
            <p className={`text-[#101672] font-[500] text-2xl`}>{b.text}</p>
            <p
              className={`text-[#101672] font-bold text-[50px] -mt-3 relative`}
              style={{ textShadow: "2px 2px 0px white" }}
            >
              {b.title}
              <img
                src={list1}
                alt="Empty Frame"
                className="object-cover absolute -left-7 -top-5 -z-20 w-24 h-24 opacity-[40%]"
              />
            </p>
            <div className={`my-5 relative`}>
              {b.checks.map((check, index) => (
                <div key={index} className={`flex gap-3 items-center`}>
                  <img src={checkIcon} className="w-5 h-5" />
                  <p className="text-2xl text-[#2685ce]">{check.value}</p>
                </div>
              ))}
              <img
                src={list3}
                alt="Empty Frame"
                className="object-cover absolute left-[15%] -bottom-2 -z-20 opacity-[40%] w-16 h-16 rotate-180"
              />
            </div>
            <Button
              type="danger"
              btnText="Read More"
              addClass={`text-xl py-3 my-5 w-[25%] xl:w-[15%] rounded-full`}
            />
          </section>

          <figure className="lg:block hidden absolute top-0 right-0 w-[700px] z-[5]">
            <img
              src={shapeRGB}
              alt="Empty Frame"
              className="object-cover absolute -z-20 w-full h-full"
            />
            <img
              src={shapeRed}
              alt="Empty Frame"
              className="object-cover absolute -z-10 w-full h-full"
            />
            <img
              src={b.img}
              alt={`Banner ${b.id}`}
              className="w-full h-full object-contain"
            />
          </figure>
        </main>
      ))}
    </div>
  );
};

export default TrialBanner;
