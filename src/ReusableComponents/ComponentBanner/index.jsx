import React from 'react';
import { Container } from '../../Basics';

const ComponentBanner = ({ head, tail, bgImg }) => {
    return (
        <footer
            className="h-auto bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgImg})`,
            }}
        >
            <Container classname1={"h-auto py-16 text-white"}>
                <div className='mt-7'>
                    <p className='font-bold text-[40px]'>{head}</p>
                    <p className='text-lg'>{tail}</p>
                </div>
            </Container>
        </footer>
    );
};

export default ComponentBanner