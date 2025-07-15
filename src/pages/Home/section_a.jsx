import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SectionA() {
  const navigate = useNavigate();

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
          Rapid, Reliable and Ready <br />
          – Get Your{" "}
          <span className="text-red-500">App Developed</span>
          <br /> by Industry Experts
        </h1>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto md:mx-0 text-base sm:text-lg">
          From Concept to Launch, We Build High-Performance Apps that Meet Your
          Needs and Exceed Your Expectations.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
          <Button
            onClick={() => navigate("/Contact_Us")}
            variant="outline"
            className="bg-[#1c92ff] hover:bg-white rounded-xl text-white hover:text-[#1c92ff] shadow-md border-[2px] border-blue-500 min-w-[150px] py-5"
          >
            Get in Touch
          </Button>
          <Button
            onClick={() => navigate("/Contact_Us")}
            className="hover:bg-[#1c92ff] rounded-xl hover:text-white bg-white shadow-md border-[2px] border-blue-500 min-w-[150px] text-[#1c92ff]  py-5"
            variant="outline"
          >
            Hire a Developer
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
          <span className="font-semibold text-gray-800 text-sm sm:text-base w-full sm:w-auto text-center sm:text-left">
            Clients <br /> 3000+
          </span>
          {[
            "maersk",
            "nestle",
            "dominos",
            "famooshed",
            "starbucks",
          ].map((name) => (
            <img
              key={name}
              src={`https://webblazesofttech.com/wp-content/uploads/2024/07/${name}.svg`}
              alt={name}
              className="h-6 sm:h-8"
            />
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center w-full md:w-auto">
        <img
          src="./section_a_bg.png"
          alt="Phone"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </section>
  );
}
