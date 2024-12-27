import React from 'react'
import { Container } from '../../Basics'

const ContactBanner = ({ small, big1, big2, contact }) => {
    return (
        <Container classname1={"bg-blue-950 py-12"} classname2={"flex flex-col items-center justify-center "}>
            <p className='text-white text-xl text-center xl:max-w-[92%]'>{small}</p>
            <p className='text-white text-center text-[35px] font-bold'>{big1} <span className='text-[#5cd0f3]'>{big2}</span></p>
            <p className='text-[40px] text-yellow-500 font-bold'>{contact}</p>
        </Container>
    )
}

export default ContactBanner