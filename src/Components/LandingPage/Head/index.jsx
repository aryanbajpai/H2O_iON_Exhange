import React from 'react'
import { Container } from '../../../Basics'
import {call, email, logo} from '../../../assets'

const Head = () => {
    const contact = [
        {
            img: email,
            title: "EMAIL US",
            value: 'h2oionexchange1@gmail.com',
        },
        {
            img: call,
            title: "CALL US NOW",
            value: '+91-9979898253',
        },
    ];

    return (
        <>
            <Container classname1={'bg-[#102f42]'} classname2={'flex justify-between items-center py-3 '}>
                <p className='text-[#518093] italic font-[500]'>160, Pushkar Ind. Estate, Phase-1, GIDC, Vatva, Ahmedabad-382445.</p>
                <div className='flex gap-2 text-[#5d99b1] font-bold text-xl'>
                    <p>f</p>
                    <p>T</p>
                    <p>G+</p>
                    <p>in</p>
                </div>
            </Container>
            <Container classname1={"bg-gradient-to-b from-[#fff] to-gray-200 border-t border-dashed border-[#383838] mt-1"}>
                <div className='flex justify-between items-start pb-6 pt-4'>
                    <figure className='w-full'>
                        <img src={logo} alt='Logo' className='h-[90px]' />
                    </figure>
                    <div className='w-full flex justify-end'>
                        {contact?.map((c, i) => (
                            <div key={i} className={`flex w-full px-7 items-center gap-5 ${i === 1 ? "border-l border-gray-400" : "border-0"}`}>
                                <figure>
                                    <img src={c?.img} alt='image' />
                                </figure>
                                <div>
                                    <p className='text-gray-500 font-bold text-[15px]'>{c?.title}</p>
                                    <p className={`text-[#383838] ${i===1 ? "font-bold text-xl" : null}`}>{c?.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Head