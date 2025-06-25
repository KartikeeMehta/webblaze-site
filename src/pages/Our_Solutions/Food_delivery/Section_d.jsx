import React from 'react';

const Section_d = () => {
  const features = [
    {
      title: 'User-Friendly Interface',
      desc: 'Our apps are designed with a consumer-first-class interface that makes navigation clean and intuitive. From surfing menus to putting orders, every characteristic is crafted to decorate the person enjoy.',
      img: '/Food_5.png',
    },
    {
      title: 'Real-Time Tracking',
      desc: 'One of the important thing abilties of our meals shipping apps is actual-time monitoring. Users can song their orders from the immediate they area them till they will be added, imparting a feel of security and transparency.',
      img: '/Food_6.png',
    },
    {
      title: 'Secure Payment Integration',
      desc: 'We make sure that all transactions made via our apps are strong. Our apps guide a couple of fee strategies, together with credit cards, debit playing cards, and digital wallets, making sure comfort for clients.',
      img: '/Food_7.png',
    },
    {
      title: 'Advanced Analytics',
      desc: 'Our apps consist of superior analytics capabilities that provide treasured insights into character conduct and selections. This records will permit you to make knowledgeable choices to improve your offerings and growth consumer satisfaction.',
      img: '/Food_8.png',
    },
    {
      title: 'Customizable Options',
      desc: 'We provide quite a number customizable alternatives to ensure that your app meets your particular desires. From branding factors to precise capabilities, we tailor our answers to in shape your necessities.',
      img: '/Food_9.png',
    },
  ];

  return (
    <div className="bg-gray-50 px-4 py-12 flex justify-center">
      <div className="max-w-[1200px] w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Features of Our Food Delivery Apps
        </h2>

        {/* Top Row (3 Cards) */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="flex-1 min-w-[280px] max-w-[380px] bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <img src={feature.img} alt={feature.title} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row (2 Cards) */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {features.slice(3).map((feature, index) => (
            <div
              key={index}
              className="flex-1 min-w-[280px] max-w-[380px] bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <img src={feature.img} alt={feature.title} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_d;
