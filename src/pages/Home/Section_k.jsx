import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import userImg from "../../assets/man.png";

const testimonials = [
  {
    name: "Rhys Morgan",
    location: "United Kingdom",
    message:
      "Had a great experience with Arun. He was very efficient and always available for a quick turnaround of amends. He was also very vocal and told me how long things were going to take, and always stuck to his deadlines. This was a very difficult job with a demanding client but Arun kept oil providing quality results, round after round. Good work, will definitely be using Arun for website projects in the future.",
    image: userImg,
  },
  {
    name: "John Doe",
    location: "USA",
    message:
      "Amazing work by the team. Highly professional and always on time. Will surely work again.",
    image: userImg,
  },
  // Add more testimonials here
];

const Section_k = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-[#11182B] py-16 px-4 text-white">
      <div className="text-center mb-10">
        <p className="text-red-400 text-[24px] mb-2">Testimonials</p>
        <h2 className="text-4xl font-bold">What people say about us</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 bg-[#11182B]">
        <div className="flex flex-col items-center md:items-start md:w-1/3 mb-6 md:mb-0">
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="w-28 h-28 rounded-full border-4 border-white mb-4 ms-[1.2rem]"
          />
          <div className="flex space-x-4">
            <Button
              onClick={prevSlide}
              className="rounded-full px-6 py-3 text-lg bg-[#1C92FF] text-[25px]"
            >
              ←
            </Button>
            <Button
              onClick={nextSlide}
              className="rounded-full px-6 py-3 text-lg bg-[#1C92FF] text-[25px]"
            >
              →
            </Button>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="md:w-2/3 border-l border-gray-500 pl-6">
          <p className="text-gray-300 mb-4 text-base md:text-base">
            {currentTestimonial.message}
          </p>
          <p className="font-bold text-white text-[24px]">
            {currentTestimonial.name} | {currentTestimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_k;
