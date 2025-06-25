import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const Section_b = () => {
  const cards = [
    {
       title: "Unparalleled EV Charging Technology",
              desc: "Our EV charging app leverages the ultra-present day enhancements in EV charging generation. It’s designed to seamlessly combine with numerous charging stations, ensuring that you could rate your electric powered powered vehicle resultseasily. Whether you’re using a chargepoint app, evgo app, or every other platform, our app enables all of them, presenting a unified solution for all your EV charging desires.",
              icon: "/EV_1.png",
              border: "border-red-500"
            },
            {
              title: "Comprehensive Charging Station Locator",
              desc: "Finding a charging station has in no manner been less difficult. Our app abilties an intensive database of EV charging stations. It’s the fine app to discover EV charging stations, imparting actual-time updates on the availability of charging elements. Whether you are attempting to find a charging station app or the exceptional EV charging app, our app has you covered.",
              icon: "/EV_2.png",
              border: "border-blue-500"
            },
            {
              title: "User-Friendly Mobile Apps",
              desc: "Our cellular apps are designed with the individual in thoughts. Available on both iOS and Android, our app is good for on-the-move EV proprietors. It’s the satisfactory EV charging app 2022, making sure you have got the first-class feasible enjoy whilst charging your car.",
              icon: "/EV_3.png",
              border: "border-yellow-400"
            },
            {
              title: "Integration with Popular Charging Networks",
              desc: "Our EV charging app integrates with most important networks like ChargePoint, EVgo, Greenlots, and further. Whether you’re using a price thing app, tesla supercharger app, or a few different EV charging app, our app offers seamless integration. You can also plan your trips the usage of the tesla experience planner app and extraordinary EV path planner apps internal our platform.",
              icon: "/EV_4.png",
              border: "border-red-500"
            },
            {
              title: "Fast and Reliable Charging",
              desc: "Experience fast charging with our app’s optimized algorithms. Our app helps fast charging app functionalities, making sure your EV is ready to move in the shortest viable time. It’s the splendid app for finding charging stations and the fine EV charging station app, offering quick and green charging answers.",
              icon: "/EV_5.png",
              border: "border-blue-500"
            },
            {
              title: "Real-Time Updates and Notifications",
              desc: "Stay knowledgeable with real-time updates on charging station reputation, availability, and pricing. Our EV charging app for Android and iOS gives notifications to maintain you up to date. Whether you’re the usage of the plugshare app, ChargeHub app, or some other platform, our app guarantees you by no means pass over an update.",
              icon: "/EV_6.png",
              border: "border-yellow-400"
            },
            {
              title: "Advanced EV Charging Features",
              desc: "Our app consists of superior capabilities like EV experience planner app functionalities, EV charging calculator app, and more. It’s the first-rate app to discover car charging stations, presenting a entire solution for all of your EV charging goals.",
              icon: "/EV_3.png",
              border: "border-green-500"
            },
            {
              title: "Enhanced Security and Payment Options",
              desc: "Security is paramount. Our app offers strong charge options, making sure your transactions are secure. Whether you are the use of a shell EV charging app, bp EV charging app, or every other price system, our app helps all of it.",
              icon: "/EV_6.png",
              border: "border-purple-500"
            },
            {
              title: "Customized charging Solutions",
              desc: "Get tailored charging answers with our app. It’s the high-quality app for EV route making plans, imparting customized options to fit your particular desires. Whether you want a domestic charger app or a public charging station finder, our app presents personalized solutions.",
              icon: "/EV_4.png",
              border: "border-cyan-500"
            },
            {
              title: "Seamless Navigation and user Experience",
              desc: "Enjoy a seamless consumer enjoy with intuitive navigation. Our app is designed to be the pleasant EV direction planner and the nice EV charging app. It’s the correct companion for all EV proprietors.",
              icon: "/EV_6.png",
              border: "border-pink-500"
            }
  ]

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose Webblaze's EV Charging App?
      </h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className={`bg-white mb-5 rounded-xl shadow p-6 border-b-4 ${card.border}`}>
              <img src={card.icon}  className="w-10 mb-4" />
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Section_b
