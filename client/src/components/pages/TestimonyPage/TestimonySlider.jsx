"use client";

import userImg from "@/assets/user.png";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    feedback:
      "This company transformed our online strategy with creativity and attention to detail. Our brand's presence and customer engagement have significantly improved. Highly recommend their services for anyone looking to elevate their digital marketing!",
    image: userImg,
  },
  {
    id: 2,
    name: "Michael Smith",
    feedback:
      "A game-changer for our business! Their professional approach and targeted campaigns led to a tremendous increase in sales. Their expertise in digital marketing is unmatched. We couldn’t be more satisfied with the results.",
    image: userImg,
  },
  {
    id: 3,
    name: "Sophia Davis",
    feedback:
      "Their commitment to delivering outstanding results exceeded our expectations. They provided innovative solutions, and our brand's visibility has skyrocketed. This partnership has been invaluable.",
    image: userImg,
  },
  {
    id: 4,
    name: "James Brown",
    feedback:
      "The team's professionalism and dedication are remarkable. They crafted a strategy that met and exceeded our goals, leading to growth beyond our expectations. We look forward to continued success together.",
    image: userImg,
  },
];

const TestimonySlider = () => {
  const settings = {
    className: "center mx-4",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "10px",
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto slider-container">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonySlider;
