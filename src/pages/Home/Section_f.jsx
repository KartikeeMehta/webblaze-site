import React, { useRef, useEffect, useState } from "react";

const logos1 = [
  "/VueIcon.png",
  "/ReactIcon.png",
  "/AngularJs.png",
  "/phpIcon.png",
  "/javascriptIcon.png",
  "/awsIcon.png",
];
const logos2 = [
  "/sketechUpIcon.png",
  "/zbrushIcon.png",
  "/autoDesk.png",
  "/cPlusIcon.png",
  "/solidtyIcon.png",
  "/mySqlIcon.png"
];
const logos3 = [
  "/nodeJsIcon.png",
  "/shofifyIcon.png",
  "/wordPressIcon.png",
  "/reactNativeIcon.png",
  "/figmaIcon.png",
  "/psIcon.png"
];

const SLIDE_DURATION = 15000;
const PAUSE_DURATION = 3000;

function MarqueeRow({ logos, direction = "right", reverse }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    marqueeRef.current.style.transition = "none";
    marqueeRef.current.style.transform = "translateX(0)";
    void marqueeRef.current.offsetWidth;
    marqueeRef.current.style.transition = `transform ${SLIDE_DURATION}ms linear`;

    if (
      (direction === "right" && !reverse) ||
      (direction === "left" && reverse)
    ) {
      marqueeRef.current.style.transform = `translateX(-50%)`;
    } else {
      marqueeRef.current.style.transform = `translateX(0)`;
    }
  }, [reverse, direction]);

  return (
    <div className="overflow-hidden w-full py-4">
      <div
        ref={marqueeRef}
        className="flex gap-6 w-max"
        style={{ willChange: "transform" }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow flex items-center justify-center h-20 sm:h-24 md:h-28 w-40 sm:w-48 md:w-52 p-4 border hover:shadow-md transition"

          >
            <img
              src={logo}
              alt="tech"
              className="max-h-9 sm:max-h-11 md:max-h-11 max-w-[50%] object-contain"

            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Section_f() {
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    let timeout;
    function loop() {
      timeout = setTimeout(() => {
        setReverse((r) => !r);
        loop();
      }, SLIDE_DURATION + PAUSE_DURATION);
    }
    loop();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full bg-gray-50">
      <div className="text-center mb-12">
        <div className="text-red-500 text-lg sm:text-xl font-semibold mb-2">Work</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Technology Stack</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Our engineers apprehend your business requirements and help you choose the right technology for your solution.
        </p>
      </div>

      <div className="space-y-10 ">
        <MarqueeRow logos={logos1} direction="right" reverse={reverse} />
        <MarqueeRow logos={logos2} direction="left" reverse={reverse} />
        <MarqueeRow logos={logos3} direction="right" reverse={reverse} />
      </div>
    </section>
  );
}

export default Section_f;
