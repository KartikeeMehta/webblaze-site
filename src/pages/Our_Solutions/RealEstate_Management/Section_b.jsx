import React from 'react';

const features = [
  {
    title: 'Comprehensive Property Management Tools',
    description:
      "Webblaze’s Real Estate Management Software contains a vast variety of capabilities tailor-made to satisfy the wishes of assets managers, landlords, and actual estate experts. Our platform offers the best assets control software abilities, ensuring that each thing of your operations is covered. From tenant management and renovation requests to lease tracking and financial reporting, our software program streamlines your tasks, saving you effort and time.",
    icon: '/AI_news12.png', // Replace with your actual SVG path
    borderColor: 'border-b-2 border-red-500',
    iconColor: 'text-red-500',
  },
  {
    title: 'Advanced Real Estate CRM',
    description:
      'Our real property CRM software is designed to enhance your interactions with tenants, possibilities, and service vendors. This effective tool allows you to control all your contacts in a single vicinity, song communications, and agenda observe-useaffects. With our belongings management CRM, you can ensure that no lead or tenant request falls via the cracks.',
    icon: '/AI_news12.png',
    borderColor: 'border-b-2 border-blue-500',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Tailored for Small Landlords',
    description:
      'Webblaze’s belongings control software for small landlords gives the suitable balance of electricity and simplicity. Whether you want condo property software or a property management app, our solutions are designed to develop with your business. Our excellent assets control software program for small landlords includes functions like automatic lease collection, maintenance scheduling, and tenant screening, making it easier so one can control your residences efficaciously.',
    icon: '/AI_news12.png',
    borderColor: 'border-b-2 border-yellow-400',
    iconColor: 'text-yellow-400',
  },
  {
    title: 'Commercial Property Management',
    description:
      'For the ones managing larger portfolios, our industrial assets management software program offers strong tools to deal with complex operations. From exact financial reviews to integrated rent control, our commercial real property software program ensures you have got all of the records you want to make informed choices. Additionally, our assets management software for business properties includes specialized capabilities like space making plans and tenant coordination.',
    icon: '/AI_news12.png',
    borderColor: 'border-b-2 border-red-500',
    iconColor: 'text-red-500',
  },
  {
    title: 'Rental Property Management',
    description:
      'Our rental belongings management software program simplifies the day-to-day operations of handling condo properties. With condominium assets accounting software included into the machine, you could without problems tune profits and prices, generate financial reviews, and live compliant with tax guidelines. Our condo belongings software program additionally consists of functions for tenant communique, rent management, and preservation tracking.',
    icon: '/AI_news12.png',
    borderColor: 'border-b-2 border-blue-500',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Free and Affordable Options',
    description:
      'We apprehend that budgets can be tight, which is why Webblaze gives both unfastened belongings control software and low cost belongings management answers. Our unfastened belongings management software program for landlords provides essential gear to get commenced, at the same time as our low-cost plans offer more advanced capabilities as your needs grow.',
    icon: '/AI_news12.png',
    borderColor: 'border-b-2 border-yellow-400',
    iconColor: 'text-yellow-400',
  },
];

const Section_b = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className=' max-w-[1200px] mx-auto px-6'>

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">
        Key Features of Webblaze Real Estate Management Software
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md border-bottom ${feature.borderColor} p-6 w-full max-w-[380px] transition-all`}
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={feature.icon}
                alt=""
                className={`w-10 h-10 ${feature.iconColor}`}
              />
              <h3 className="text-lg font-semibold leading-snug">
                {feature.title}
              </h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
              </div>

    </section>
  );
};

export default Section_b;
