import React from 'react';
import '../../index.css';

const Heading = ({ text, span, dark, addStyle }) => {
  return (
    <div
      className={`font-bold ${addStyle ? addStyle : 'text-[36px]'} ${
        dark ? 'text-[#0088b0]' : 'text-[#383838]'
      }`}
      style={{ fontFamily: "'Alegreya', serif", fontWeight: '700', fontStyle: 'normal'}} 
    >
      {text}{' '}
      <span
        className="text-[#33a0c2]"
        style={{ fontFamily: '"Alegreya", serif', fontSize: "42px", fontWeight: "900" }}
      >
        {span}
      </span>
    </div>
  );
};

export default Heading;
