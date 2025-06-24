import React from "react";

const cardData = [
  {
    title: "Secure and Reliable Wallet Development",
    description:
      "At Webblaze, we prioritize protection in all our  pockets app development  projects. Our  virtual pockets improvement  offerings consist of advanced encryption strategies to guard user information and transactions. Whether you want a  crypto pockets app improvement  or a traditional  price software , our solutions are designed to offer the very best stage of security.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/11/image-76.png",
    borderColor: "border-b-[4px] border-[#ff4d4f]",
  },
  {
    title: " Versatile Payment Solutions",
    description:
      "Our  cash app clone  supports numerous price strategies, making it a flexible tool in your commercial enterprise. From  remittance ship money  services to  crypto wallet development , we provide complete solutions that cater to a extensive range of economic needs. Our app is likewise well suited with famous remittance platforms like  sendwave cash transfer ,  remit preference app , and  global remittance app .",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/11/image-77.png",
    borderColor: "border-b-[4px] border-[#1890ff]",
  },
  {
    title: "User-Friendly Interface",
    description:"We understand the significance of a unbroken person experience. Our  coins app clone  functions an intuitive interface that simplifies transactions for customers. Whether they are using the app for  sendwave remittance ,  panda remit app , or  gcash send cash to palawan explicit , they’ll discover it smooth to navigate and use.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/11/image-78.png",
    borderColor: "border-b-[4px] border-[#fadb14]",
  },
];

const Section_b = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-[#1d1e25]">
       Key Features of Our Cash App Clone
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-xl overflow-hidden ${card.borderColor} transition-all duration-300`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-3 text-[#1d1e25]">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_b;
