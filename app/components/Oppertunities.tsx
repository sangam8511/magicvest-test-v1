'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const features = [
  "Identifies high-potential memecoins before they explode",
  "Red-flags scams before you invest",
  "Gives clear buy/sell signals so you always know when to move",
];

const hideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

function Opportunities() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const featureRef = useRef(null);
  const imageRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: true });
  const isParagraphInView = useInView(paragraphRef, { once: true });
  const isFeatureInView = useInView(featureRef, { once: true });
  const isImageInView = useInView(imageRef, { once: true });

  return (
    <div className="text-black border-[#d7d6d6] border-b border-l border-r">
      <div className="border-[#d7d6d6] border-l border-r max-w-7xl mx-auto pt-16 pb-24 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        
        {/* Top section with SVG and line */}
        <div className="flex items-center w-full justify-center mb-12">
          {/* SVG can stay unchanged */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="121"
            height="121"
            viewBox="0 0 121 121"
            fill="none"
          >
            <g filter="url(#filter0_d_34821_595)">
              <rect x="33" y="29" width="55" height="55" rx="15" fill="white" />
            </g>
            <g filter="url(#filter1_dd_34821_595)">
              <rect
                x="27.5"
                y="23.5"
                width="66"
                height="66"
                rx="14.5"
                stroke="#EEE7E7"
                shapeRendering="crispEdges"
              />
            </g>
            <path
              d="M54.7502 48.5H53.7173L52.25 48.8932V50.4458L53.25 50.1778L53.2502 53.5H52V55H56V53.5H54.7502V48.5ZM59 49H70V51H59V49ZM59 56H70V58H59V56ZM59 63H70V65H59V63ZM51.875 60.625C51.875 59.4514 52.8264 58.5 54 58.5C55.1736 58.5 56.125 59.4514 56.125 60.625C56.125 61.1106 55.9618 61.5587 55.6875 61.9167L55.6827 61.9229L54.3159 63.5H56V65H52.0001L51.9996 63.8786L54.4717 61.035C54.5673 60.9252 54.625 60.7821 54.625 60.625C54.625 60.2798 54.3452 60 54 60C53.6738 60 53.4057 60.2501 53.3775 60.5688L53.3651 60.875H51.875V60.625Z"
              fill="#8AFD57"
            />
            <rect
              x="15.5"
              y="11.5"
              width="90"
              height="90"
              rx="23.5"
              stroke="#E4E4E4"
              strokeDasharray="43 34"
            />
            <defs>
              <filter
                id="filter0_d_34821_595"
                x="6"
                y="6"
                width="109"
                height="109"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="13.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.541176 0 0 0 0 0.992157 0 0 0 0 0.341176 0 0 0 0.26 0"
                />
                <feBlend mode="normal" in2="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" />
              </filter>
              <filter
                id="filter1_dd_34821_595"
                x="0"
                y="0"
                width="121"
                height="121"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="13.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.541176 0 0 0 0 0.992157 0 0 0 0 0.341176 0 0 0 0.26 0"
                />
                <feBlend mode="normal" in2="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Main content section */}
        <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-end">
          {/* Left side - Heading & paragraph */}
          <div className="w-full lg:w-2/3 space-y-6">
            <motion.h2
              ref={headingRef}
            
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold leading-tight"
            >
              Receive the best opportunities detected every day
            </motion.h2>

            <motion.p
              ref={paragraphRef}
            
              initial="hidden"
              animate={isParagraphInView ? "visible" : "hidden"}
              className="text-base sm:text-lg lg:text-[18px] leading-relaxed text-gray-700"
            >
              With 1000+ new tokens launching daily (90% scams), guessing right
              is impossible—until now. MagicVest AI spots moonshots early and
              detect rug pulls so you profit safely while others get wrecked.
              Join 15K+ traders winning without the stress! 🔥
            </motion.p>
          </div>

          {/* Right side - Features */}
          <motion.div
            ref={featureRef}
          
            initial="hidden"
            animate={isFeatureInView ? "visible" : "hidden"}
            className="w-full lg:w-1/3 space-y-4"
          >
            {features.map((text, index) => (
              <div key={index} className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 mt-1"
                  size="lg"
                />
                <p className="text-gray-800 text-sm sm:text-base">{text}</p>
              </div>
            ))}

            <div>
              <button className="px-6 py-3 bg-lime-400 text-black rounded-full text-sm font-semibold hover:bg-lime-300 transition">
                Scan Any Token
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom image */}
        <motion.div
          ref={imageRef}
        
          initial="hidden"
          animate={isImageInView ? "visible" : "hidden"}
          className="mt-12"
        >
          <img
            src="/asset/images/logo/demo_img.png"
            alt="Dashboard"
            className="w-full max-w-3xl mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Opportunities;
