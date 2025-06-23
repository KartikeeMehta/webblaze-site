import React from "react";

const features = [
  {
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/Oculus-Store-Compatibility-1.png",
    title: "Oculus Store Compatibility",
    description:
      "Our digital stores are optimized for the Oculus platform, making sure a easy and immersive enjoy. Whether it is the Oculus Quest 2 shop, Oculus video games shop, or the Oculus app store, our answers make certain that your products are without problems available to VR users. Customers should buy Oculus Quest 2 or buy Oculus video games immediately out of your digital store.",
  },
  {
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/Meta-Quest-Store-Integration.png",
    title: "Meta Quest Store Integration",
    description:
      "Webblaze integrates with the Meta Quest platform, together with the Meta Quest 2 shop and Meta Quest app save. This permits customers to buy Meta Quest games, Meta Quest accessories, and extra. With functions like Meta Quest purchase now pay later, clients can enjoy a flexible buying revel in.",
  },
  {
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/Viveport-and-HTC-Vive-Store.png",
    title: "Viveport and HTC Vive Store",
    description:
      "For clients the usage of Viveport or HTC Vive, our digital stores are fully like minded, offering a seamless shopping revel in. Customers can download Viveport or discover the HTC Vive save immediately from your virtual save.",
  },
  {
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/Best-Buy-VR-Solutions-1.png",
    title: "Best Buy VR Solutions",
    description:
      "Webblaze collaborates with outlets like Best Buy to enhance your VR purchasing enjoy. Whether it's the Best Buy VR phase, Best Buy Oculus add-ons, or Best Buy PlayStation VR, our virtual shops are designed to combine with fundamental retail structures.",
  },
];

function Section_c() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Enhanced Shopping Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start bg-white rounded-xl shadow-lg border-b-2 border-blue-400 p-6 min-h-[255px]"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-20 h-20 object-contain rounded-lg mr-6"
              />
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section_c;
