
import React from 'react';

const features = [
  {
    title: 'Server-Side Development',
    description:
      'Building speedy and dependable server-aspect packages the usage of Node.Js.',
  },
  {
    title: 'Full-Stack Capabilities',
    description:
      'Integrating Node.Js seamlessly with the front-cease frameworks like React.Js for dynamic consumer reviews.',
  },
  {
    title: 'Real-Time Communication',
    description:
      'Implementing WebSocket protocols and technology like Socket.Io for real-time applications.',
  },
  {
    title: 'Database Management',
    description:
      'Leveraging MongoDB and Mongoose to deal with big volumes of information successfully.',
  },
  {
    title: 'Cloud Deployment',
    description:
      'Deploying Node.Js programs on platforms like AWS, Google Cloud, and Azure for scalability and reliability.',
  },
  {
    title: 'Security Best Practices',
    description:
      'Implementing stable coding practices and frameworks like Passport.Js for authentication.',
  },
   {
    title: 'Performance Optimization',
    description:
      'Using profiling gear and techniques to optimize Node.Js programs for velocity and performance.',
  },

];

const Section_e = () => {
  return (
    <div className="bg-white max-w-[1200px] mx-auto py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
         Node.Js Developer Expertise
        </h2>
         <p className="text-sm text-white-100 w-full md:w-[65%] mx-auto text-center mb-10 leading-relaxed mt-3">
             Our team of Node.Js developers at Webblaze brings full-size expertise across numerous domain names:
            </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 border-b-4 border-b-blue-500"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section_e;
