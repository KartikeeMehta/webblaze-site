import React from 'react'

const Section_c = () => {
  return (
      <section>
        <h1 className='font-bold text-4xl text-center' >Linux Administration Services Offered</h1>
   <div className="flex flex-wrap justify-center gap-6 px-4 py-10">
    
  {/* Card */}
  <div className="flex flex-col w-full sm:w-[48%] lg:w-[30%] p-6 bg-white rounded-xl shadow-sm border-b-4 border-blue-300 hover:shadow-md transition">
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Certification Courses
    </h3>
    <p className="text-gray-600 text-md">
      Prepare for enterprise-identified certifications including Linux Foundation CKA, Red Hat Certified System Administrator (RHCSA), and Linux Foundation Certified System Administrator (LFCS).
    </p>
  </div>

  <div className="flex flex-col w-full sm:w-[48%] lg:w-[30%] p-6 bg-white rounded-xl shadow-sm border-b-4 border-blue-300 hover:shadow-md transition">
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Server Management
    </h3>
    <p className="text-gray-600 text-md">
       Efficiently manipulate Linux servers, ensuring best performance and safety in your IT infrastructure.
    </p>
  </div>

  <div className="flex flex-col w-full sm:w-[48%] lg:w-[30%] p-6 bg-white rounded-xl shadow-sm border-b-4 border-blue-300 hover:shadow-md transition">
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      System Configuration
    </h3>
    <p className="  text-gray-600 text-md">
      Learn to configure and troubleshoot Linux structures for diverse environments, from small groups to business enterprise-level networks.
    </p>
  </div>
  
</div>
</section>

  )
}

export default Section_c
