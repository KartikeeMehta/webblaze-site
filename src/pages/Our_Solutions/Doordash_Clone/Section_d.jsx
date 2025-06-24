import React from 'react';

const benefits = [
  {
    title: 'Increased Reach and Visibility',
    image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/Rectangle-42645-10.png',
    description:
      'By providing a reliable food delivery carrier via our Doordash clone app, you could reach a bigger target market and grow your visibility inside the marketplace. This gain is similar to the use of a food delivery app clone or a delivery clone app.',
  },
  {
    title: 'Enhanced Customer Loyalty',
    image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/Rectangle-42645-7-1.png',
    description:
      'Provide a unbroken and satisfying user experience to reinforce consumer loyalty. Features such as real-time tracking, multiple payment options, and in-app support contribute to a positive customer journey, just like UberEats or Swiggy clone apps.',
  },
  {
    title: 'Revenue Growth',
    image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/Rectangle-42645-9-1.png',
    description:
      'With our Doordash clone app, you can explore several revenue streams including delivery charges, service fees, and promotional partnerships. This model has proven successful for apps like UberEats and Foodpanda clones.',
  },
];

const Section_d = () => {
  return (
    <section className="bg-[#f9fbfd] py-16 px-4">
      <div className="max-w-[1200px] mx-auto text-center px-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12">
          How Our Doordash Clone App Benefits Your Business
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 max-w-sm w-full text-center hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mb-4 rounded-md h-48 w-full object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_d;
