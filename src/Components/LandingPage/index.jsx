import React from 'react'
import { Container, Header } from '../../Basics';
import AboutH2O from './AboutH2O';
import Head from './Head';

const LandingPage = () => {
  return (
    <main>
      <div className='relative w-full'>
        <Head />
        <div className='absolute w-full -bottom-[54px]'>
          <Header />
        </div>
      </div>
      <Container classname1={"h-screen"}>
        <AboutH2O />
      </Container>
    </main>
  )
}

export default LandingPage;