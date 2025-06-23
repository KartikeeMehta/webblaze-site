import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "Smart Contract Development Cost ?",
    answer:
      "The charge of smart settlement development varies based totally on the complexity and requirements of the challenge.\n\nWe provide competitive pricing and transparent value structures to suit your budget.",
  },
  {
    question: "Solidity Development Services?",
    answer:
      "Yes, we provide Solidity-based smart contract development, optimised for Ethereum and EVM-compatible blockchains.",
  },
  {
    question: "Blockchain Smart Contract Development Services?",
    answer:
      "We offer full-stack smart contract development on Ethereum, BSC, Polygon, and more — from audit to deployment.",
  },
  {
    question: "Why Choose Webblaze?",
    answer:
      "We combine deep blockchain expertise, a proven process, and competitive pricing — making us a trusted choice globally.",
  },
];

const Section_i = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full bg-[#0D1128] py-20 px-4">
      <div className="max-w-[800px] mx-auto text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Addressing Common Queries
        </h2>

        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggle(index)}
              className="w-full bg-white text-black text-left px-6 py-4 rounded-xl flex items-center justify-between font-medium text-[17px]"
            >
              {item.question}
              <span className="ml-2">
                {activeIndex === index ? (
                  <Minus className="text-[#F75C4E]" size={20} />
                ) : (
                  <Plus className="text-[#F75C4E]" size={20} />
                )}
              </span>
            </button>

            {activeIndex === index && (
              <div className="mt-2 bg-[#0D1128] border border-white rounded-lg px-6 py-4 text-sm text-white whitespace-pre-line">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section_i;
