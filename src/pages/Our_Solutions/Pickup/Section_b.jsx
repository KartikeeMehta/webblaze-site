import React, { useState } from 'react';

const cards = [
  {
    image: 'https://webblazesofttech.com/wp-content/uploads/2024/11/image.png',
    title: 'Unleash the Power of Flexibility: Cater to Diverse Client Requirements',
    desc: 'With Pick Up & Drop, you gain access to a versatile web development toolkit that allows you to cater to a wide range of client requirements.Whether your client needs a simple brochure website, a complex e-commerce platform, or a data-driven application, Pick Up & Drop empowers you to deliver exceptional results. Our team of skilled developers possesses expertise in various technologies, ensuring they can translate your clients vision into a reality that exceeds expectations.',
  },
  {
    image: 'https://webblazesofttech.com/wp-content/uploads/2024/11/image-1.png',
    title: 'Seamless Collaboration: A Client-Centric Approach',
    desc: 'At Webblaze, we understand the importance of fostering a collaborative environment.Pick Up & Drop prioritizes open communication and a transparent workflow. You will be assigned a dedicated project manager who will act as your point of contact throughout the development process. This ensures you remain informed and involved at every stage, allowing you to provide valuable client insights and maintain complete control over the projects direction.',
  },
  {
    image: 'https://webblazesofttech.com/wp-content/uploads/2024/11/image-2.png',
    title: 'Effortless Branding: Deliver a Unified Client Experience',
    desc: 'Pick Up & Drop is a true white label solution, meaning the final product is delivered completely unbranded.This allows you to seamlessly integrate the website or application into your existing workflow and present it to your client as your own creation. Your agencys logo and branding will be the only ones your client sees, ensuring a consistent and professional experience.',
  },
  {
    image: 'https://webblazesofttech.com/wp-content/uploads/2025/01/image-32.png',
    title: 'Focus on What Matters Most: Grow Your Agency While We Handle the Development',
    desc: 'By leveraging Pick Up & Drop, you free up valuable resources within your agency. You can focus on core competencies like client,acquisition, strategic planning, and account management, while Webblaze takes care of the technical complexities of web development. This allows you to scale your service offerings efficiently and expand your client base without significant overhead costs.',
  },
  {
    image: 'https://webblazesofttech.com/wp-content/uploads/2025/01/image-33.png',
    title: 'Unparalleled Support: A Reliable Partner for Your Success',
    desc: 'Our commitment to your success goes beyond development. Pick Up & Drop offers ongoing support throughout the websites lifecycle.Our team will be readily available to address any technical issues or answer any questions your clients may have. This ensures a smooth user experience and empowers you to provide exceptional customer service',
  },
];

const Section_b = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const isExpanded = expandedCard === index;
          const truncatedDesc = card.desc.length > 100 ? card.desc.slice(0, 100) + '...' : card.desc;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{card.title}</h3>
                <p className="text-md text-gray-600 mb-4">
                  {isExpanded ? card.desc : truncatedDesc}
                </p>
                <button
                  onClick={() => toggleCard(index)}
                  className="text-blue-500 text-sm mt-auto hover:underline"
                >
                  {isExpanded ? 'Show Less ▲' : 'Show More ▼'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section_b;
