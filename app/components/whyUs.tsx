"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { AuroraText } from "./ui/aurora-text";

const words = [
  "✔️ Results Guaranteed – We only take on projects we’re confident will succeed.",
  "✔️ Strategic, Not Just Tactical – Every action is backed by real, measurable data.",
  "✔️ Growth That Lasts – We focus on scaling businesses, not just running ads.",
  "✔️ Trusted by Leaders – Experience with startups and high-growth companies means we know what works.",
];
const WhyUs = ({
    filter = true,
    duration = 0.5,
  }: {
    filter?: boolean;
    duration?: number;
  }) => {

    const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {words.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              <h3 className="mt-[20px]">{word}{" "} <br /></h3>
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
    
  return (
    <>
      <div className="w-full h-full pt-20">
        <h2
          style={{ lineHeight: 1.2 }}
          className="max-w-7xl mx-auto text-3xl md:text-5xl font-medium text-neutral-800 my-4 dark:text-neutral-200 relative"
        >
          Simply Put, <AuroraText>Why Us?</AuroraText>
        </h2>
        <p className="text-sm lg:text-base text-neutral-500 font-normal dark:text-neutral-300">
          Your Partners in Strategy, Growth, and Results
        </p>
        <div className=" dark:text-white text-black text-[20px] leading-snug tracking-wide mt-[40px]">
          {renderWords()}
        </div>
      </div>
    </>
  );
};

export default WhyUs;
