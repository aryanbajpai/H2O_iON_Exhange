import React from "react";
import { Container, InputFields, TextAreaField, Button } from "../../../Basics";
import { Heading, ItalicSubHead } from "../../../ReusableComponents";
import { award } from "../../../assets";

const RequestService = () => {
  const waterManagementCompany = [
    { id: 1, name: "Water Treatment Plants" },
    { id: 2, name: "Mineral Water Plants" },
    { id: 3, name: "R.O. Plants" },
    { id: 4, name: "Reverse Osmosis System" },
    { id: 5, name: "Sea Water desalination Plant" },
    { id: 6, name: "Desalination Plant" },
  ];

  const companyInWesternIndia = [
    { id: 1, name: "We have largest manufacturing facality." },
    { id: 2, name: "24X7 Services" },
    { id: 3, name: "Readily available stock for immediate need" },
    { id: 4, name: "Well Qualified Professionals" },
  ];

  return (
    <Container
      classname1={"py-20"}
      classname2={"xl:grid grid-cols-[30%_70%] gap-20 items-start"}
    >
      <section className="text-white p-8 bg-[#35a4c0] w-[50%] xl:w-full">
        <p className="font-bold text-3xl">REQUEST SERVICES</p>
        <p className="italic my-3 text-[17px]">
          Enter your contact details here to help us serve you better & faster.
        </p>
        <InputFields
          placeholder="Name"
          style={"px-5 my-1 py-2 text-[#383838]"}
        />
        <InputFields
          placeholder="Email"
          style={"px-5 my-1 py-2 text-[#383838]"}
        />
        <InputFields
          placeholder="Telephone"
          style={"px-5 my-1 py-2 text-[#383838]"}
        />
        <TextAreaField
          placeholder="How may we help you?"
          style={"my-1 px-5 py-2 h-[100px]"}
        />
        <Button
          type="danger"
          btnText="GET QUOTE"
          addClass={"px-10 py-3 my-2"}
        />
      </section>

      <section className="mt-10 xl:mt-0">
        <Heading text="About Us" span="__" />
        <div>
          <ItalicSubHead subHead="We, H2o Ion Exchange are pleased to introduce ourselves as one of the leading water management company:" />
          <div className="grid grid-cols-[33%_67%] text-[#383838] py-9 border-b ">
            {waterManagementCompany?.map((c) => (
              <div key={c?.id} className="mb-2">
                <p>{c?.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <ItalicSubHead subHead="One of Strongest water management company in western India:" />
          <p className="text-gray-400 pt-3">
            Providing reliable water treatment solutions to ensure clean, safe,
            and sustainable water for your H2O plant operations.
          </p>
          <div className="flex justify-between items-center pr-7">
          <div className="text-[#383838] py-8">
            {companyInWesternIndia?.map((c) => (
              <div key={c?.id} className="mb-2">
                <p>{c?.name}</p>
              </div>
            ))}
          </div>
            <img src={award} className="w-[140px] h-[150px]"  />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default RequestService;
