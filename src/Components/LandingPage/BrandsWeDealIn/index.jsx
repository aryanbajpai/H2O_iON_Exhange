import React from 'react';
import { Container } from '../../../Basics';
import { Heading } from '../../../ReusableComponents';
import { brands } from '../../../db/dummyData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { bg1 } from '../../../assets';

const BrandsWeDealIn = () => {
    const sliderSettings = {
      dots: false, 
      infinite: true, 
      speed: 500, 
      slidesToShow: 4,
      slidesToScroll: 2, 
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
      <main
      className="h-auto bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      <Container classname1="py-16">
        <Heading text="Brands we deal in" span="__" />
        <div className="my-7">
          <Slider {...sliderSettings}>
            {brands?.map((b) => (
              <figure key={b?.id} className="p-3 cursor-pointer">
                <img src={b?.img} alt={`Brand ${b?.id}`} className="w-full h-auto" />
              </figure>
            ))}
          </Slider>
        </div>
      </Container>
    </main>
      
    );
  };
  
  export default BrandsWeDealIn;