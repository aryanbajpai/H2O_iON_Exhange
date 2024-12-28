import React from 'react';
import '../../index.css';

const Heading = ({ text, span, dark }) => {
  return (
    <div
      className={`text-[36px] font-bold ${
        dark ? 'text-[#0088b0]' : 'text-[#252525]'
      }`}
      style={{ fontFamily: "'Alegreya', serif", fontOpticalSizing: 'auto', fontWeight: '500', fontStyle: 'normal'}} 
    >
      {text}{' '}
      <span
        className="text-[#33a0c2]"
        style={{ fontFamily: '"Alegreya", serif', fontSize: "42px", fontWeight: "900" }}
      >
      
      </span>
    </div>
  );
};

export default Heading;
