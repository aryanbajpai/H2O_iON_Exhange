import React from 'react'
import { aboutUsBg } from '../../assets'
import { CommonHeader } from '../../ReusableComponents'

const ServicesComponent = () => {
  return (
    <div>
        <CommonHeader head='Services' tail='The Plumbing has been in business since 1978' bgImg={aboutUsBg} headBanner={true} />
    </div>
  )
}

export default ServicesComponent