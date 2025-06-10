import React, { useRef, useEffect, useState } from "react";

const logos1 = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
];
const logos2 = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cinema4d/cinema4d-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
];
const logos3 = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
];

const SLIDE_DURATION = 12000; // ms for one direction
const PAUSE_DURATION = 2000; // ms pause at end

function MarqueeRow({ logos, direction = "right", reverse }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    marqueeRef.current.style.transition = "none";
    marqueeRef.current.style.transform = "translateX(0)";
    // Force reflow for transition to take effect
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
        className="flex gap-12 w-max"
        style={{ willChange: "transform" }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow flex items-center justify-center h-28 w-56 p-6"
          >
            <img
              src={logo}
              alt="tech"
              className="max-h-12 max-w-full mx-auto"
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
    <section className="py-16 w-full">
      <div className="text-center mb-8">
        <div className="text-red-400 font-medium mb-2">Work</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Technology Stack
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Our engineers apprehend your business requirements and help you choose
          the right technology for your solution.
        </p>
      </div>
      <div className="space-y-8 max-w-full mx-auto">
        <MarqueeRow logos={logos1} direction="right" reverse={reverse} />
        <MarqueeRow logos={logos2} direction="left" reverse={reverse} />
        <MarqueeRow logos={logos3} direction="right" reverse={reverse} />
      </div>
    </section>
  );
}

export default Section_f;
