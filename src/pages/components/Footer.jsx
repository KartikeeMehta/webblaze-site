import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faPinterestP,
  faInstagram,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#181c29] text-white py-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-5">
        <div>
          <div className="flex items-center mb-4">
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
          <div className="flex flex-col gap-3">
            <a
              href="https://www.facebook.com/webblaze.softtech/"
              className="hover:text-blue-500 flex gap-[15px] items-center"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
              <div className="name_icon">Facebook</div>
            </a>
            <a
              href="https://www.linkedin.com/company/web-blaze-softtech/posts/?feedView=all"
              className="hover:text-blue-700 flex gap-[15px] items-center"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              <div className="name_icon">Linkedin</div>
            </a>

            <a
              href="WebBlaze Softtech (@WebblazeS54841) on X"
              className="hover:text-blue-700 flex gap-[15px] items-center"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
              <div className="name_icon">Twitter</div>
            </a>

            <a
              href="https://in.pinterest.com/webblazesofttech/"
              className="hover:text-pink-500 flex gap-[15px] items-center"
            >
              <FontAwesomeIcon icon={faPinterestP} size="lg" />
              <div className="name_icon">Pinterest</div>
            </a>

            <a
              href="https://www.instagram.com/webblaze.india/"
              className="hover:text-red-500 flex gap-[15px] items-center"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              <div className="name_icon">Instagram</div>
            </a>
            <a
              href="https://www.youtube.com/@Blaze-softech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 flex gap-[15px] items-center transition duration-200"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
              <div className="name_icon">Youtube</div>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "UI/UX App", link: "/Uiux_app" },
              { name: "Web Design", link: "/Web_Design" },
              { name: "Graphic Design", link: "/Graphic_design" },
              { name: "WordPress", link: "/Word_Press" },
              { name: "Shopify 2.0", link: "/Shopify" },
              { name: "PHP – Laravel, CI, Cake and CorePHP", link: "/Php_laravel" },
              { name: "JavaScript", link: "/Javascript" },
              { name: "Vue.JS", link: "/VueJs" },
              { name: "React.JS", link: "/ReactJs" },
              { name: "Node.JS", link: "/Nodejs" },
              { name: "AWS", link: "/Aws" },
              { name: "Linux Administration", link: "/Linux_admin" },
            ].map((service) => (
              <li key={service.name} className="flex items-center">
                <FontAwesomeIcon icon={faAngleRight} className="mr-2 text-xs" />
                <Link to={service.link} className="hover:underline hover:text-red-500">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm mb-6">
            {[
              { name: "Case Studies", link: "/Case_Studies" },
              { name: "Career", link: "/Career" },
              { name: "About", link: "/About_us" },
              { name: "Contact Us", link: "/Contact_Us" },
              { name: "Blogs", link: "/Blog" },
            ].map((link) => (
              <li key={link.name} className="flex items-center">
                <FontAwesomeIcon icon={faAngleRight} className="mr-2 text-xs " />
                <Link to={link.link} className="hover:underline hover:text-red-500">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="font-bold text-lg mb-4">Future Technology</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Decentralized apps", link: "/Decentalized" },
              { name: "NFT Marketplace", link: "/Nft_MarketPlace" },
              { name: "AI development", link: "/AI_dev" },
              { name: "Virtual store", link: "/Virtual_store" },
              { name: "3D jewelry design", link: "/Threed_JewelryDesign" },
            ].map((tech) => (
              <li key={tech.name} className="flex items-center">
                <FontAwesomeIcon icon={faAngleRight} className="mr-2 text-xs" />
                <Link to={tech.link} className="hover:underline  hover:text-red-500">
                  {tech.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Address */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm mb-6">


            <li className="flex items-center group">
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-2 text-white transition duration-200 group-hover:text-red-500"
              />
              <a
                href="tel:+916239882306"
                className="text-white hover:text-red-500 hover:underline transition duration-200"
              >
                +91 6239882306 (Business)
              </a>
            </li>



            <li className="flex items-center group">
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-2 text-white transition duration-200 group-hover:text-red-500"
              />
              <a
                href="tel:+919041477720"
                className="text-white hover:text-red-500 hover:underline transition duration-200"
              >
                +91 9041477720 (HR)
              </a>
            </li>


            <li className="flex items-center group">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 text-white transition duration-200 group-hover:text-red-500"
              />
              <a
                href="mailto:hello@webblazesofttech.com"
                className="text-white hover:text-red-500 hover:underline transition duration-200"
              >
                hello@webblazesofttech.com
              </a>
            </li>

            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a
                href="mailto:hr@webblazesofttech.com"
                className="text-white hover:text-red-500 hover:underline transition duration-200"
              >
                hr@webblazesofttech.com (HR)
              </a>
            </li>

            <li className="invisible">test</li>
          </ul>
          <h3 className="font-bold text-lg mb-2">Address:</h3>
          <div className="text-sm">
            <span className="font-semibold">India:</span> Cyber cube, C201-202,
            Phase 8B, Industrial Area, Sector 74, SAS Nagar, Punjab 160055
            <br /> <br />
            <span className="font-semibold">USA:</span> 13th Street 47 W 13th
            St, New York, NY 10011, USA
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
