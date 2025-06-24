import React from 'react';

const Section_c = () => {
  const options = [
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-30.webp',
      title: 'Customized Solutions',
      desc: 'Every automobile lease business enterprise has specific desires. We provide tailor-made solutions that cope with your particular requirements, whether you want a device for reserving vehicle rentals close to me or integrating features for cheap vehicle lease.',
    },
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-38-1.webp',
      title: 'Scalable and Secure',
      desc: 'Our apps are designed to scale together with your business. As your car condo service grows, our app can take care of accelerated traffic and transactions securely, making sure your clients’ information is blanketed.',
    },
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-2.svg',
      title: 'Integration with Existing Systems',
      desc: 'We ensure seamless integration with your existing structures. Whether you are using corporation automobile rental close to me offerings or want integration with priceline car apartment and kayak vehicle apartment structures, our app can accommodate it all.',
    },
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-3.svg',
      title: 'Enhanced Customer Experience',
      desc: 'Features like bargain automobile rental, rental car offers, and the potential to lease a van or an 8 passenger van condo make our app attractive to customers. The consumer enjoy is in addition stronger with the aid of smooth search options for car rental places close to me and automobile apartment agencies.',
    },
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-4.svg',
      title: 'Real-Time Support',
      desc: 'With capabilities like actual-time customer service, your customers can get assist whenever they need it. This consists of assistance with reserving automobile rentals and resolving any issues that may get up.',
    },
  ];

  return (
    <div className="bg-[#0f172a] text-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose Webblaze for Car Rental App Development?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden text-black shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_c;
