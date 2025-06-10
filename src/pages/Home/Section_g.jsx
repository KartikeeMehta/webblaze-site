import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Famooshed",
    description:
      "Our team delivered a tailored food delivery platform, blending intuitive design, seamless development, and strategic marketing to create a user-friendly, high-performance solution that elevates the online ordering experience.",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/07/famooshed-laptop.webp"
  },
  {
    title: "Next Project",
    description:
      "A revolutionary e-commerce solution that streamlined online shopping with a clean UI and powerful backend system.",
    image: "https://via.placeholder.com/600x400" // Replace with your actual project image
  }
];

function Section_g() {
  return (
    <section className="w-screen h-screen bg-[#0B1120] text-white overflow-hidden">
      <div className="text-center px-4 pt-10">
        <h4 className="text-red-400 text-lg font-medium mb-2">Portfolio</h4>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          The Successfully Brewed Businesses
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-8">
          Customers in over 180 countries are growing their businesses with Webblaze.
        </p>
      </div>

      <Carousel className="w-full h-[calc(100vh-180px)] relative">
        <CarouselContent className="h-full">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center h-full w-full px-6 gap-10"
            >
              {/* Left Content */}
              <div className="lg:w-1/2 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md">
                  Explore More
                </Button>
              </div>

              {/* Right Image */}
              <div className="lg:w-1/2 flex justify-center items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[90%] max-w-[650px] object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </section>
  );
}

export default Section_g;
