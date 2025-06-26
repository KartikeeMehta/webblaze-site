import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";


const projects = [
  {
    title: "Famooshed",
    description:
      "Our team delivered a tailored food delivery platform, blending intuitive design, seamless development, and strategic marketing to create a user-friendly, high-performance solution that elevates the online ordering experience.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/07/famooshed-laptop.webp",
  },
  {
    title: "GIG Findr",
    description:
      "We crafted a dynamic artist booking platform, combining innovative design, robust development, and targeted marketing to empower performers and venues with a streamlined, scalable digital solution.",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/07/gig-finder.webp",
  },
  {
    title: "Maj Permanent",
    description:
      "We developed a custom e-commerce platform, integrating sleek design, powerful development, and data-driven marketing to deliver a seamless shopping experience that drives engagement, conversions, and brand growth.",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/07/maj-permanent.webp",
  },
  {
    title: "MyBook Venture",
    description:
      "We are always one step ahead, continuously evolving and adjusting to provide the latest solutions, ranging from web applications to SEO. We offer cutting-edge solutions, a customized approach, and outstanding customer service to propel your business to success in the digital realm.",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/07/mybookventure.webp",
  },
];

function Section_g() {
  return (
    <section className="w-full bg-[#0B1120] text-white py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-16">
        <h4 className="text-red-400 text-lg font-medium mb-2">Portfolio</h4>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          The Successfully Brewed Businesses
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          Customers in over 180 countries are growing their businesses with Webblaze.
        </p>
      </div>

      {/* Carousel */}
      <Carousel className="max-w-7xl mx-auto relative">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="flex flex-col lg:flex-row items-center gap-10">
              {/* Left Text */}
              <div className="lg:w-1/2 px-4">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white text-sm shadow-lg transition">
                  Explore More
                </Button>
              </div>

              {/* Right Image */}
              <div className="lg:w-1/2 flex justify-center px-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-[500px] w-full object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="absolute -left-16 top-1/4 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
          <ChevronLeft className="w-6 h-6" />
        </CarouselPrevious>

        <CarouselNext className="absolute -right-14  top-1/4 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
          <ChevronRight className="w-6 h-6" />
        </CarouselNext>
      </Carousel>
    </section>
  );
}

export default Section_g;
