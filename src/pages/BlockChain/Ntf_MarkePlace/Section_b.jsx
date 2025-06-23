import React from "react";

const features = [
  {
    title: "Customizable NFT Marketplace Development",
    description:
      "At Webblaze, we provide completely customizable NFT market improvement to fit your unique enterprise needs. Our team of expert developers guarantees your platform reflects your logo’s identification even as supplying seamless user experiences.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/Customizable-NFT-Marketplace-Development.webp",
  },
  {
    title: "Custom dapp Development",
    description:
      "Looking for an Opensea clone? We provide pinnacle-notch Opensea clone development services, permitting you to create a marketplace with comparable functionalities. Our Opensea clone offers capabilities like consumer-friendly interfaces, stable transactions, and green NFT control.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/Opensea-Clone-Development%E2%80%A8.webp",
  },
  {
    title: "Integration with Multiple Digital Currencies",
    description:
      "Our NFT marketplaces help various digital currencies, including Ethereum, Polygon, and Binance Smart Chain. This flexibility lets in customers to change NFTs the usage of their preferred digital forex, enhancing the platform’s accessibility and usability.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/Integration-with-Multiple-Digital-Currencies.webp",
  },
  {
    title: "White Label NFT Marketplace Solutions",
    description:
      "At Webblaze, we provide completely customizable NFT market improvement to fit your unique enterprise needs. Our team of expert developers guarantees your platform reflects your logo’s identification even as supplying seamless user experiences.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/White-Label-NFT-Marketplace-Solutions.webp",
  },
  {
    title: "Advanced Security Features",
    description:
      "Security is a top priority in our NFT marketplace improvement. We implement advanced protection protocols to guard your platform from ability threats, making sure secure transactions and statistics integrity.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/Advanced-Security-Features%E2%80%A8.webp",
  },
  {
    title: "Multi-Platform Accessibility",
    description:
      "Our NFT marketplaces are designed to be reachable across numerous gadgets, such as computers, tablets, and smartphones. This guarantees that customers can exchange NFTs comfortably, no matter their device.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/Multi-Platform-Accessibility%E2%80%A8.webp",
  },
];

const Section_b = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Key Features of Our NFT Marketplace Development
      </h2>

      <div className="max-w-[1200px] mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden p-4 transition hover:shadow-lg"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-black mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section_b;
