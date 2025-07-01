import React from 'react';
import ourValueImage from "../../assets/ourValueImage.png";

const Section_d = () => {
  return (
    <section className="relative py-20 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-[#0D1128]/90"
        style={{
          backgroundImage: `url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
 <div className="max-w-[1200px] mx-auto">

 
      <div className="text-center px-4 relative z-10">
        <p className="text-red-400 font-semibold mb-2">Our Mission & Vision</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Proven Results, And Exceptional Service
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base">
          We pride ourselves on delivering a value proposition that goes beyond expectations.
          Our approach is centered on understanding your business inside.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 relative z-10">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src={ourValueImage}
            alt="Our Journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold mb-2">Our Journey</h3>
            <p className="text-sm leading-relaxed">
              Webblaze began in 2014 with a vision to revolutionize how businesses approach technology and online presence.
              What started as a small team of passionate developers and designers has now grown into a full-service digital
              solutions company with a global clientele. Over the years, we have consistently evolved to meet the dynamic demands
              of the digital landscape, delivering exceptional results for businesses of all sizes.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8">
          <div className="bg-white text-gray-800 rounded-xl shadow p-6">
            <h4 className="text-xl font-bold text-red-500 mb-2">Our Mission</h4>
            <p className="text-sm">
              Our mission is to enable businesses to thrive in the digital age by providing them with state-of-the-art solutions
              that drive growth, efficiency, and innovation. We strive to be more than just a service provider; we aim to be a
              strategic partner in your success story.
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-xl shadow p-6">
            <h4 className="text-xl font-bold text-red-500 mb-2">Our Vision</h4>
            <p className="text-sm">
              To be a global leader in digital transformation, empowering businesses with innovative technology,
              seamless user experiences, and impactful strategies.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Section_d;
