import React from "react";
import teamImage from "../../assets/Union.png";
import rocketIcon from "../../assets/rocketIcon.png";

const Section_b = () => {
  return (
    <section className="bg-[#f9fafb] py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="relative w-full md:w-1/2">
          <div className="rounded-[60px] border border-gray-200 p-2 shadow-md overflow-hidden bg-white relative">
            <img
              src={teamImage}
              alt="Webblaze Team"
              className="rounded-[40px] w-full object-cover"
            />
            <div className="absolute top-[40px] left-10 bg-white shadow-lg rounded-xl p-2">
              <img src={rocketIcon} alt="Rocket Icon" className="h-12 w-12 " />
            </div>
            <div className="absolute bottom-0 left-0 w-10 h-1 bg-yellow-400 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1 h-10 bg-yellow-400 rounded-full" />
          </div>
        </div>

        <div className="w-full md:w-1/2 Class mx-10">
          <p className="text-red-500 font-semibold text-lg mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Digital Evolution With Innovation
          </h2>
          <p className="text-gray-600 mb-4">
            WebBlaze Softtech is not just a digital agency; it’s a catalyst for digital transformation.
            Our team of digital artisans specializes in crafting unique solutions that go beyond the norm,
            constantly pushing boundaries and setting new standards in the industry.
          </p>
          <p className="text-gray-600 mb-6">
            With a deep-rooted passion for innovation and a relentless commitment to excellence,
            WebBlaze Softtech is your ultimate partner in shaping the future of digital.
            Join us on an exhilarating journey of innovation and imagination,
            where every pixel tells a compelling story and every click unlocks a world of endless possibilities.
            Let’s revolutionize the digital landscape together!
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md shadow transition">
            Explore More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Section_b
