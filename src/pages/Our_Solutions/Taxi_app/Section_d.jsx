import React from 'react';

const Section_d = () => {
  const options = [
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-44.webp',
      title: 'Branding',
      desc: 'Customize the app’s look and feel to fit your logo identity.',
    },
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-45.webp',
      title: 'Feature Integration',
      desc: 'Add precise functions which encompass enjoy-sharing, pool rides, or possibly a pinnacle charge service like Uber Limo.',
    },
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-46.webp',
      title: 'Regional Adaptation',
      desc: 'Tailor the app to meet neighborhood hints and character selections, which include language help and fee integrations.',
    },
  ];

  return (
    <div className="bg-[#0f172a] text-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Customizable Solutions for Diverse Needs
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
          Whether you want a white-label taxi app to logo as your personal or a completely custom solution, Webblaze offers flexible improvement alternatives. Our taxi app solutions are pleasant for various industrial enterprise corporation models, from community taxi services to huge-scale operations.
        </p>

        <h3 className="text-2xl font-semibold text-white text-center mb-8">Customization Options</h3>

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

export default Section_d;
