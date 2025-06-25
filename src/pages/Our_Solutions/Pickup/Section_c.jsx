import React from 'react';

const Section_c = () => {
  const points = [
    {
      icon: '/Pickup_1.png',
      title: 'Expand service offerings',
      desc: 'Expand service offerings and include web development in their portfolio.',
      color: 'text-red-500',
    },
    {
      icon: '/Pickup_2.png',
      title: 'Increase revenue',
      desc: 'Increase revenue by delivering high-quality web solutions to clients.',
      color: 'text-blue-500',
    },
    {
      icon: '/Pickup_3.png',
      title: 'Improve efficiency',
      desc: 'Improve efficiency by delegating development tasks to a reliable partner.',
      color: 'text-yellow-500',
    },
    {
      icon: '/Pickup_4.png',
      title: 'Enhance client satisfaction',
      desc: 'Enhance client satisfaction by offering a comprehensive digital experience.',
      color: 'text-black',
    },
    {
      icon: '/Pickup_5.png',
      title: 'Strengthen brand reputation',
      desc: 'Strengthen brand reputation by delivering exceptional web projects seamlessly.',
      color: 'text-red-500',
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Ready to Elevate Your Agency&apos;s Capabilities?</h2>
        <p className="pt-5 text-lg text-gray-600">Pick Up & Drop is the perfect solution for agencies looking to:</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/01/Rectangle-42885.png" // Replace with your actual image path
            alt="Delivery person"
            className="rounded-2xl w-full"
          />
        </div>

        {/* Right Text with PNG Icons */}
        <div className="w-full lg:w-1/2 space-y-6">
          {points.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
              <div>
                <h3 className={`text-lg font-semibold ${item.color}`}>{item.title}</h3>
                <p className="text-gray-600 text-md">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_c;
