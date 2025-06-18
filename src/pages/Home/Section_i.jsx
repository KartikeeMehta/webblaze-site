import React from 'react';

const clients = [
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275239.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275240.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275241.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275242.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275243.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275244.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275245.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275246.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275247.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275248.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275249.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275250.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275251.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275252.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275253.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275255.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275254.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275256.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275257.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275258.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275260.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275259.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275261.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275262.svg' },
  { logo: 'https://webblazesofttech.com/wp-content/uploads/2024/07/Group-1171275263.svg' },
];

const Section_i = () => {
  return (
    <section className="py-12 px-6 bg-white text-center">
      <h2 className="text-red-500 text-lg font-semibold mb-2">Clients</h2>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        We Have Made Them Taste Success
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Discover the digital possibilities for your brand with our comprehensive suite of services.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" >
        {clients.map((client, index) => (

          <img
            src={client.logo}
            alt={`client-logo-${index}`}
            className="max-h-17 w-auto object-contain items-center justify-center p-4"
          />
        ))}
      </div>
    </section>
  );
};
export default Section_i;
