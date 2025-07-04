import React from "react";

const Section_a = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-[1000px] w-full mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug sm:leading-tight mb-10 text-center sm:text-left">
          Top Software Development Trends to Watch in <br />2025
        </h1>

        <div className="flex justify-center mb-10">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/top-software-development.jpg"
            alt="Top Software Development"
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div className="text-gray-700 text-base sm:text-md leading-relaxed space-y-8">
          <p>
            Software development is always changing with new trends and technologies.
            In 2025, many exciting developments are happening in this field.
            Let’s watch some of the top software development trends this year.
          </p>

          {[
            {
              title: "1. Artificial Intelligence and Machine Learning",
              desc:
                "Artificial intelligence (AI) and machine learning (ML) are modifying the world of software development. AI and ML can make software smarter and more efficient. Developers are using AI to automate tasks, improve user experiences, and create more personalized software.",
              points: [
                {
                  label: "AI-Powered Code Assistants:",
                  text:
                    "Tools like GitHub Copilot help developers write code faster by suggesting code snippets and completing code automatically.",
                },
                {
                  label: "Improved Data Analytics:",
                  text:
                    "AI and ML are used to analyze big data, providing valuable insights and helping businesses make better decisions.",
                },
              ],
            },
            {
              title: "2. Low-Code and No-Code Development",
              desc:
                "Low-code and no-code platforms allow people to create software applications with little or no coding knowledge. This trend is growing because it makes software development accessible to more people.",
              points: [
                {
                  label: "Easy App Building:",
                  text:
                    "Platforms like Microsoft Power Apps and Google AppSheet let users build apps by dragging and dropping components.",
                },
                {
                  label: "Faster Development:",
                  text:
                    "These platforms speed up the development process, allowing businesses to launch their apps quickly.",
                },
              ],
            },
            {
              title: "3. Cloud Computing",
              desc:
                "Cloud computing continues to be a major trend in 2024. It offers flexibility, scalability, and cost savings for businesses. Many companies are moving their software to the cloud to take advantage of these benefits.",
              points: [
                {
                  label: "Hybrid Cloud Solutions:",
                  text:
                    "Combining public and private clouds, hybrid cloud solutions offer the best of both worlds, providing security and scalability.",
                },
                {
                  label: "Serverless Computing:",
                  text:
                    "This model allows developers to build and run applications without managing servers, reducing infrastructure costs.",
                },
              ],
            },
            {
              title: "4. DevOps and Continuous Delivery",
              desc:
                "DevOps practices and continuous delivery are becoming more popular. They help teams work together better and deliver software faster.",
              points: [
                {
                  label: "Automation:",
                  text:
                    "DevOps tools automate testing, integration, and deployment processes, reducing errors and speeding up releases.",
                },
                {
                  label: "Continuous Integration/Continuous Deployment (CI/CD):",
                  text:
                    "CI/CD pipelines ensure that code changes are tested and deployed automatically, improving software quality and reliability.",
                },
              ],
            },
            {
              title: "5. Cybersecurity",
              desc:
                "With the rise in cyber threats, cybersecurity is more important than ever. Developers are focusing on building secure software to protect data and systems.",
              points: [
                {
                  label: "Security by Design:",
                  text:
                    "Integrating security practices into every stage of software development ensures that applications are secure from the start.",
                },
                {
                  label: "Zero Trust Architecture:",
                  text:
                    "This security model assumes that threats are present both inside and outside the network, so it verifies every access request.",
                },
              ],
            },
            {
              title: "6. Microservices Architecture",
              desc:
                "Microservices architecture is gaining popularity because it makes applications more modular and easier to manage. In this architectural approach, applications are constructed as a cohesive assembly of autonomous microservices.",
              points: [
                {
                  label: "Scalability:",
                  text:
                    "Microservices can be scaled independently, allowing businesses to handle increased loads without affecting the entire application.",
                },
                {
                  label: "Flexibility:",
                  text:
                    "Developers can use different technologies for different services, making the application more versatile.",
                },
              ],
            },
            {
              title: "7. Internet of Things (IoT)",
              desc:
                "IoT is connecting more devices than ever, creating new opportunities for software development. IoT devices need software to collect, process, and analyze data.",
              points: [
                {
                  label: "Smart Homes and Cities:",
                  text:
                    "Software for IoT devices in homes and cities is improving the way we live and work, making environments more efficient and convenient.",
                },
                {
                  label: "Industrial IoT:",
                  text:
                    "In industries, IoT software is used to monitor equipment, track inventory, and optimize processes.",
                },
              ],
            },
            {
              title: "8. Progressive Web Apps (PWAs)",
              desc:
                "PWAs redefine web applications by delivering a seamless, native app-like experience characterized by speed, reliability, and offline functionality.",
              points: [
                {
                  label: "Cross-Platform Compatibility:",
                  text:
                    "PWAs work on any device with a web browser, reducing the need for separate native apps for different platforms.",
                },
                {
                  label: "Improved Performance:",
                  text:
                    "PWAs load quickly and provide a smooth user experience, even on slow networks.",
                },
              ],
            },
            {
              title: "9. Augmented Reality (AR) and Virtual Reality (VR)",
              desc:
                "AR and VR technologies are being integrated into software to create immersive experiences.",
              points: [
                {
                  label: "Gaming and Entertainment:",
                  text:
                    "AR and VR are enhancing games and entertainment applications, providing users with realistic and interactive experiences.",
                },
                {
                  label: "Training and Education:",
                  text:
                    "These technologies are also used for training simulations and educational tools, offering hands-on learning experiences.",
                },
              ],
            },
            {
              title: "10. Blockchain Technology",
              desc:
                "Blockchain technology is not just for cryptocurrencies. It has many applications in software development.",
              points: [
                {
                  label: "Secure Transactions:",
                  text:
                    "Blockchain provides a secure way to record transactions, making it useful for financial applications and supply chain management.",
                },
                {
                  label: "Decentralized Applications (DApps):",
                  text:
                    "These applications run on a blockchain network, offering increased security and transparency.",
                },
              ],
            },
            {
              title: "11. Edge Computing",
              desc:
                "Edge computing brings data processing closer to the source of data, reducing latency and improving performance.",
              points: [
                {
                  label: "Faster Processing:",
                  text:
                    "By processing data at the edge of the network, applications can respond more quickly.",
                },
                {
                  label: "Eco-Friendly Data Centers:",
                  text:
                    "Using renewable energy sources and optimizing cooling systems, data centres are becoming more environmentally friendly.",
                },
              ],
            },
          ].map((trend, i) => (
            <div key={i} className="space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 ">
                {trend.title}
              </h2>
              <p>{trend.desc}</p>
              <ul className="list-disc ml-6 space-y-1">
                {trend.points.map((point, idx) => (
                  <li key={idx} className="relative">
                    {point.label === "Decentralized Applications (DApps):" ? (
                      <a href="/Decentalized" className="text-red-600 font-bold hover:no-underline">
                        {point.label}
                      </a>
                    ) : (
                      <strong>{point.label}</strong>
                    )}{" "}
                    {point.text}
                  </li>

                ))}
              </ul>
            </div>
          ))}

          {/* Conclusion */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-600 mb-4">
              Conclusion
            </h2>
            <p>
              In 2025, software development is evolving rapidly with new trends and technologies. AI and ML are making software smarter, low-code platforms are making development accessible, and cloud computing is offering flexibility and cost savings. DevOps practices are speeding up delivery, and cybersecurity is ensuring data protection. Staying updated with these trends will help developers create innovative and efficient software solutions. Join our development services at Webblaze Softtech to stay ahead and use these latest trends for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_a;
