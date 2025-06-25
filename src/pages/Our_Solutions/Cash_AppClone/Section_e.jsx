import React from 'react';
import seoImage from "../../../assets/seoImage.png"

const seoServices = [
  {
    title: "Crypto Wallet Development Services",
    description:
      "Webblaze offers a comprehensive suite of  crypto wallet improvement services . From  blockchain wallet development  to  token wallet development , we provide solutions that cater to various crypto wishes. Our  nft pockets development  offerings are designed to aid the growing demand for NFT transactions and storage.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/11/image-80.png",
    border: "border-yellow-400",
  },
  {
    title: "Custom Payment Application Development",
    description:
      "In addition to our  coins app clone , we concentrate on custom  fee application  improvement. Whether you need a  robinhood clone  or a  remit app down load , we have the capabilities and enjoy to deliver a brilliant solution. Our apps are designed to be consumer-friendly, secure, and scalable, making sure that they meet the desires of your enterprise.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/11/Mask-group-37.png",
    border: "border-red-400",
  },
  {
    title: "White Label Wallet Development",
    description:
      "Our  white label cryptocurrency pockets development  offerings can help you launch your pockets beneath your logo call. This is a price-powerful and green way to go into the digital payment marketplace with out the need for sizable improvement. Our white label solutions are customizable, making sure that they align together with your brand identification and enterprise goals.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/11/image-79.png",
    border: "border-yellow-400",
  },
];

const Section_e = () => {
  return (
    <div className="relative bg-[#F9FAFB] py-20 px-6 sm:px-12 overflow-hidden">
      <img
        src="https://webblazesofttech.com/wp-content/uploads/2024/07/plane.svg"
        alt="plane"
        className="absolute right-10 top-10 w-25"
      />
      <img
        src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-2.webp"
        alt="dots"
        className="absolute bottom-10 right-10 w-20"
      />
      <img
        src={seoImage}
        className="absolute bottom-0 left-0 w-40"
      />

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-3xl font-bold text-gray-900">
          Explore Our Range of Services
        </h2>
      
      </div>

      <div className="mt-16 space-y-20 max-w-5xl mx-auto">
        {seoServices.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-14`}
          >
            <div className={`w-[140px] sm:w-[160px] h-[260px] sm:h-[300px] border-4 ${service.border} rounded-[70px] overflow-hidden flex-shrink-0`}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-md md:text-base text-gray-700 mt-4 whitespace-pre-line">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section_e;