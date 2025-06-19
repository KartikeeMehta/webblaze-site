import React, { useState } from "react";
import { Link } from "react-router-dom";
import About_us from "../About_us";
import { NavLink } from "react-router-dom";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [onSolutions, setOnSolutions] = useState(false);
  const [onMarketingItems, setOnMarketingItems] = useState(false);
  const [onBlockChain, setOnBlockChain] = useState(false);
  const [onAi, setOnAi] = useState(false);
  const [onMetaverseItems, setOnMetaverseItems] = useState(false);
  const [onAnimationItems, setOnAnimationItems] = useState(false);

  const servicesDropdown = [
    { label: "UI/UX App", icon: "🧩", path: "/Uiux_app" },
    { label: "Web Design", icon: "🖌️", path: "/Web_Design" },
    { label: "Graphics Design", icon: "🎨", path: "/Graphic_design" },
    { label: "Wordpress", icon: "🌐", path: "/Word_Press" },
    { label: "Shopify", icon: "🛍️", path: "/Shopify" },
    { label: "Shopify App", icon: "⚙️", path: "/Shopify_app" },
    {
      label: "PHP - Laravel, CI, Cake and CorePHP",
      icon: "🐘",
      path: "/Php_laravel",
    },
    { label: "JavaScript", icon: "📜", path: "/Javascript" },
    { label: "Vue.JS", icon: "🌀", path: "/VueJs" },
    { label: "React.JS", icon: "⚛️", path: "/ReactJs" },
    { label: "Angular.JS", icon: "🅰️", path: "/Angular_js" },
    { label: "Node.JS", icon: "🧱", path: "/Nodejs" },
    { label: "AWS", icon: "☁️", path: "/Aws" },
    { label: "Linux Administration", icon: "🐧" },
    { label: "Photography", icon: "📷", path: "/Photography" },
  ];

  const solutions = [
    { icon: "🚕", label: "Uber Clone" },
    { icon: "🚖", label: "Taxi app" },
    { icon: "🚘", label: "Car pooling" },
    { icon: "💳", label: "Cash app clone" },

    { icon: "🏥", label: "Hospital management software" },
    { icon: "🏢", label: "Real estate management software" },
    { icon: "🚪", label: "Door dash clone" },
    { icon: "🔌", label: "EV charging app" },

    { icon: "🏨", label: "Hotel management software" },
    { icon: "🔧", label: "Handyman clone" },
    { icon: "❤️", label: "Dating app" },
    { icon: "📦", label: "Pickup and delivery" },

    { icon: "🏫", label: "School management software" },
    { icon: "🍔", label: "Food delivery app" },
    { icon: "🛒", label: "Ecommerce" },
    { icon: "🍽️", label: "Restaurant Management" },

    { icon: "📚", label: "LMS" },
    { icon: "🚗", label: "Car rental" },
    { icon: "🔐", label: "Only fan clone" },
  ];
  const marketingItems = [
    { icon: "📈", label: "SEO", path: "/Seo" },
    { icon: "📣", label: "SMM" },
    { icon: "💰", label: "PPC" },
    { icon: "📊", label: "Google Ads" },
    { icon: "📈", label: "Growth Marketing" },
    { icon: "🎨", label: "Branding" },
  ];

  const blockchainItems = [
    { icon: "🔄", label: "P2P Crypto exchange" },
    { icon: "📝", label: "Smart contract development" },
    { icon: "📱", label: "Decentralized apps" },
    { icon: "🖼️", label: "NFT Marketplace" },
  ];

  const aiItems = [
    { icon: "🧠", label: "AI development" },
    { icon: "🤖", label: "AI chat bot development" },
    { icon: "📰", label: "AI news anchor" },
    { icon: "💬", label: "Sexting chat bot" },
  ];
  const MetaverseItems = [
    { icon: "🛍️", label: "Shopping in a metaverse" },
    { icon: "🏬", label: "Virtual store" },
    { icon: "🏥", label: "Virtual clinic" },
  ];

  const animationItems = [
    { icon: "🧿", label: "3D jewelry design" },
    { icon: "🧍‍♀️", label: "3D avatar" },
    { icon: "📦", label: "3D product design" },
    { icon: "🎞️", label: "3D animation" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-[1200px] m-auto p-5">
        <div className="w-[135px] h-[36px]">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/webblaze-socttech-logo.svg"
            alt="Blaze Softtech Logo"
            className="w-full h-auto"
          />
        </div>

        <nav className="hidden lg:flex gap-[15px] text-gray-800 text-sm font-medium cursor-pointer">
          <div
            className="relative group"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/"
              className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-200 pb-1"
            >
              Services
            </Link>
            {showDropdown && (
              <div className="absolute top-full left-0 w-[800px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-4 z-50">
                {servicesDropdown.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="flex items-center gap-2 hover:text-blue-600 transition duration-200"
                  >
                    <span className="text-xl bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-700  hover:text-blue-600 transition duration-200">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setOnSolutions(true)}
            onMouseLeave={() => setOnSolutions(false)}
          >
            <Link
              to="/"
              className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-200 pb-1"
            >
              Our Solutions
            </Link>
            {onSolutions && (
              <div className="absolute top-full left-0 w-[800px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-4 z-50">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-xl bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-700 hover:text-blue-600 transition duration-200">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative group"
            onMouseEnter={() => setOnMarketingItems(true)}
            onMouseLeave={() => setOnMarketingItems(false)}
          >
            <Link
              to="/"
              className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-200 pb-1"
            >
              Digital Marketing
            </Link>
            {onMarketingItems && (
              <div className="absolute top-full left-0 w-[250px] bg-white shadow-xl rounded-xl p-4 z-50">
                <div className="flex flex-col gap-3">
                  {marketingItems.map((item, idx) => (


                    <Link
                      key={idx}
                      to={item.path}
                      className="flex items-center gap-2 hover:text-blue-600 transition duration-200"
                    >
                      <span className="text-xl bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-700 hover:text-blue-600 transition duration-200">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setOnBlockChain(true)}
            onMouseLeave={() => setOnBlockChain(false)}
          >
            <Link
              to="/"
              className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-200 pb-1"
            >
              Blockchain
            </Link>
            {onBlockChain && (
              <div className="absolute top-full left-0 w-[250px] bg-white shadow-xl rounded-xl p-4 z-50">
                <div className="flex flex-col gap-3">
                  {blockchainItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-10">
                      <span className="text-xl bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-700 hover:text-blue-600 transition duration-200">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setOnAi(true)}
            onMouseLeave={() => setOnAi(false)}
          >
            <Link
              to="/"
              className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-200 pb-1"
            >
              AI
            </Link>
            {onAi && (
              <div className="absolute top-full left-0 w-[200px] bg-white shadow-xl rounded-xl p-4 z-50">
                <div className="flex flex-col gap-3">
                  {aiItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-5">
                      <span className="text-xl bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-700 hover:text-blue-600 transition duration-200">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setOnMetaverseItems(true)}
            onMouseLeave={() => setOnMetaverseItems(false)}
          >
            <Link
              to="/"
              className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-200 pb-1"
            >
              Metaverse
            </Link>
            {onMetaverseItems && (
              <div className="absolute top-full left-0 w-[200px] bg-white shadow-xl rounded-xl p-4 z-50">
                <div className="flex flex-col gap-3">
                  {MetaverseItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-5">
                      <span className="text-xl bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-700 hover:text-blue-600 transition duration-200">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setOnAnimationItems(true)}
            onMouseLeave={() => setOnAnimationItems(false)}
          >
            <Link
              to="/"
              className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-200 pb-1"
            >
              3D Animation
            </Link>
            {onAnimationItems && (
              <div className="absolute top-full left-0 w-[250px] bg-white shadow-xl rounded-xl p-4 z-50">
                <div className="flex flex-col gap-3">
                  {animationItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-5">
                      <span className="text-xl bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-700 hover:text-blue-600 transition duration-200">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/About_us"
            className={({ isActive }) =>
              `pb-1 border-b-2 transition duration-200 ${isActive
                ? "text-blue-600 border-blue-600"
                : "hover:text-blue-600 hover:border-blue-600 border-transparent"
              }`
            }
          >
            About Us
          </NavLink>
        </nav>
        <div className="hidden lg:flex space-x-3">
          <button className="bg-blue-500 text-white text-sm  rounded-[12px] hover:bg-blue-600 transition duration-200 py-[10px] px-[20px]">
            Get in Touch
          </button>
          <button className="bg-blue-500 text-white text-sm  rounded-[12px] hover:bg-blue-600 transition duration-200 py-[10px] px-[20px]">
            Free SEO Audit
          </button>
        </div>

        <div className="lg:hidden">
          <button className="text-blue-600 font-bold">☰</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
