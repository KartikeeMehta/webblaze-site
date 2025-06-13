import React from "react";

const teamMembers = [
  {
    name: "Simranjit Kaur",
    role: "Sr.BDE",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/simran.png",
  },
  {
    name: "Gagan Thakur",
    role: "PHP Developer",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/gagan.png",
  },
  {
    name: "Ruchika Sharma",
    role: "PHP Developer",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/ruchika.png",
  },
  {
    name: "Nitish Aujla",
    role: "Front End Developer",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/nitish.png",
  },
  
];

const Section_g = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-red-500 font-medium mb-2">Our Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Meet our creative staff
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We pride ourselves on delivering a value proposition that goes beyond expectations.
          Our approach is centered on understanding your business inside.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-lg mx-auto h-60 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows (static) */}
        <div className="mt-10 flex justify-center gap-4">
          <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-100">
            <span className="text-xl font-semibold">{`←`}</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-100">
            <span className="text-xl font-semibold">{`→`}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section_g;
