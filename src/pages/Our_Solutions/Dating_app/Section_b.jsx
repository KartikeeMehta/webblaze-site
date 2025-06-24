import React from 'react'

const Section_b = () => {
  return (
     <div className="max-w-[1200px] mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="flex-1">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/10/Group-1171275697-1-1.png"
            alt="Dating App Design"
            className="w-full rounded"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Dating App Development</h2>
          <ul className="space-y-4 text-gray-800">
            <li>
              <strong>Custom Solutions Tailored to Your Needs :</strong> We recognize that every dating app has its personal particular necessities. Whether you are seeking to create a Bumble clone or a completely new idea, Webblaze can customize the features to healthy your imaginative and prescient.
            </li>
            <li>
              <strong>Advanced Features and Functionalities :</strong> Our group integrates the present day technology to provide functions like geolocation, real-time messaging, and advanced matching algorithms. We make certain your relationship app sticks out inside the crowded market of relationship websites and apps.
            </li>
            <li>
              <strong>User-Friendly Interface :</strong> A seamless consumer experience is critical. We design intuitive and attractive interfaces that make it easy for customers to navigate and locate capacity fits. Whether it’s for a Hinge courting app or a brand new entrant in the marketplace, we prioritize user experience.
            </li>
            <li>
              <strong>Scalability :</strong> As your consumer base grows, your app ought to be able to take care of the expanded traffic. Our solutions are constructed to scale, making sure your app plays well in spite of a large range of users, from 100K to 1M.
            </li>
            <li>
              <strong>Security and Privacy :</strong> User accept as true with is essential for the achievement of any relationship platform. We enforce sturdy safety features to protect consumer information, making your app a safe space for on-line courting.
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section_b
