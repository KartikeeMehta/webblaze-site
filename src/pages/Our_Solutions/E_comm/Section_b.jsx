import React from 'react'

const Section_b = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="flex-1">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/11/Why-Choose-Webblaze-for-E-commerce-Development.webp" // Replace with actual image path
            alt="Webblaze LMS Features"
            className="w-full rounded"
          />
        </div>

        {/* Right: Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">Why Choose Webblaze for E-commerce Development?</h2>
          <ul className="space-y-4 text-gray-800">
            <li>
              <strong>Comprehensive E-trade Development Services :</strong> Webblaze offers a extensive range of e-exchange development services, together with custom ecommerce improvement, ecommerce website design and improvement, and ecommerce app development. Our purpose is that will help you construct an ecommerce internet site that now not high-quality appears first rate however moreover plays perfectly.
            </li>
            <li>
              <strong>Expert E-commerce Developers : </strong> Our group carries professional ecommerce internet developers and ecommerce app builders who’ve good sized revel in in constructing ecommerce websites from scratch. We are gifted in severa e-trade structures along with Magento, WooCommerce, and Shopify, ensuring that we will meet your specific necessities.
            </li>
            <li>
              <strong>Tailored E-change Solutions : </strong> We apprehend that every organisation is precise, it really is why we provide custom ecommerce internet improvement offerings. Whether you need a bespoke ecommerce platform or a completely customized ecommerce website, our organization will artwork cautiously with you to deliver an answer that aligns together along with your enterprise goals.
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

export default Section_b
