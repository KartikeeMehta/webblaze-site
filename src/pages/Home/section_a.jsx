import React from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path as per your setup

export default function SectionA() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Side */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Rapid, Reliable and Ready <br />– Get Your{" "}
          <span className="text-red-500">App Developed</span>
          <br /> by Industry Experts
        </h1>
        <p className="text-gray-600 mb-6 max-w-lg">
          From Concept to Launch, We Build High-Performance Apps that Meet Your
          Needs and Exceed Your Expectations.
        </p>
        <div className="flex gap-4 mb-8">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Get in Touch
          </Button>
          <Button variant="outline">Hire a Developer</Button>
        </div>
        <div className="flex items-center gap-6 mt-4">
          <span className="font-semibold text-gray-800">
            Clients
            <br />
            3000+
          </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Maersk_Group_logo.svg"
            alt="Maersk"
            className="h-8"
          />
          <img
            src="https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo-500x281.png"
            alt="Nestle"
            className="h-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg"
            alt="Domino's"
            className="h-8"
          />
          <img
            src="https://seeklogo.com/images/F/famooshed-logo-6A1B6B2B2B-seeklogo.com.png"
            alt="Famooshed"
            className="h-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/sco/thumb/4/45/Starbucks_Coffee_Logo.svg/1200px-Starbucks_Coffee_Logo.svg.png"
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
