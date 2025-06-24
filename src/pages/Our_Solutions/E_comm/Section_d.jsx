import React from 'react';

const Section_d = () => {
  return (
    <section className='bg-gray-50'>
      <h1 className='text-4xl text-black text-center'>Our E-commerce Development Process</h1>
    <div className=" max-w-[1200px] mx-auto px-4 py-16 space-y-20">
      {/* Row 1: Image Left, Text Right */}
      <div className=" flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden border-4 border-yellow-300 w-80 h-80">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/11/Requirement-Analysis-1.webp"
              alt="Hospital Management"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Requirement Analysis
          </h2>
          <p className="text-gray-700 text-lg">
            We begin by way of using very well information your commercial employer needs and objectives. This helps us create a tailored ecommerce solution that meets your specific requirements.
          </p>
        </div>
      </div>

      {/* Row 2: Text Left, Image Right */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Design and Development
          </h2>
          <p className="text-gray-700 text-lg">
           Our group of ecommerce internet site builders and designers artwork together to create a visually attractive and practical net website online. We use the extremely-contemporary technology and best practices to ensure that your net web page is of the very best quality.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden border-4 border-red-400 w-80 h-80">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/11/Design-and-Development-1.webp"
              alt="Advanced Hospital Systems"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Row 3: Image Left, Text Right */}
      <div className=" flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden border-4 border-yellow-300 w-80 h-80">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/11/Testing-and-Quality-Assurance-1.webp"
              alt="Hospital Management"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Testing and Quality Assurance 
          </h2>
          <p className="text-gray-700 text-lg">
            Before launching your ecommerce internet site, we conduct rigorous testing to ensure that it’s far freed from insects and performs optimally. We take a look at for compatibility across distinct devices and browsers, as well as safety vulnerabilities.
          </p>
        </div>
      </div>

      {/* Row 4: Text Left, Image Right */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Deployment and Support
          </h2>
          <p className="text-gray-700 text-lg">
            Once your internet site is ready, we manage the deployment approach and offer ongoing resource to make certain that it runs smoothly. Our group is constantly to be had to help you with any problems or updates.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden border-4 border-red-400 w-80 h-80">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/11/Deployment-and-Support-1.webp"
              alt="Advanced Hospital Systems"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    </div>
    </section>
  );
};

export default Section_d;
