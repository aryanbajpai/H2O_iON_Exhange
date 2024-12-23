import React from 'react'
import { Container } from '../../../Basics'
import { assembling, available, seaWaterPlant } from '../../../assets';

const Banner = () => {
  const needHelp = [
    {
      img: available,
      title1: "READILY",
      title2: "AVAILABLE",
      para: "We're 24X7 readily available stock for immediate need",
      link: "Call us now",
    },
    {
      img: assembling,
      title1: "ENGINEERING ",
      title2: "ASSEMBLING",
      para: "When it comes to water... Come to us!",
      link: "Call Us",
    },
  ];
  return (
    <>
      <figure className='w-full h-[650px]'>
        <img src={seaWaterPlant} alt='Banner' className='w-full h-full object-cover' />
      </figure>
      
      <Container classname1={"bg-gradient-to-b from-gray-50 to-gray-200"} classname2={"grid grid-cols-2 gap-14 py-10"}>
        {needHelp?.map((h, i) => (
          <div className='w-full flex gap-5 items-center' key={i}>
            <img src={h?.img} alt='image' className='' />
            <div className='w-[65%]'>
              <p className='font-bold text-xl text-gray-700'>{h?.title1} <spa className='text-red-800'>{h?.title2}</spa></p>
              <p className='text-[#252525]'>{h?.para} <span className='font-bold underline'>{h?.link}</span></p>
            </div>
          </div>
        ))}
      </Container>
    </>
  )
}

export default Banner