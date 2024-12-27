import React, { useState } from 'react';
import { Container, Button } from '../../../Basics';
import { Heading } from '../../../ReusableComponents';
import { ourPrdt } from '../../../db/dummyData';

const OurProducts = () => {
  const [state, setState] = useState({
    hoverIndex: null,
  });

  const updateStates = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  };

  return (
    <Container classname1={'bg-gray-200 py-24'}>
      <Heading text="Our Products" span="__" />
      <div className="flex gap-8 flex-wrap mt-12">
        {ourPrdt.map((product, index) => (
          <figure key={product?.id}
            className="relative z-0 group"
            onMouseEnter={() => updateStates("hoverIndex", index)}
            onMouseLeave={() => updateStates("hoverIndex", null)}>
            <figure className='w-auto h-[310px] overflow-hidden'>
            <img src={product?.img} alt="Our Products" className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
            </figure>
            <div className="w-full h-[310px] z-10 absolute top-0 bg-[#14537e] opacity-[80%] invisible group-hover:visible transition-all duration-300"></div>
            <div
              key={product.id}
              className="absolute z-20 inset-0 m-auto w-[50%] h-[310px] flex flex-col justify-center items-center overflow-hidden"

            >
              <p
                className={`text-white text-center font-bold text-lg transition-transform duration-700 ${state?.hoverIndex === index ? "translate-x-0" : "translate-x-[200%]"
                  }`}
              >
                {product.text}
              </p>
              <div
                className={`transition-transform duration-700 my-2 ${state?.hoverIndex === index ? "translate-x-0" : "-translate-x-[220%]"
                  }`}
              >
                <Button type="danger" btnText="READ MORE" />
              </div>
            </div>
          </figure>
        ))}
      </div>
    </Container>
  );
};

export default OurProducts;
