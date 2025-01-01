import React from 'react';
import { Button, Container } from '../../../Basics';
import { Heading } from '../../../ReusableComponents';
import { mainBusiness, needHelp } from '../../../db/dummyData';
import ZoomInComponent from '../../../ReusableComponents/ZoomInComponent';

const MainServices = () => {
  return (
    <Container classname1={"py-24"} classname2={"grid grid-cols-[74%_22%] gap-8"}>
        <section>
            <div>
                <Heading text='Main Services' />
                <p className='text-[#252525] my-7'>Water treatment plant base on reverse osmosis technology, DM, De-fluoridation. technology suitable for bottled water plant,beverages industries, village, swimming pool, pharmaceutical industries, textile industries, green houses, farm houses, schools, colleges, hostels, villages and various other places.</p>
            </div>

            <div className='mt-24'>
                <p className='text-[30px] text-[#252525]'>Overview of our main business</p>
                <ZoomInComponent dummyData={mainBusiness} />
            </div>
        </section>

        <section>
            <div className='w-full flex flex-col'>
                {needHelp?.map((n) => (
                    <div key={n?.id} className='w-full border py-7 px-5 hover:bg-[#f8f8f8]'>
                        <p className='text-blue-600 text-[15px] font-bold hover:text-[#252525] cursor-pointer'>{n?.help}</p>
                    </div>
                ))}
            </div>
        </section>
    </Container>
  )
}

export default MainServices;