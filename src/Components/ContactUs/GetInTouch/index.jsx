import React from "react";
import { Button, Container, InputFields, TextAreaField } from "../../../Basics";
import { Heading } from "../../../ReusableComponents";

const GetInTouch = () => {
  return (
    <Container classname1={"py-24"} classname2={""}>
      <Heading text="Get In Touch" span="__" />
      <p className="text-gray-400 my-8">
        H2O Technologies envisioning the quality and committed services to the
        customers.
      </p>
      <main className="flex items-start gap-8">
        <section className="w-[70%]">
          <form>
            <InputFields placeholder="Name" style={"py-3 px-5 border my-3"} />
            <InputFields placeholder="Email" style={"py-3 px-5 border my-3"} />
            <InputFields
              placeholder="Subject"
              style={"py-3 px-5 border my-3"}
            />
            <TextAreaField
              placeholder="Message"
              style={"py-3 px-5 border my-3 h-[200px] overflow-auto"}
            />
            <Button
              type="danger"
              btnText="SUBMIT NOW"
              addClass={"mt-7 py-3 text-lg"}
            />
          </form>
          <p className="text-[15px] text-[#252525]">
            <span className="font-bold">Email Sent.</span> Thank You.
          </p>
          <p className="text-[15px] text-[#252525]">
            Your message has been submitted. We will contact you shortly.
          </p>
          <p className="text-[15px] text-[#252525]">
            <span className="font-bold">Something went wrong.</span> Please try
            again.
          </p>
        </section>
        <section className="w-[30%] bg-gray-100 p-10 my-3">
          <p className="font-bold text-xl text-gray-700">
            H2O ION <span className="text-red-800">EXCHANGE</span>
          </p>
          <p className="my-2">
            We're open 24/7/365 because plumbing emergencies don't wait.{" "}
            <span className="font-bold">Call us now on</span>
          </p>
          <p className="text-2xl font-bold">+079 - 29095355</p>
          <div className="w-full h-[1px] bg-gray-300 my-5"></div>
          <p className="text-2xl font-bold">+91-9979898253</p>
        </section>
      </main>
    </Container>
  );
};

export default GetInTouch;
