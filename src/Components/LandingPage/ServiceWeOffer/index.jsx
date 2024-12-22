import React from 'react'
import { Container } from '../../../Basics'
import Heading from '../../../ReusableComponents/Heading'

const ServiceWeOffer = () => {
    const services = [
        {
            id: 1,
            img: '',
            title: "CLIENTS RELATIONSHIP",
            para: "Annual maintenance contract for systems supplied by us..",
        },
        {
            id: 2,
            img: '',
            title: "TRUNKEY PROJECT",
            para: "Water softing plant for hardwater for applications like industry,.. ",
        },
        {
            id: 3,
            img: '',
            title: "INDUSTRIAL PUMPS",
            para: "Waterboy stainless steel industrial pumps used in Dairy Processing,..",
        },
        {
            id: 4,
            img: '',
            title: "DRINKING WATER FILTERATION",
            para: "Drinking water filteration system with & without UV for homes, school, colleges, ..",
        },
    ];
  return (
    <Container classname1={"bg-gray-200 py-20"}>
        <Heading text='Services that we offers' span="__" />
        <p className='text-gray-500 my-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium</p>
        <div className='grid grid-cols-4 gap-6 my-7'>
            {services?.map((s, i) => ( 
                <div key={i} className='flex flex-col items-center border border-black'>
                    <figure className='rounded-full'>
                        <img src='' alt='services' className='w-full h-full rounded-full' />
                    </figure>
                    <div className='font-bold text-[#252525] text-center my-3'>{s?.title}</div>
                    <p className='text-gray-500 text-center'>{s?.para}</p>
                </div>
            ))}
        </div>
    </Container>
  )
}

export default ServiceWeOffer