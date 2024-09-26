import React from "react";
import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 shadow-md flex flex-col items-center text-center">
      <div className="w-24 h-24 mb-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          className="rounded-full object-cover"
          width={96}
          height={96}
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">
        {testimonial.name}
      </h3>
      <p className="mt-3 italic light-text">{testimonial.feedback}</p>
      <div className="mt-4 flex justify-center text-xl lg:text-4xl">
        <span className="text-yellow-500">★</span>
        <span className="text-yellow-500">★</span>
        <span className="text-yellow-500">★</span>
        <span className="text-yellow-500">★</span>
        <span className="text-yellow-500">★</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
