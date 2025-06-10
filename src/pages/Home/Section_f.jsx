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
  const [isPaused, setIsPaused] = useState(false);
  const [isReverse, setIsReverse] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    let timeout;
    let interval;
    let running = true;
    function animate() {
      if (!marqueeRef.current) return;
      marqueeRef.current.style.transition = `transform ${SLIDE_DURATION}ms linear`;
      marqueeRef.current.style.transform = isReverse
        ? direction === "right"
          ? "translateX(0)"
          : "translateX(0)"
        : direction === "right"
        ? `translateX(-50%)`
        : `translateX(50%)`;
      timeout = setTimeout(() => {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsReverse((prev) => !prev);
        }, PAUSE_DURATION);
      }, SLIDE_DURATION);
    }
    if (!isPaused) animate();
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [isPaused, isReverse, direction]);

  useEffect(() => {
    if (!marqueeRef.current) return;
    marqueeRef.current.style.transition = "none";
    marqueeRef.current.style.transform = isReverse
      ? direction === "right"
        ? `translateX(-50%)`
        : `translateX(50%)`
      : "translateX(0)";
    // eslint-disable-next-line
  }, [isReverse, direction]);

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
  const [reverse1, setReverse1] = useState(false);
  const [reverse2, setReverse2] = useState(true);
  const [reverse3, setReverse3] = useState(false);

  // This is a simple state toggle to force all marquees to reverse together
  useEffect(() => {
    let timeout;
    let isReversed = false;
    function loop() {
      timeout = setTimeout(() => {
        setReverse1((r) => !r);
        setReverse2((r) => !r);
        setReverse3((r) => !r);
        isReversed = !isReversed;
        loop();
      }, SLIDE_DURATION + PAUSE_DURATION);
    }
    loop();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="bg-gray-50 py-16 w-full">
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
      <div className="space-y-8 max-w-7xl mx-auto">
        <MarqueeRow logos={logos1} direction="right" reverse={reverse1} />
        <MarqueeRow logos={logos2} direction="left" reverse={reverse2} />
        <MarqueeRow logos={logos3} direction="right" reverse={reverse3} />
      </div>
    </section>
  );
}

export default Section_f;
