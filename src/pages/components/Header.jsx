import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

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
    { label: "Linux Administration", icon: "🐧", path: "/Linux_Admin" },
    { label: "Photography", icon: "📷", path: "/Photography" },
  ];

  const solutions = [
    { icon: "🚕", label: "Uber Clone", path: "/Uber_Clone" },
    { icon: "🚖", label: "Taxi app", path: "/Taxi_app" },
    { icon: "🚘", label: "Car pooling", path: "/CarPooling_App" },
    { icon: "💳", label: "Cash app clone", path: "/Cash_AppClone" },

    {
      icon: "🏥",
      label: "Hospital management software",
      path: "/Hospital_manage",
    },
    {
      icon: "🏢",
      label: "Real estate management software",
      path: "/RealEstate_Management",
    },
    { icon: "🚪", label: "Door dash clone", path: "/Doordash_Clone" },
    { icon: "🔌", label: "EV charging app", path: "/EV_charge" },

    {
      icon: "🏨",
      label: "Hotel management software",
      path: "/Hotel_management",
    },
    { icon: "🔧", label: "Handyman clone", path: "/Handyman_Clone" },
    { icon: "❤️", label: "Dating app", path: "/Dating_app" },
    { icon: "📦", label: "Pickup and delivery", path: "/Pickup" },

    {
      icon: "🏫",
      label: "School management software",
      path: "/School_ManagementSoftware",
    },
    { icon: "🍔", label: "Food delivery app", path: "/Food_delivery" },
    { icon: "🛒", label: "Ecommerce", path: "/E_comm" },
    {
      icon: "🍽️",
      label: "Restaurant Management",
      path: "/Restaurant_Management",
    },

    { icon: "📚", label: "LMS", path: "/Lms" },
    { icon: "🚗", label: "Car rental", path: "/Car_rental" },
    { icon: "🔐", label: "Only fan clone", path: "/Onlyfan_clone" },
  ];
  const marketingItems = [
    { icon: "📈", label: "SEO", path: "/Seo" },
    { icon: "📣", label: "SMM", path: "/Smm" },
    { icon: "💰", label: "PPC", path: "/Ppc" },
    { icon: "📊", label: "Google Ads", path: "/Google_ads" },
    { icon: "📈", label: "Growth Marketing", path: "/GrowthMarketing" },
    { icon: "🎨", label: "Branding", path: "/Branding" },
  ];

  const blockchainItems = [
    { icon: "🔄", label: "P2P Crypto exchange", path: "/P2pCryptoExChange" },
    { icon: "📝", label: "Smart contract development", path: "/SmartContain" },
    { icon: "📱", label: "Decentralized apps", path: "/Decentalized" },
    { icon: "🖼️", label: "NFT Marketplace", path: "/Nft_MarketPlace" },
  ];

  const aiItems = [
    { icon: "🧠", label: "AI development", path: "/AI_dev" },
    { icon: "🤖", label: "AI chat bot development", path: "/AI_chatbot" },
    { icon: "📰", label: "AI news anchor", path: "/AI_news" },
    { icon: "💬", label: "Sexting chat bot", path: "/AI_sexting" },
  ];
  const MetaverseItems = [
    { icon: "🛍️", label: "Shopping in a metaverse", path: "/shop_metaverse" },
    { icon: "🏬", label: "Virtual store", path: "/virtual_store" },
    { icon: "🏥", label: "Virtual clinic", path: "/virtual_clinic" },
  ];

  const animationItems = [
    { icon: "🧿", label: "3D jewelry design", path: "/Threed_JewelryDesign" },
    { icon: "🧍‍♀️", label: "3D avatar", path: "/ThreeD_Avatar" },
    { icon: "📦", label: "3D product design", path: "/ThreeD_Productdesign" },
    { icon: "🎞️", label: "3D animation", path: "/ThreeD_Animation" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-[1200px] m-auto p-5">

        <Link to="/" className="w-[135px] h-[36px] block">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/webblaze-socttech-logo.svg"
            alt="Blaze Softtech Logo"
            className="w-full h-auto"
          />
        </Link>

        <nav className="hidden lg:flex gap-[15px] text-gray-800 text-sm font-medium cursor-pointer">
          <div
            className="relative group"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="#"
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
              to="#"
              className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-200 pb-1"
            >
              Our Solutions
            </Link>
            {onSolutions && (
              <div className="absolute top-full left-0 w-[800px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-4 z-50">
                {solutions.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item?.path}
                    className="flex items-center gap-2"
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
            )}
          </div>
          <div
            className="relative group"
            onMouseEnter={() => setOnMarketingItems(true)}
            onMouseLeave={() => setOnMarketingItems(false)}
          >
            <Link
              to="#"
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
              to="#"
              className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-200 pb-1"
            >
              Blockchain
            </Link>
            {onBlockChain && (
              <div className="absolute top-full left-0 w-[250px] bg-white shadow-xl rounded-xl p-4 z-50">
                <div className="flex flex-col gap-3">
                  {blockchainItems.map((item, idx) => (
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
            onMouseEnter={() => setOnAi(true)}
            onMouseLeave={() => setOnAi(false)}
          >
            <Link
              to="#"
              className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-200 pb-1"
            >
              AI
            </Link>
            {onAi && (
              <div className="absolute top-full left-0 w-[300px] bg-white shadow-xl rounded-xl p-4 z-50">
                <div className="flex flex-col gap-5">
                  {aiItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item?.path}
                      className="flex items-center gap-2 px-2"
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
            onMouseEnter={() => setOnMetaverseItems(true)}
            onMouseLeave={() => setOnMetaverseItems(false)}
          >
            <Link
              to="#"
              className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-200 pb-1"
            >
              Metaverse
            </Link>
            {onMetaverseItems && (
              <div className="absolute top-full left-0 w-[270px] bg-white shadow-xl rounded-xl p-4 z-50">
                <div className="flex flex-col gap-3">
                  {MetaverseItems.map((item, idx) => (
                    <Link
                      to={item?.path}
                      key={idx}
                      className="flex items-center gap-3 px-3"
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
            onMouseEnter={() => setOnAnimationItems(true)}
            onMouseLeave={() => setOnAnimationItems(false)}
          >
            <Link
              to="#"
              className="hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-200 pb-1"
            >
              3D Animation
            </Link>
            {onAnimationItems && (
              <div className="absolute top-full left-0 w-[250px] bg-white shadow-xl rounded-xl p-4 z-50">
                <div className="flex flex-col gap-3">
                  {animationItems.map((item, idx) => (
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
          <button
            onClick={() => navigate('/Contact_Us')}
            className="bg-[#1C92FF] text-white text-sm  hover:border-[#1C92FF] border-[2px]  rounded-[12px] hover:bg-white hover:text-blue-600 transition duration-200 py-[10px] px-[20px]"
          >
            Get in Touch
          </button>
          <button
            onClick={() => navigate('/Free_Seo_Audit')}

            className="bg-[#1C92FF]
            text-white text-sm  hover:border-[#1C92FF] border-[2px] hover:text-[#1C92FF] hover:bg-white rounded-[12px] transition duration-200 py-[10px] px-[20px]">
            Free SEO Audit
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-blue-600 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-200 px-5 py-4 space-y-3">
          <Link to="/" className="block text-gray-800 font-medium">Home</Link>
          <Link to="/About_us" className="block text-gray-800 font-medium">About Us</Link>
          <Link to="/Contact_Us" className="block text-gray-800 font-medium">Contact Us</Link>
          <Link to="/Free_Seo_Audit" className="block text-gray-800 font-medium">Free SEO Audit</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
