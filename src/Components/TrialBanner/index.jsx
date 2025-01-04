import React, { useState, useEffect } from 'react';
import { bannerSliderData } from '../../db/dummyData';
import { Button } from '../../Basics';
import { checkIcon, emptyFrame } from '../../assets';

const TrialBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === bannerSliderData.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="relative w-full h-[650px]">
            {bannerSliderData.map((b, index) => (
                <main
                    key={b?.id}
                    className={`absolute inset-0 w-full h-full grid grid-cols-2 gap-5 ${
                        currentIndex === index ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-1000`}
                >
                    <section className="w-full flex flex-col justify-center ml-24">
                        <p className={`text-[#101672] font-[500] text-2xl`}>
                            {b.text}
                        </p>
                        <p
                            className={`text-[#101672] font-bold text-[50px] -mt-3`}
                            style={{ textShadow: '2px 2px 0px white' }}
                        >
                            {b.title}
                        </p>
                        <div className={`my-5`}>
                            {b.checks.map((check, index) => (
                                <div
                                    key={index}
                                    className={`flex gap-3 items-center`}
                                >
                                    <img src={checkIcon} className="w-5 h-5" />
                                    <p className="text-2xl text-[#2685ce]">
                                        {check.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <Button
                            type="danger"
                            btnText="Read More"
                            addClass={`text-xl py-4 my-5 w-[25%]`}
                        />
                    </section>

                    <figure className="w-full h-full relative">
                        <img src={emptyFrame} alt='Empty Frame' className='object-cover absolute w-full h-full' />
                        <img
                            src={b.img}
                            alt={`Banner ${b.id}`}
                            className="w-full h-full object-cover"
                        />
                    </figure>
                </main>
            ))}
        </div>
    );
};

export default TrialBanner;
