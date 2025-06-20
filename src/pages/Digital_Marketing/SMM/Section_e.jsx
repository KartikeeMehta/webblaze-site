import React from 'react'

const Section_e = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full px-6 lg:px-20 py-10 gap-10">
  {/* Left Text & Cards */}
  <div className="flex flex-col gap-6 w-full lg:w-1/2">
    <h2 className="text-3xl font-bold text-gray-900">
      Tailored Social Media Strategies
    </h2>
    <p className="text-gray-600">
      We understand that each enterprise is precise. That’s why Webblaze gives
      tailored social media techniques to meet your particular needs.
    </p>

    {/* Cards */}
    <div className="flex flex-col gap-4">
      {/* Card 1 */}
      <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm bg-white">
        <img src="/images/pricing-icon.png" alt="Pricing" className="w-10 h-10" />
        <div>
          <h3 className="font-semibold">Social Media Marketing Agency Pricing</h3>
          <p className="text-gray-600 text-sm">
            Our aggressive pricing guarantees you get the pleasant price on your funding.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm bg-white">
        <img src="/images/nearby-icon.png" alt="Nearby" className="w-10 h-10" />
        <div>
          <h3 className="font-semibold">Social Media Marketing Agency Near Me</h3>
          <p className="text-gray-600 text-sm">
            We offer neighborhood and custom designed offerings to fulfill your industrial corporation desires.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm bg-white">
        <img src="/images/top-agency-icon.png" alt="Top Companies" className="w-10 h-10" />
        <div>
          <h3 className="font-semibold">Top Social Media Marketing Companies</h3>
          <p className="text-gray-600 text-sm">
            As one of the pinnacle social media advertising agencies, we deliver results that depend.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Image Section */}
  <div className="flex justify-center w-full lg:w-1/2 gap-4">
    <img
      src="https://webblazesofttech.com/wp-content/uploads/2024/08/youtube.webp"
      alt="YouTube"
      className="rounded-[2rem] w-[150px] md:w-[180px] lg:w-[200px]"
    />
    <img
      src="https://webblazesofttech.com/wp-content/uploads/2024/08/iphone.webp"
      alt="Social Apps"
      className="rounded-[2rem] w-[150px] md:w-[180px] lg:w-[200px]"
    />
  </div>
</div>

  )
}

export default Section_e
