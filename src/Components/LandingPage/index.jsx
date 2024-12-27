import React from "react";
import AboutH2O from "./AboutH2O";
import { CommonHeader, ContactBanner } from "../../ReusableComponents";
import Banner from "./Banner";
import ServiceWeOffer from "./ServiceWeOffer";
import ModernTech from "./ModernTech";
import OurProducts from "./OurProducts";
import RequestService from "./RequestService";
import OurLatestProject from "./OurLatestProject";
import BrandsWeDealIn from './BrandsWeDealIn';

const LandingPage = () => {
  return (
    <main>
      <CommonHeader />
      <Banner />
      <AboutH2O />
      <ServiceWeOffer />
      <ModernTech />
      <OurProducts />
      <ContactBanner
        small="If you have any emergency plumbing need, simply call our 24 hour emergency plumbing"
        big1="QUICK AND RELIABLE REPAIR OF"
        big2="EMERGENCY LEAKES & PIPE BURST"
        contact="+079 - 29095355"
      />
      <RequestService />
      <BrandsWeDealIn />
      <OurLatestProject />
    </main>
  );
};

export default LandingPage;
