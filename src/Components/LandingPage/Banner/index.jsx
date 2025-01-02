import React from "react";
import { Button, Container } from "../../../Basics";
import { checkIcon, seaWaterPlant, slider1, slider2, slider3, slider4, slider5, slider6 } from "../../../assets";
import { callUsNow } from "../../../db/dummyData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Banner = () => {
  const sliderData = [
    {
      id: 1,
      img: slider1,
      text: 'PACKAGED DRINKING WATER TURNKEY PROJECT',
      title: 'H2O ION EXCHANGE',
      checks: [
        {value: 'Our Vision'},
        {value: 'Modern Technologies'},
        {value: 'Creative Solutions'},
      ]
    },
    {
      id: 2,
      img: slider2,
      text: 'FULLY AUTOMATIC WATER TREATMENT PLANT',
      title: 'WATER = LIFE',
      checks: [
        {value: 'Ionexchange Resin'},
        {value: 'Membrane'},
        {value: 'Industrial Pumps'},
      ]
    },
    {
      id: 3,
      img: slider3,
      text: 'ULTRA FILTRATION WATER TREATMENT PLANT',
      title: 'MAKE WATER PURE & PRECIOUS',
      checks: [
        {value: 'Swimming Filtration System'},
        {value: 'Hydro Pneamatix Pressure'},
        {value: 'Booster System'},
      ]
    },
    {
      id: 4,
      img: slider4,
      text: 'SOFTNER BASE WATER TREATMENT PLANT',
      title: 'CONSERVATION = FUTURE',
      checks: [
        {value: 'PureMagic Plus'},
        {value: 'Balanced Minerals'},
        {value: 'Mineral Composition'},
      ]
    },
    {
      id: 5,
      img: slider5,
      text: 'SEA WATER PLANT',
      title: 'MAKE WATER PURE & PRECIOUS',
      checks: [
        {value: 'Specialist in Pumps'},
        {value: 'Stainless Steel Pumps'},
        {value: 'Vast Variety of Pumps'},
      ]
    },
    {
      id: 6,
      img: slider6,
      text: 'R O',
      title: 'MAKE WATER PURE & PRECIOUS',
      checks: [
        {value: 'Greenz - Power of Ozone'},
        {value: 'Applications'},
        {value: 'Benefits'},
      ]
    },
  ];

  const sliderSettings = {
    dots: false, 
    infinite: true, 
    speed: 200, 
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 5000, 
    arrows: false,
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
        {sliderData.map((slide) => (
          <figure key={slide.id} className="w-full h-[650px] relative">
            <img
              src={slide.img}
              alt={`Banner ${slide.id}`}
              className="w-full h-full object-cover"
            />
            <Container classname1={"absolute top-[25%]"}>
              <p className="text-[#101672] font-[500] text-2xl">
                {slide.text}
              </p>
              <p
                className="text-[#101672] font-bold text-[50px] -mt-3"
                style={{ textShadow: "2px 2px 0px white" }}
              >
                {slide.title}
              </p>
              <div className="my-5">
                {slide.checks.map((check, index) => (
                  <div key={index} className="flex gap-3 items-center animate-slideToLeft">
                    <img src={checkIcon} className="w-5 h-5" />
                    <p className="text-2xl text-[#389eec]">{check.value}</p>
                  </div>
                ))}
              </div>
              <Button
                type="danger"
                btnText="Read More"
                addClass={"text-xl py-4 my-5"}
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
