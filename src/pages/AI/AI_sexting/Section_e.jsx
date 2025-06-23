import React from 'react';

const Section_e = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-16 px-4"
      style={{
        backgroundImage: `url('https://webblazesofttech.com/wp-content/uploads/2024/10/image-41.webp')`,
      }}
    >
      <div className="max-w-[1200px] mx-auto text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How Our Sexting Chat Bot Works
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          {/* Card 1 */}
          <div className="bg-white text-black p-6 rounded-xl w-full md:w-1/3 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
            <p className="text-gray-700">
              Our group at Webblaze guarantees seamless integration of the sexting chat bot into your current platform. We cope with the technical elements, permitting you to cognizance on leveraging the bot's abilities to decorate your enterprise.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black p-6 rounded-xl w-full md:w-1/3 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
            <p className="text-gray-700">
              We constantly update and improve our sexting chat bot to ensure it stays at the vanguard of era. This dedication to innovation ensures which you continually have get admission to to the great nsfw chatbots and the latest features.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-black p-6 rounded-xl w-full md:w-1/3 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
            <p className="text-gray-700">
              Webblaze presents dedicated assist to make sure the easy operation of your sexting chat bot. Our crew is to be had to cope with any problems and offer help, ensuring that your bot runs perfectly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_e;
