import React from 'react';

const DevelopmentProcess = () => {
  const processSteps = [
    {
      icon: '/icons/requirement-analysis.png', // Replace with actual icon paths
      title: 'Requirement Analysis',
      desc: 'We begin thru expertise your organization dreams, target marketplace, and precise selling elements.',
      color: 'text-red-500'
    },
    {
      icon: '/icons/design.png',
      title: 'Design and Prototyping',
      desc: 'Our designers create intuitive and appealing UI/UX designs, stimulated via a success apps like Uber Taxi App and Lyft Cab Service.',
      color: 'text-red-500'
    },
    {
      icon: '/icons/development.png',
      title: 'Development and Testing',
      desc: 'Using the present day generation, our builders assemble a excessive-not unusual usual performance app, cautiously tested to make sure it meets all superb necessities.',
      color: 'text-red-500'
    },
    {
      icon: '/icons/deployment.png',
      title: 'Deployment and Support',
      desc: 'We help with app deployment on app shops and offer ongoing assist and updates.',
      color: 'text-red-500'
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Why Choose Webblaze for Taxi App Development?
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
        At Webblaze, we apprehend the intricacies of growing a taxi app that stands out within the aggressive market. Our information in constructing apps just like Uber, Lyft, Bolt Taxi, and Gett Taxi ensures that your app can be strong, scalable, and person-pleasant.
      </p>

      <h3 className="text-2xl font-bold text-center mb-10">Our Development Process</h3>

      <div className="flex flex-wrap justify-center gap-8">
        {processSteps.map((step, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[45%] lg:w-[22%] flex flex-col items-center text-center"
          >
            <div className="bg-gray-100 rounded-full p-6 mb-4">
              <img src={step.icon} alt={step.title} className="w-12 h-12" />
            </div>
            <h4 className={`text-lg font-semibold mb-2 ${step.color}`}>{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentProcess;
