import React from 'react'

const Section_f = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 space-y-20">
      
      {/* Section 1  */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Integration with Popular Tools
          </h2>
          <p className="text-black text-lg">
            Webblaze LMS seamlessly integrates with widely-used systems along with Microsoft Project, SharePoint, and numerous HR training software program. This integration ensures that your organization can leverage current equipment even as taking advantage of the advanced capabilities of our LMS.
          </p>
        </div>
        {/* Image */}
        <div className="flex-1">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/10/Integration-with-Popular-Tools-2.webp" 
            alt="Integration"
            className="w-full rounded-2xl"
          />
        </div>
      </div>

      {/* Section 2:  */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/10/Microsoft-Project-Training-2.webp"
            alt="Microsoft Training"
            className="w-full rounded"
          />
        </div>
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Microsoft Project Training
          </h2>
          <p className="text-gray-700 text-lg">
            For corporations utilising Microsoft Project, our LMS systems provide specialized schooling modules to decorate undertaking control abilities. These modules are designed to help users maximize the capacity of Microsoft Project, making sure green undertaking execution and control.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section_f
