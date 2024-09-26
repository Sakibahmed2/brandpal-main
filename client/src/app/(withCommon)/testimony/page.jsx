import TestimonySlider from "@/components/pages/TestimonyPage/TestimonySlider";
import Container from "@/components/ui/Container";
import React from "react";

const TestimonyPage = () => {
  return (
    <Container className="pt-32 pb-20">
      <div className="">
        <div className="text-center">
          <h3 className="text-2xl mg:text-3xl lg:text-4xl font-semibold">
            This is What Our Esteemed Clients Have to Say
          </h3>
          <p className="light-text lg:w-[450px] mx-auto mt-2">
            There are many variations of lorem passages of Lorem Ipsum
            available, but the majority.
          </p>
        </div>
        <div className="">
          <TestimonySlider />
        </div>
      </div>
    </Container>
  );
};

export default TestimonyPage;
