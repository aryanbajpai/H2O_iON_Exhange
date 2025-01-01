import React from 'react'
import { Button } from '../../Basics';

const ZoomInComponent = ({dummyData}) => {
    return (
        <div className='p-5 grid grid-cols-2 gap-10'>
            {dummyData?.map((m) => (
                <div key={m?.id} className='group w-full'>
                    <figure className='w-full h-[230px] overflow-hidden'>
                        <img src={m?.img} alt={m?.name} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer' />
                    </figure>
                    <div className='mt-7'>
                        <p className='text-lg font-[500] my-5 group-hover:text-[#1861b3] group-hover:underline'>{m?.name}</p>
                        {m?.text && <p className='text-[#979797] my-4'>{m?.text}</p>}
                        <Button type='danger' btnText='READ MORE' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ZoomInComponent;