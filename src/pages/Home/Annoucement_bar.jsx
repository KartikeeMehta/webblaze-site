import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Annoucement_bar() {
  return (
    <div className="background-annouce bg-black">
      <div className="contact_us flex justify-between text-white max-w-[1200px] m-auto py-[12px] text-sm">
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />+ 916239882306
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          hello@webblazesofttech.com
        </div>
      </div>
    </div>
  );
}

export default Annoucement_bar;
