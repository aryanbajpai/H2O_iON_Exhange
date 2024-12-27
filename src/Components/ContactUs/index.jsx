import React from 'react'
import { aboutUsBg } from '../../assets'
import { CommonHeader } from '../../ReusableComponents'

const ContactUs = () => {
    return (
        <div>
            <CommonHeader head='Contact Us' tail='"Nothing in the world is more flexible and yielding then water"' bgImg={aboutUsBg} headBanner={true} />
        </div>
    )
}

export default ContactUs