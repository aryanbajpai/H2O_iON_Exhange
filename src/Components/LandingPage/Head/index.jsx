import React from 'react'
import { Container } from '../../../Basics'
import logo from '../../../assets'

const Head = () => {
    const contact = [
        {
            img: "",
            title: "EMAIL US",
            value: 'h2oionexchange1@gmail.com',
        },
        {
            img: "",
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
            <Container classname1={"bg-gradient-to-b from-[#fff] to-gray-100 border-t border-dashed border-[#383838] my-1"}>
                <div className='grid grid-cols-2 items-start py-4'>
                    <figure>
                        <img src={logo} alt='Logo' className='h-[90px]' />
                    </figure>
                    <div className='w-full grid grid-cols-2'>
                        {contact?.map((c, i) => (
                            <div key={i} className={`flex items-center gap-5 ${i === 1 ? "border-l border-gray-400" : "border-0"}`}>
                                <figure>
                                    <img src='' alt='image' />
                                </figure>
                                <div>
                                    <p className='text-gray-500 font-bold text-[15px]'>{c?.title}</p>
                                    <p className={`text-[#383838] ${i===1 ? "font-bold text-lg" : null}`}>{c?.value}</p>
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