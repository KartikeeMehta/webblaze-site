import React from "react";

const Section_c = () => {
  return (
    <div className="w-full h-[450px]  border rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4519219350204!2d76.68296677498473!3d30.70569328693999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef77cf0ee01d%3A0xcdb990e831a49643!2sWebBlaze%20Softtech!5e0!3m2!1sen!2sin!4v1750924261461!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="WebBlaze Location"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Section_c;
