import React, { useState } from 'react';
import { Container, Button } from '../../../Basics';
import {Heading} from '../../../ReusableComponents';

const OurProducts = () => {
  const [state, setState] = useState({
    hoverIndex: null,
  })

  const ourPrdt = [
    { id: 1, text: 'WATER TREATMENT PLANTS', img: '' },
    { id: 2, text: 'WATER TREATMENT COMPONENTS', img: '' },
    { id: 3, text: 'SWIMMING POOL FILTRATION SYSTEM', img: '' },
    { id: 4, text: 'HYDRO PNEAMATIC PRESSURE', img: '' },
    { id: 5, text: 'PRESSURE BOOSTER SYSTEM', img: '' },
    { id: 6, text: 'SEA WATER DESALINATION SYSTEM', img: '' },
  ];

  return (
    <Container classname1={'bg-gray-200 py-24'}>
      <Heading text="Our Products" span="__" />
      <div className="grid grid-cols-3 gap-8 mt-14">
        {ourPrdt.map((product, index) => (
          <div
            key={product.id}
            className="relative bg-blue-900 px-7 w-[250px] h-[250px] flex flex-col justify-center items-center overflow-hidden"
            onMouseEnter={() => setState((prev) => ({
              ...prev,
              hoverIndex: index,
            }))}
            onMouseLeave={() => setState((prev) => ({
              ...prev,
              hoverIndex: null,
            }))}
          >
            
            <p
              className={`text-white text-center font-bold text-lg transition-transform duration-700 ${
                state?.hoverIndex === index ? 'translate-x-0' : 'translate-x-[200%]'
              }`}
            >
              {product.text}
            </p>
            <div
              className={` transition-transform duration-700 my-2 ${
                state?.hoverIndex === index ? 'translate-x-0' : '-translate-x-[200%]'
              }`}
            >
              <Button type="danger" btnText="READ MORE" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OurProducts;
