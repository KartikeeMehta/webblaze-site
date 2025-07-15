import React from 'react'

const Section_h = () => {
  return (
    <section className="bg-[#f9fafb] py-12 px-4">
      <div className="max-w-[1200px] mx-auto px-3">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Specialized Chatbot Services
        </h2>

        <div className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col w-full h-[255px] md:w-1/3">
            <img src="https://webblazesofttech.com/wp-content/uploads/2024/09/Business-Intelligence.png" alt="Image 1" className="w-full h-[255px]" />
            <div className="p-4 text-center h-[255px]">
              <h3 className="text-xl font-semibold">Business Intelligence</h3>
              <p className="text-gray-600">Implementing a business enterprise intelligence chatbot can provide treasured insights into patron conduct and alternatives, helping you’re making knowledgeable choices.</p>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/3">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">Marketing and Sales</h3>
              <p className="text-gray-600">A chatbot for advertising organizations can help with lead generation, consumer engagement, and records analysis, using enterprise growth.</p>
            </div>
            <img src="https://webblazesofttech.com/wp-content/uploads/2024/09/Marketing-and-Sales.png" alt="Image 2" className="w-full h-auto" />
          </div>

          {/* Child 3: Image Top, Text Bottom */}
          <div className="flex flex-col w-full md:w-1/3">
            <img src="https://webblazesofttech.com/wp-content/uploads/2024/09/Customer-Service.png" alt="Image 3" className="w-full h-auto" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">Customer Service</h3>
              <p className="text-gray-600">A chatbot for advertising organizations can help with lead generation, consumer engagement, and records analysis, using enterprise growth.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Section_h
