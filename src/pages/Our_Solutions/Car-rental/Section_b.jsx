import React from 'react';

const Section_b = () => {
  const features = [
    {
      title: 'User-Friendly Interface',
      desc: 'Our vehicle condo app affords a seamless enjoy for customers looking for rentalcars, car hire near me, or cheap automobile rentals. The intuitive design guarantees that customers can effortlessly navigate through numerous options and make brief bookings.',
      borderColor: 'border-red-400',
    },
    {
      title: 'Advanced Booking System',
      desc: 'The app includes a sturdy booking machine that allows customers to e-book condominium automobiles, which includes alternatives like airport car apartment and one manner vehicle condo. With features like automobile rental without credit score card and automobile apartment with debit card, we cater to a huge variety of customers.',
      borderColor: 'border-blue-400',
    },
    {
      title: 'Real-Time Vehicle Availability',
      desc: 'Ensure your clients have up to date information on car availability. Our app offers actual-time updates at the availability of various vehicles, from financial system vehicle rental to luxury car condo, making sure your customers can discover the right car at the right time.',
      borderColor: 'border-yellow-400',
    },
    {
      title: 'Multiple Payment Options',
      desc: 'Our app supports numerous payment techniques, making it smooth for clients to pay using their favored alternatives. This consists of options for month-to-month vehicle apartment payments and long term car condo plans.',
      borderColor: 'border-green-400',
    },
    {
      title: 'Comprehensive Car Listings',
      desc: 'From SUV condo and minivan rental to distinct automobile condo, our app features a complete list of automobiles available for rent. Customers can clear out by means of kind, vicinity, and rate to discover the precise car apartment deal.',
      borderColor: 'border-green-400',
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Key Features of Our Car Rental App
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-white p-6 rounded-2xl shadow-sm border-2 ${feature.borderColor} transition-transform hover:scale-[1.03] duration-300`}
            >
              <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_b;
