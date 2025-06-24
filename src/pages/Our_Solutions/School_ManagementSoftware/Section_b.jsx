import React from "react";

const features = [
  {
    title: "Student Management",
    icon: "/Dapp_2.png", 
    description:
      "Our pupil control software provides a strong device for handling student records, including personal details, educational records, and attendance. This characteristic ensures that all student records is prepared and effortlessly available, permitting administrators to reveal pupil development successfully.",
  },
  {
    title: "Attendance Management",
     icon: "/Dapp_2.png", 
    description:
      "Maintaining accurate attendance statistics is vital for any academic group. Our faculty attendance software automates attendance tracking, lowering the workload for teachers and making sure precise file-maintaining. The pupil attendance management device additionally helps on-line attendance marking, making it less difficult to control instructions in each physical and virtual settings.",
  },
  {
    title: "Classroom Management",
    icon: "/Dapp_2.png", 
    description:
      "Efficient study room management is crucial for a conducive gaining knowledge of environment. Our study room management software program offers equipment for lesson planning, pupil engagement, and conduct tracking. Teachers can use this software program to decorate school room activities and improve pupil participation. Additionally, our lecture room computer tracking software allows educators to supervise scholar activities on digital devices, making sure a targeted learning surroundings.",
  },
  {
    title: "Learning Management Systems (LMS)",
     icon: "/Dapp_2.png", 
    description:
      "Our software program consists of a complete learning management device for colleges, facilitating online mastering and route control. The online getting to know control device permits faculties to deliver guides digitally, track student development, and streamline the studying process efficiently.",
  },
];

const Section_b = () => {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-20">
        <div className="max-w-[1200px] mx-auto px-6">

      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0e1f3f] mb-12">
        Key Features of Our School Management Software
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-center items-stretch">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col border-b-4 border-blue-300"
          >
            <img
              src={feature.icon}
              alt={feature.title + " icon"}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg font-bold text-[#0e1f3f] mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-[#222] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
         </div>
    </section>
  );
};

export default Section_b;
