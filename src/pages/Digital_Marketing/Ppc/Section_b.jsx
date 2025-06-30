import React from "react";

const Section_b = () => {
  return (
    <section className="py-20 px-4 md:px-12 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="h-[80%]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
              Why Choose Webblaze for Your PPC Needs?
            </h2>
            
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2025/02/3d-flat-icon-person-with-laptop-ppc-icons-overlay-pay-per-click-marketing-strategy-iso_11zon-scaled.jpg"
              alt="PPC Illustration"
              className="rounded-xl w-full object-cover max-w-[500px] h-[70%]  shadow-lg"
            />
            <img 
            className=" pt-24 ml-[350px] object-center"
            src="StoneBg.png" alt="" />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              At Webblaze, we apprehend the power of Pay-Per-Click (PPC) advertising.
              As a main internet development organisation, we specialise in handing
              over targeted and effective PPC campaigns that power visitors and boost
              conversions. Our comprehensive PPC services are designed to assist
              agencies of all sizes, whether or not you are a startup or a properly-mounted emblem.
            </p>
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2025/02/1016209_OJ91E50.jpg"
              alt="Paid per Click Graphic"
              className="rounded-xl w-full max-w-[500px] shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_b;
