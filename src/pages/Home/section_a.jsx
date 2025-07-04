import React from "react";
import { Button } from "@/components/ui/button";
export default function SectionA() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
          Rapid, Reliable and Ready <br />– Get Your{" "}
          <span className="text-red-500">App Developed</span>
          <br /> by Industry Experts
        </h1>
        <p className="text-gray-600 mb-6 max-w-lg">
          From Concept to Launch, We Build High-Performance Apps that Meet Your
          Needs and Exceed Your Expectations.
        </p>
        <div className="flex gap-4 mb-8">
          <Button
            variant="outline"
            className="bg-[#1c92ff] hover:bg-white text-white hover:text-[#1c92ff] shadow-md border-[2px] border-blue-500 min-w-[150px]"
          >
            Get in Touch
          </Button>
          <Button
            className="hover:bg-[#1c92ff] rounded-lg hover:text-white bg-white shadow-md border-[2px] border-blue-500 min-w-[150px] text-[#1c92ff]"
            variant="outline"
          >
            Hire a Developer
          </Button>
        </div>
        <div className="flex items-center gap-6 mt-4">
          <span className="font-semibold text-gray-800">
            Clients
            <br />
            3000+
          </span>
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/maersk.svg"
            alt="Maersk"
            className="h-8"
          />
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/nestle.svg"
            alt="Nestle"
            className="h-8"
          />
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/dominos.svg"
            alt="Domino's"
            className="h-8"
          />
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/famooshed.svg"
            alt="Famooshed"
            className="h-8"
          />
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/starbucks.svg"
            alt="Starbucks"
            className="h-8"
          />
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex justify-center items-center relative">
        <img src="./section_a_bg.png" alt="Phone 1" />
      </div>
    </section>
  );
}
