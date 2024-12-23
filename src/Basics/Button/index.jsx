import React from 'react';

const Button = ({ btnText, type, addClass }) => {
  const getButtonClass = () => {
    switch (type) {
      case 'danger':
        return 'bg-red-600 rounded hover:bg-[#0088b0]';
      case 'success':
        return 'bg-green-500 hover:bg-green-600';
      case 'primary':
        return 'bg-[#2692c4] hover:bg-[#102f42]';
      default:
        return 'bg-gray-500 hover:bg-gray-600'; 
    }
  };

  return (
    <button className={`text-white px-7 py-2 font-bold ${addClass} ${getButtonClass()} transition-all duration-500`}>
      {btnText}
    </button>
  );
};

export default Button;
