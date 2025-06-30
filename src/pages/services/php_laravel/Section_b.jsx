import React from "react";

const contentBlocks = [
  {
    title: "Expert PHP Developers",
    description:
      "Our team of skilled PHP builders possesses in-intensity know-how of PHP programming. From creating dynamic websites to developing robust applications, we ensure your assignment is in succesful hands. Our builders are proficient in PHP frameworks like Laravel, Symfony, CodeIgniter, and CakePHP, making certain scalable and maintainable solutions.",
    imagePath:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/php-programmer.webp",
    borderColor: "border-yellow-300",
  },
  {
    title: "Comprehensive PHP Service",
    description:
      "At Webblaze, we offer a wide variety of PHP services, consisting of PHP internet development, PHP application creation, and PHP script customization. Our knowledge extends to growing custom PHP solutions that cater to your specific enterprise necessities. We utilize the exceptional PHP IDEs and editors, consisting of PHPStorm and Visual Studio Code, to make sure green and blunders-unfastened development.",
    imagePath:
      "https://webblazesofttech.com/wp-content/uploads/2025/02/php-coding-computer-css-data-digital-function-concept_11zon-2048x1423.jpg",
    borderColor: "border-rose-300",
  },
  {
    title: "Seamless Integration with Modern Technologies",
    description:
      "Our PHP developers are adept at integrating current technologies like GraphQL APIs, Redis, and MongoDB with your PHP applications. We make certain your PHP initiatives are future-proof and scalable. Additionally, our team excels in growing RESTful APIs the use of the Laravel framework, supplying seamless communique among your utility and outside systems.",
    imagePath:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/Customizable-Themes-and-Integration.webp",
    borderColor: "border-yellow-300",
  },
  {
    title: "Security and Performance Optimization",
    description:
      "At Webblaze, we offer a wide variety of PHP services, consisting of PHP internet development, PHP application creation, and PHP script customization. Our knowledge extends to growing custom PHP solutions that cater to your specific enterprise necessities. We utilize the exceptional PHP IDEs and editors, consisting of PHPStorm and Visual Studio Code, to make sure green and blunders-unfastened development.",
    imagePath:
      "https://webblazesofttech.com/wp-content/uploads/2025/02/female-freelance-developer-coding-html-script-with-online-cloud-server-programming-firewall-security-learning-new-user-interface-terminal-window-with-code-language-application_11zon-2048x1365.jpg",
    borderColor: "border-yellow-300",
  },
];

function Section_b() {
  return (
    <div
      className="relative w-full py-16 md:py-24 bg-[#fafbfc]"
      style={{
        backgroundImage:
          "url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left bottom",
      }}
    >
      <div className="max-w-[1000px] mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10 text-[#222]">
          Why Choose Webblaze for PHP Development?
        </h2>

        {/* Content Blocks */}
        <div className="flex flex-col gap-12">
          {/* First Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div
                className={`rounded-full border-4 ${contentBlocks[0].borderColor} w-[276px] h-[480px] flex items-center justify-center overflow-hidden`}
              >
                <img
                  src={contentBlocks[0].imagePath}
                  alt={contentBlocks[0].title}
                  className="w-[276px] h-[480px] object-cover rounded-full"
                />
              </div>
            </div>
            {/* Text */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#222]">
                {contentBlocks[0].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {contentBlocks[0].description}
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8">
            {/* Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div
                className={`rounded-full border-4 ${contentBlocks[1].borderColor} w-[276px] h-[480px] flex items-center justify-center overflow-hidden`}
              >
                <img
                  src={contentBlocks[1].imagePath}
                  alt={contentBlocks[1].title}
                  className="w-[276px] h-[480px] object-cover rounded-full"
                />
              </div>
            </div>
            {/* Text */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#222]">
                {contentBlocks[1].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {contentBlocks[1].description}
              </p>
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div
                className={`rounded-full border-4 ${contentBlocks[2].borderColor} w-[276px] h-[480px] flex items-center justify-center overflow-hidden`}
              >
                <img
                  src={contentBlocks[2].imagePath}
                  alt={contentBlocks[2].title}
                  className="w-[276px] h-[480px] object-cover rounded-full"
                />
              </div>
            </div>
            {/* Text */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#222]">
                {contentBlocks[2].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {contentBlocks[2].description}
              </p>
            </div>
          </div>

                    {/* Second Row */}
          <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8">
            {/* Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div
                className={`rounded-full border-4 ${contentBlocks[1].borderColor} w-[276px] h-[480px] flex items-center justify-center overflow-hidden`}
              >
                <img
                  src={contentBlocks[3].imagePath}
                  alt={contentBlocks[3].title}
                  className="w-[276px] h-[480px] object-cover rounded-full"
                />
              </div>
            </div>
            {/* Text */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#222]">
                {contentBlocks[3].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {contentBlocks[3].description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Section_b;
