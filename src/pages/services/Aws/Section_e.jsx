import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";

function Section_e() {
  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row  items-center justify-between gap-10 rounded-3xl p-8 ">
        <div className="md:w-[50%] w-full">
          <h2 className="text-xl md:text-4xl font-bold md:leading-[64px] text-black">
            Transform Your Business with Webblaze and AWS
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Partnering with Webblaze means unlocking the whole potential of AWS
            cloud offerings tailor-made to your particular commercial enterprise
            goals. Whether you’re trying to migrate to AWS, optimize your
            current infrastructure, or harness superior features like AI and
            machine gaining knowledge of with SageMaker, our licensed AWS
            specialists are right here to manual you each step of the manner.
          </p>

        </div>

        <div className="md:w-[50%] w-full">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2025/02/data-server-racks-hub-room-with-big-data-computer-center-blue-interior-hosting-storage-hardware_11zon-scaled.jpg"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-full h-[450px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Section_e;
