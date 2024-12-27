import React from "react";
import { Container } from "../../../Basics";
import { Heading } from "../../../ReusableComponents";
import { services } from "../../../db/dummyData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ServiceWeOffer = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <Container classname1={"bg-gray-200 py-20"}>
      <Heading text="Services that we offers" span="__" />
      <p className="text-[#949494] my-3">
        Providing reliable water treatment solutions to ensure clean, safe, and
        sustainable water for your H2O plant operations.
      </p>
      <div className="my-7">
        <Slider {...sliderSettings}>
          {services?.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <figure className="border rounded-full w-[200px] mx-auto h-[200px] bg-white my-5">
                <img
                  src={s?.img}
                  alt="services"
                  className="w-full h-full rounded-full object-contain"
                />
              </figure>
              <div className="font-bold text-[#252525] text-center my-3">
                {s?.title}
              </div>
              <p className="text-[#949494] text-[16px] text-center">
                {s?.para}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default ServiceWeOffer;
