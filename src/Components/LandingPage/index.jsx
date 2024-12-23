import React from 'react'
import { Header } from '../../Basics';
import AboutH2O from './AboutH2O';
import Head from './Head';
import Banner from './Banner';
import ServiceWeOffer from './ServiceWeOffer';  
import ModernTech from './ModernTech';
import OurProducts from './OurProducts';
import EmergencyRepair from './EmergencyRepair';
import RequestService from './RequestService';

const LandingPage = () => {
  return (
    <main>
      <div className='relative w-full'>
        <Head />
        <div className='absolute w-full -bottom-[54px]'>
          <Header />
        </div>
      </div>
      <Banner />
      <AboutH2O />  
      <ServiceWeOffer />
      <ModernTech />
      <OurProducts />
      <EmergencyRepair/>
      <RequestService/>
    </main>
  )
}

export default LandingPage;