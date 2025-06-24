import React from 'react';

const features = [
  {
    title: 'Job Scheduling and Management',
    image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/487365b5e8cd1251ce5c44f2334ed6da.png',
    points: [
      'Easily control activity assignments, tune undertaking progress, and display group availability.',
      'Optimize your scheduling to make certain timely carrier delivery.',
      'Features for handling appointments for handyman offerings near me, neighborhood handyman services, and more.',
    ],
  },
  {
    title: 'Customer Relationship Management',
    image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/af8d25ee227d48f8cc24b18ef62f8f59.png',
    points: [
      'Maintain specified patron statistics and service history.',
      'Automated follow-ups and reminders for repeat services.',
      'Efficient dealing with of requests for ace handyman offerings and angie’s list handyman.',
    ],
  },
  {
    title: 'Invoicing and Payments',
    image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/0b5c96f10e27d81f0cdbc1a220b008c1.png',
    points: [
      'Simplify your billing process with automated invoicing.',
      'Secure fee gateways to facilitate hassle-free transactions.',
      'Manage payments for services like handyman plumbers near me and handyman roofers close to me.',
    ],
  },
  {
    title: 'Quoting and Estimation',
    image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/e5896ef2b770bf4712c332e5e3c85097.png',
    points: [
      'Generate correct fees fast.',
      'Include information for offerings like handyman road restore close to me and handyman storage door restore.',
      'Customizable templates for expert-looking estimates.',
    ],
  },
];

const Section_b = () => {
  return (
    <section className="bg-[#0f1227] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover bg-center py-20 px-4">
      <div className="max-w-[1200px] mx-auto text-center px-5">
        <h2 className="text-3xl font-bold text-white mb-16">
          Key Features of Webblaze&apos;s Handyman Software
        </h2>

        <div className="space-y-20">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-10`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-[300px] h-[200px] object-cover rounded-xl shadow-lg"
              />
              <div className="text-left text-white max-w-xl">
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <ul className="text-sm list-disc list-inside space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_b;
