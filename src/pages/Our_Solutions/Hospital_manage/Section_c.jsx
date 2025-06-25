import React, { useState } from 'react';

const Section_c = () => {
  const [selected, setSelected] = useState(0);

  const features = [
    {
      title: "Enhanced Patient Care with Electronic Medical Records",
      desc: "Our electronic medical file software is on the heart of our sanatorium control gadget. It permits for the seamless recording, storage, and retrieval of patient facts. This no longer simplest improves the pleasant of affected person care however additionally complements the performance of scientific personnel. The scientific facts and billing software module guarantees that every one billing processes are automated and blunders-unfastened.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Enhanced-Patient-Care-with-Electronic-Medical-Records-1024x520.webp",
    },
    {
      title: "Efficient Medical Billing Solutions",
      desc: "Webblaze’s hospital control software program consists of superior medical billing control software. Our web-based totally medical billing software and cloud-based totally medical billing software program streamline the billing manner, lowering errors and making sure timely payments. The RCM scientific billing software program module integrates with the medical institution management machine to offer a seamless billing enjoy.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Efficient-Medical-Billing-Solutions.webp",
    },
    {
      title: "Inventory and Equipment Management",
      desc: "Our health center control software consists of sturdy modules for health center stock management software program and scientific equipment management software program. These modules make certain that each one hospital materials and gadget are tracked and managed correctly. The scientific supply stock software and health facility pharmacy inventory management software program assist in retaining premiere inventory levels and reducing wastage.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Inventory-and-Equipment-Management-1024x520.webp",
    },
    {
      title: "Customizable CRM for Medical Clinics",
      desc: "Webblaze’s CRM for medical clinics is an essential a part of our clinic management software. It helps in handling affected person relationships, enhancing conversation, and enhancing universal patient pleasure. The CRM for hospitals module integrates with the clinic control device to offer a holistic view of patient interactions.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Customizable-CRM-for-Medical-Clinics-1024x520.webp",
    },
    {
      title: "Hospital ERP Software for Seamless Operations",
      desc: "Our sanatorium ERP software integrates all health facility capabilities into one cohesive system. From patient control and billing to stock and supply chain control, our ERP sanatorium management device ensures that every one operations are streamlined and green. The medical institution database management system and health center ERP systems are designed to address large volumes of statistics and provide actual-time insights into hospital operations.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Hospital-ERP-Software-for-Seamless-Operations-1024x520.webp",
    },
    {
      title: "Advanced Features for Modern Hospitals",
      desc: "Webblaze’s health facility management software program is geared up with superior capabilities to fulfill the needs of cutting-edge healthcare facilities. The clinic incident reporting software program and sanatorium compliance software modules make certain that each one incidents are suggested and managed efficaciously. The health center excellent control software program enables in keeping excessive requirements of care and compliance with regulatory requirements",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Advanced-Features-for-Modern-Hospitals-1024x520.webp",
    },
    {
      title: "Cloud-Based Solutions for Flexibility",
      desc: "Our cloud-based totally medical institution control machine gives exceptional flexibility and scalability. The cloud scientific billing software and cloud-primarily based medical billing software modules make sure that all billing approaches are managed efficaciously. The sanatorium information system modules and medical institution management system software offer a unbroken person experience and easy get entry to to statistics.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Cloud-Based-Solutions-for-Flexibility-1024x520.webp",
    },
    {
      title: "Comprehensive Hospital Management System Website",
      desc: "Webblaze’s hospital control system internet site is designed to provide precise information approximately our software program answers. The internet site consists of information about our medical institution management software, sanatorium ERP software, and different modules. The clinic control machine net software allows for clean get right of entry to to the software program from any tool.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Comprehensive-Hospital-Management-System-Website-1024x520.webp",
    },
  ];

  return (
    <div className="bg-[#181C2E] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover bg-center w-full px-4 py-12">
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Buttons */}
        <div className="w-full lg:w-1/2 space-y-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(idx)}
              className={`cursor-pointer p-4 rounded-lg shadow-sm transition-all ${
                selected === idx
                  ? 'bg-red-100 text-red-600 font-semibold'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 bg-[#ffff] rounded-lg text-black p-6 flex flex-col items-center space-y-4">
          <img
            src={features[selected].image}
            alt={features[selected].title}
            className="rounded-lg w-full max-w-md object-cover"
          />
          <div className="w-full">
            <h2 className="text-xl font-bold mb-2">{features[selected].title}</h2>
            <p className="text-sm mb-4 min-h-[120px]">{features[selected].desc}</p>
            <div className="">
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow-md transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section_c;
