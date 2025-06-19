import React from 'react';

export const Section_b = () => {
  return (
    <div className="relative bg-[#F9FAFB] py-16 px-6 sm:px-12 overflow-hidden">
      <img
        src="https://webblazesofttech.com/wp-content/uploads/2024/07/plane.svg" 
        alt="paper plane"
        className="absolute top-4 right-4 w-[150px] sm:w-[150px]"
      />
      <img
        src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-2.webp"
        alt="dots"
        className="absolute bottom-4 right-4 w-10 sm:w-12 opacity-50"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full h-72 sm:h-96 rounded-2xl border-[6px] border-yellow-400 overflow-hidden">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-3.webp"
            alt="Vue.Js developer working"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Why Choose Vue.Js <br />
            for Your Next Project?
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Vue.Js is famed for its simplicity, flexibility, and overall performance. It’s the
            framework of desire for plenty builders because of its gentle learning curve and
            effective features. Vue.Js integrates seamlessly with different libraries and tasks,
            making it a versatile device for a wide variety of packages. From enhancing existing
            applications to building new ones from scratch, Vue.Js presents a strong solution for
            modern web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_b;
