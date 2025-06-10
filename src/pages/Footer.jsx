import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelope,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#181c29] text-white py-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info & Social */}
        <div>
          <div className="flex items-center mb-4">
            {/* Logo */}
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/07/webblaze-softtech-logo-white.svg"
              alt="Blaze Softtech"
              className="h-10 mr-2"
            />
          </div>
          <p className="text-sm mb-6">
            Our team of professionals specializes in SEO, branding, and digital
            marketing, guaranteeing that your online presence shines above the
            rest.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a href="#" className="hover:text-red-600">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FontAwesomeIcon icon={faPinterestP} size="lg" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "UI/UX App",
              "Web Design",
              "Graphic Design",
              "WordPress",
              "Shopify 2.0",
              "PHP – Laravel, CI, Cake and CorePHP",
              "JavaScript",
              "Vue.JS",
              "React.JS",
              "Node.JS",
              "AWS",
              "Linux Administration",
            ].map((service) => (
              <li key={service} className="flex items-center">
                <FontAwesomeIcon icon={faAngleRight} className="mr-2 text-xs" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links & Future Technology */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm mb-6">
            {["Case Studies", "Career", "About", "Contact Us", "Blogs"].map(
              (link) => (
                <li key={link} className="flex items-center">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-2 text-xs"
                  />
                  {link}
                </li>
              )
            )}
          </ul>
          <h3 className="font-bold text-lg mb-4">Future Technology</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Decentralized apps",
              "NFT Marketplace",
              "AI development",
              "Virtual store",
              "3D jewelry design",
            ].map((tech) => (
              <li key={tech} className="flex items-center">
                <FontAwesomeIcon icon={faAngleRight} className="mr-2 text-xs" />
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Address */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              +91 6239882306
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              +91 9041477720 (HR)
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              hello@webblazesofttech.com
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              hr@webblazesofttech.com (HR)
            </li>
          </ul>
          <h3 className="font-bold text-lg mb-2">Address:</h3>
          <div className="text-sm">
            <span className="font-semibold">India:</span> Cyber cube, C201-202,
            Phase 8B, Industrial Area, Sector 74, SAS Nagar, Punjab 160055
            <br />
            <span className="font-semibold">USA:</span> 13th Street 47 W 13th
            St, New York, NY 10011, USA
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
