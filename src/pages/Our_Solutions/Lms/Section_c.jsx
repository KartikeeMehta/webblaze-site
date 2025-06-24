import React from 'react'

const Section_c = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="flex-1">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/10/Key-Features-of-Webblaze-LMS-1.webp" // Replace with actual image path
            alt="Webblaze LMS Features"
            className="w-full rounded"
          />
        </div>

        {/* Right: Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">Key Features of Webblaze LMS</h2>
          <ul className="space-y-4 text-gray-800">
            <li>
              <strong>User-Friendly Interface :</strong> Our LMS software is designed with simplicity in thoughts.
              Users can easily navigate via courses, song their development, and get admission to assets with minimal effort.
            </li>
            <li>
              <strong>Customizable Learning Paths :</strong> Webblaze LMS allows instructors to create personalised getting to know paths for his or her college students. This function is good for academic institutions and corporate education applications.
            </li>
            <li>
              <strong>Advanced Analytics :</strong> Track the overall performance of your rookies with our comprehensive analytics tools. Understand engagement degrees, finishing touch rates, and areas needing improvement.
            </li>
            <li>
              <strong>Seamless Integration:</strong> Our LMS systems integrate effects with present tools which includes SharePoint, Microsoft Project, and various HR schooling software, ensuring a easy transition and enhanced functionality.
            </li>
            <li>
              <strong>Mobile Compatibility :</strong> Access gaining knowledge of substances on-the-go together with our cell-pleasant platform. This guarantees that mastering isn’t always limited to computers and can happen anytime, everywhere.
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section_c
