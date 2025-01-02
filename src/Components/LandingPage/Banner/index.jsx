import React, { useState } from "react";
import { Button, Container } from "../../../Basics";
import { checkIcon } from "../../../assets";
import { bannerSliderData, callUsNow } from "../../../db/dummyData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderSettings = {
    dots: false, 
    infinite: true, 
    speed: 300, 
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 5000, 
    arrows: false,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [ 
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="relative z-0">
      <Slider {...sliderSettings}>
        {bannerSliderData.map((slide, index) => (
          <figure key={slide.id} className="w-full h-[650px] relative">
            <img
              src={slide.img}
              alt={`Banner ${slide.id}`}
              className="w-full h-full object-cover"
            />
            <Container classname1={"absolute top-[25%]"}>
              <p className={`text-[#101672] font-[500] text-2xl ${
                      activeSlide === index ? "animate-slideToTop" : ""
                    }`}>
                {slide.text}
              </p>
              <p
                className={`text-[#101672] font-bold text-[50px] -mt-3 ${
                      activeSlide === index ? "animate-slideToBottom" : ""
                    }`}
                style={{ textShadow: "2px 2px 0px white" }}
              >
                {slide.title}
              </p>
              <div className={`my-5 ${
                      activeSlide === index ? "animate-slideToLeft" : ""
                    }`}>
                {slide.checks.map((check, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 items-center`}
                  >
                    <img src={checkIcon} className="w-5 h-5" />
                    <p className="text-2xl text-[#2685ce]">{check.value}</p>
                  </div>
                ))}
              </div>
              <Button
                type="danger"
                btnText="Read More"
                addClass={`text-xl py-4 my-5 ${
                      activeSlide === index ? "animate-slideToTop" : ""
                    }`}
              />
            </Container>
          </figure>
        ))}
      </Slider>

      <Container
        classname1={"bg-gradient-to-b from-gray-50 to-gray-200"}
        classname2={"grid grid-cols-2 gap-14 py-10"}
      >
        {callUsNow?.map((h, i) => (
          <div className="w-full flex gap-5 items-center" key={i}>
            <img src={h?.img} alt="image" className="" />
            <div className="w-[65%]">
              <p className="font-bold text-xl text-gray-700">
                {h?.title1} <span className="text-red-800">{h?.title2}</span>
              </p>
              <p className="text-[#252525]">
                {h?.para} <span className="font-bold underline">{h?.link}</span>
              </p>
            </div>
          </div>
        ))}
      </Container>
    </main>
  );
};
export default Banner;
