import React from "react";
import Container from "../Container";
import InputFields from "../InputFields";
import Button from "../Button";
import { quickLinks } from "../../db/dummyData";
import {bg6, saveEnvironment} from '../../assets';
import Address from "../Address";

const Footer = () => {
  return (
    <footer
      className="h-auto bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg6})`, 
      }}
    >
      <Address />
      <Container classname1={"h-auto py-10"}>
        {/* About us and Links */}
        <section className="w-full grid grid-cols-2 xl:grid-cols-[30%_27%_27%_16%] gap-5">
          <div className="w-full pr-3">
            <p className="text-white font-bold tracking-wide py-3">ABOUT US</p>
            <div className="border-t-2 border-[#5cd0f3] w-[40px]"></div>
            <p className="text-gray-400 py-7">
              We provide peace-of-mind solutions by effectively handling your
              contamination, operational problems, so as for you to pursue your
              core competence, the business of manufacturing.
            </p>
          </div>

            {quickLinks?.map((data, index) => (
              <div key={index} className="w-full px-3">
                <p className="text-white font-bold tracking-wide py-3">{data?.title}</p>
                <div className="border-t-2 border-[#5cd0f3] w-[40px]"></div>
                <div className="py-7">
                  {data?.links?.map(({ link }, index) => (
                    <div key={index} className="w-full py-1">
                      <p className="text-gray-400">{" > "} {link}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <figure className="w-[250px] h-[300px] mx-auto">
              <img src={saveEnvironment} alt="Go Green Logo" className="w-full h-full" />
            </figure>
        </section>

        {/* Subscribe */}
        <div className="border border-dashed border-gray-500 bg-[#0c2534]/90 px-7 py-5 lg:grid grid-cols-[38%_38%_19%] gap-7">
          <p className="text-[#53c2e3] font-semibold">
            Subscribe now and receive a weekly newsletter with new tips and exciting offers or discounts.
          </p>
          <InputFields
            type="text"
            placeholder="Enter your email address"
            style={"bg-[#091e2b] px-3 py-2 border border-gray-500 text-gray-400 mt-3 lg:my-2 xl:my-0"}
          />
          <Button type="danger" btnText="SUBSCRIBE" addClass={"text-[17px] mt-3 lg:my-3 xl:my-0"} />
        </div>

        {/* Copyright */}
        <div className="text-gray-400 flex justify-between mt-7">
          <p>Copyright © H2O Exchange 2018. All rights reserved.</p>
          <p>Created by: AB</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
