import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

function Section_b() {
  const navigate = useNavigate();

  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-stretch gap-10 md:gap-14 lg:gap-20 p-4 md:p-8">
        
        <div className="w-full md:w-1/2">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/02/coding-man_11zon-2048x1367.jpg"
            alt="AngularJS Developer"
            className="w-full max-w-[500px] h-auto md:h-full object-cover rounded-3xl"
          />
        </div>

        {/* RIGHT: TEXT SECTION */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug md:leading-[64px]">
            Why Choose Angular.Js?
          </h2>

          <ul className="mt-6 space-y-4 text-gray-700 text-base md:text-lg leading-relaxed llist-inside">
            <li>
              <strong>Enhanced MVC Architecture:</strong> Streamlined development with clear separation of concerns.
            </li>
            <li>
              <strong>Two-Way Data Binding:</strong> Real-time sync between data and UI for seamless UX.
            </li>
            <li>
              <strong>Modularity and Reusability:</strong> Easily maintainable, reusable components and modules.
            </li>
            <li>
              <strong>Dependency Injection:</strong> Efficient dependency handling for cleaner, testable code.
            </li>
            <li>
              <strong>Built-in Directives:</strong> Accelerate development with a rich set of ready-to-use directives.
            </li>
          </ul>

          <button
            onClick={() => navigate("/Contact_Us")}
            className="w-fit min-w-[180px] text-center mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition"
          >
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
}

export default Section_b;
