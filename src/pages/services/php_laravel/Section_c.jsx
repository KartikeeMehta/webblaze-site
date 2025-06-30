import React from "react";

const contentSections = [
  {
    title: "Laravel Development Expertise",
    cards: [
      {
        title: "Custom Laravel Development",
        description:
          "Our Laravel developers specialize in growing custom answers tailor-made to your business needs. Whether you need a simple blog or a complex e-commerce platform, we leverage the Laravel framework to construct strong and scalable applications. We follow fine practices in Laravel development, ensuring clean code and efficient capability.",
      },
      {
        title: "Advanced Laravel Features",
        description:
          "Webblaze excels in imposing advanced Laravel capabilities along with Laravel Debugbar, Laravel Mix, and Laravel Forge. These tools enhance the improvement procedure, presenting debugging skills, asset control, and deployment automation. Our Laravel improvement business enterprise guarantees your undertaking benefits from the state-of-the-art advancements inside the Laravel surroundings.",
      },
      {
        title: "Laravel API Development",
        description:
          "We concentrate on Laravel API improvement, developing RESTful APIs that allow seamless integration with different structures. Our builders use Laravel’s powerful capabilities to build APIs which might be secure, green, and smooth to hold. Whether you need an API for cellular programs or 1/3-celebration integrations, we supply sturdy solutions.",
      },
    ],
  },
  {
    title: "Full Stack PHP Development",
    cards: [
      {
        title: "PHP and MySQL Integration",
        description:
          "Our information extends to integrating PHP with MySQL, creating dynamic and facts-pushed websites. We layout efficient database schemas and write optimized SQL queries to make sure fast and reliable data access. Our PHP developers are skilled in the use of PHPMyAdmin and other tools for database control.",
      },
      {
        title: "Frontend and Backend Development",
        description:
          "Webblaze offers complete complete-stack improvement offerings. Our PHP developers paintings seamlessly with frontend technologies like HTML, CSS, JavaScript, and frameworks like React and Vue.Js. We make sure your net packages are visually attractive and functionally robust.",
      },
      {
        title: "Custom PHP Programs",
        description:
          "Our crew excels in growing custom PHP applications tailored to your precise necessities. From growing PHP scripts to automating enterprise techniques, we deliver answers that beautify productiveness and efficiency. We use PHP frameworks like Symfony and Zend to construct scalable and maintainable applications.",
      },
    ],
  },
];

function Section_c() {
  return (
    <div
      className="relative w-full py-16 md:py-24 bg-[#1B1F2E]"
      style={{
        backgroundImage:
          "url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')", // Replace with your actual background image
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 space-y-20">
        {contentSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-12">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              {section.title}
            </h2>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {section.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="bg-[#1E2436] rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    {/* Card Title */}
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {card.title}
                    </h3>
                    {/* Card Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-blue-500"></div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
            50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.2); }
          }
          .card-glow {
            animation: glow 3s infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Section_c;
