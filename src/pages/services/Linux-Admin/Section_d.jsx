import React from 'react'

const Section_d = () => {
  return (
    <div className="bg-[#181C2E] bg-[url(https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp)] text-white py-16 px-4 md:px-12">
                  {/* Heading or text */}
  <div className="text-center max-w-4xl mx-auto mb-12">
    <h2 className="text-3xl font-bold mb-4">Our Training Approach</h2>
    <p className="text-gray-300">
      Our courses are designed with the aid of enterprise experts to equip you with sensible skills in Linux system
      management. Whether you are interested in Linux server control or turning into a certified administrator,
      our education packages cowl all essential components.
    </p>
  </div>

                      {/* Card ka  Div */}
  <div className="flex flex-wrap justify-center gap-6">
               {/* Card 1 */}
    <div className="w-full md:w-[48%] lg:w-[30%] bg-[#122044] rounded-xl p-6 border border-blue-700 shadow-md">
      <h3 className="text-xl font-bold mb-2">Linux Foundation CKA Certification</h3>
      <p className="text-gray-300">Dive deep into Kubernetes management with our specialised education.</p>
    </div>

               {/* Card 2 */}
    <div className="w-full md:w-[48%] lg:w-[30%] bg-[#122044] rounded-xl p-6 border border-blue-700 shadow-md">
      <h3 className="text-xl font-bold mb-2">Red Hat Certified System Administrator (RHCSA)</h3>
      <p className="text-gray-300">Gain palms-on revel in in Red Hat Enterprise Linux management.</p>
    </div>

               {/* Card 3 */}
    <div className="w-full md:w-[48%] lg:w-[30%] bg-[#122044] rounded-xl p-6 border border-blue-700 shadow-md">
      <h3 className="text-xl font-bold mb-2">Linux Foundation Certified System Administrator (LFCS)</h3>
      <p className="text-gray-300">Learn important Linux abilities for powerful system management.</p>
    </div>
  </div>
</div>

  )
}

export default Section_d
