import React from 'react'
import Head from '../Head'
import { Header } from '../../Basics'
import ComponentBanner from '../ComponentBanner'

const CommonHeader = ({head, tail, bgImg, headBanner}) => {
  return (
    <main className='relative z-10'>
            <div className='relative w-full'>
                <Head />
                <div className='absolute w-full -bottom-[54px]'>
                    <Header />
                </div>
            </div>
            {headBanner && (
                <ComponentBanner head={head} tail={tail} bgImg={bgImg} />
            )}
        </main>
  )
}

export default CommonHeader