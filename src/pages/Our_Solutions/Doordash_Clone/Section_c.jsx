import React from 'react';

const features = [
    {
        title: 'Real-Time Order Tracking',
        image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/Rectangle-42645-6.png',
        description:
            'Our Doordash clone app provides actual-time order monitoring, giving customers peace of mind as they see exactly where their meal is and when it will arrive. This function is a must-have in any food delivery clone app.',
    },
    {
        title: 'Multiple Payment Options',
        image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/Rectangle-42645-1.png',
        description:
            'To decorate convenience, our Doordash clone supports diverse price methods such as credit/debit cards, digital wallets, and cash on delivery. This flexibility is also found in our Postmates and Foodpanda clones.',
    },
    {
        title: 'Advanced Analytics',
        image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/Rectangle-42645-2.png',
        description:
            'Gain insights into your business with advanced analytics. Track orders, customer choices, and sales data. These insights are available in our UberEats and Zomato clones too.',
    },
    {
        title: 'Push Notifications',
        image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/Rectangle-42645-5-1.png',
        description:
            'Keep your clients updated with push notifications for order confirmation, dispatch, and promotions. This enhances user experience, similar to Deliveroo or Eat24 clones.',
    },
    {
        title: 'In-App Chat Support',
        image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/Rectangle-42645-3.png',
        description:
            'Offer excellent customer service with in-app chat. Customers can easily contact delivery staff or your support team for any help, similar to Talabat or Foodora clones.',
    },
];

const Section_c = () => {
    return (
        <section className="bg-[#0f1227] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover bg-center py-16 px-7">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-12">
                    Key Features of Our Doordash Clone App
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-6 max-w-sm text-left hover:shadow-lg transition"
                        >
                            <img src={item.image} alt={item.title} className="mb-4 h-40 object-contain mx-auto" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section_c;
