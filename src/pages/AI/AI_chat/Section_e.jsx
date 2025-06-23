import React from 'react';

const Section_e = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-16 px-4"
      style={{
        backgroundImage: `url('https://webblazesofttech.com/wp-content/uploads/2024/09/Versatile-Chatbot-Applications.png')`,
      }}
    >
      <div className="max-w-[1200px] mx-auto text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Versatile Chatbot Applications
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          {/* Card 1 */}
          <div className="bg-white text-black p-6 rounded-xl w-full md:w-1/3 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">WhatsApp Business</h3>
            <p className="text-gray-700">
              With a WhatsApp chatbot for industrial business enterprise, you could engage with
              clients on their preferred messaging platform. We provide competitive WhatsApp
              chatbot pricing to suit your fee range.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black p-6 rounded-xl w-full md:w-1/3 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">WordPress</h3>
            <p className="text-gray-700">
              Our chatbot for WordPress web sites integrates effects, presenting a unbroken patron
              revel in and stronger functionality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-black p-6 rounded-xl w-full md:w-1/3 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Small Businesses</h3>
            <p className="text-gray-700">
              The fine chatbot for small companies can deal with consumer queries, ebook
              appointments, and manipulate orders, making it a bendy device for severa industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_e;
