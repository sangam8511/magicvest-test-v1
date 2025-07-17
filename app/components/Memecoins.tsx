"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

function Memecoins() {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<ReturnType<typeof Draggable.create>[0] | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { id: 1, title: "Current Insiders", value: 5, change: "-80%", type: "green" },
    { id: 2, title: "Init Insiders", value: 16, change: "+60%", type: "red" },
    { id: 3, title: "Other Metric", value: 11, change: "-25%", type: "green" },
    { id: 4, title: "Current Insiders", value: 5, change: "-80%", type: "green" },
    { id: 5, title: "Init Insiders", value: 16, change: "+60%", type: "red" },
    { id: 6, title: "Other Metric", value: 11, change: "-25%", type: "green" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const cardWidth = container?.children[0]?.clientWidth || 220;
    const maxOffset = -cardWidth * (cards.length - 1);

    if (!container) return;

    // Init Draggable
    draggableRef.current = Draggable.create(container, {
      type: "x",
      bounds: { minX: maxOffset, maxX: 0 },
      inertia: true,
      snap: (endValue) => {
        const index = Math.round(endValue / cardWidth);
        setActiveIndex(-index);
        return index * cardWidth;
      },
    })[0];

    // Auto Slide
    intervalRef.current = setInterval(() => {
      const currentX = draggableRef.current?.x || 0;
      const nextX = currentX - cardWidth;

      if (Math.abs(nextX) >= Math.abs(maxOffset)) {
        gsap.to(container, {
          x: 0,
          duration: 0.5,
          onUpdate: () => {
            draggableRef.current?.update();
            setActiveIndex(0);
          },
        });
      } else {
        const nextIndex = Math.abs(Math.round(nextX / cardWidth));
        gsap.to(container, {
          x: nextX,
          duration: 0.5,
          onUpdate: () => {
            draggableRef.current?.update();
            setActiveIndex(nextIndex);
          },
        });
      }
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      draggableRef.current?.kill();
    };
  }, [cards.length]);
  return (
    <div>
      <div className="border-[#d7d6d6] border-l border-r pb-20 max-w-7xl mx-auto pt-10 pb-20 flex items-center flex-col justify-center px-6"></div>
      <div className="p-2">
        <div className="bg-black border-[#d7d6d6] border-b text-white min-h-screen rounded-3xl padding-l-3 padding-r-3">
          <div className="border-[#575656c2] border-b">
            <div className="border-[#575656c2] border-b border-l border-r max-w-7xl mx-auto px-10">
              <div className="flex items-center gap-2 pt-10 ">
                <img
                  src="./asset/images/logo/memlocate.png"
                  alt=""
                  width="80px"
                />
                <div className="line-back-forhead"></div>
              </div>
              <div className="">
                <div className=" mt-5 pb-15">
                  <div className="text-[40px] font-semibold leading-tight w-[70%]">
                    In the World of Memecoins, Data Is the Difference Between
                    Luck and Profit
                  </div>
                  <p className="w-[45%] text-[18px] mt-2 leading-normal mt-3">
                    MagicRadar tracks
                  </p>
                  <div className="flex justify-between items-end">
                    <div className="flex items-start flex-col gap-1 mt-3">
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <circle cx="9" cy="9" r="9" fill="#D9D9D9" />
                            <path
                              d="M9 14.5C6.92893 14.5 5.25 12.821 5.25 10.75C5.25 9.6731 5.70393 8.70225 6.4309 8.0183C7.10202 7.38688 8.75 6.24975 8.5 3.75C11.5 5.75 13 7.75 10 10.75C10.5 10.75 11.25 10.75 12.5 9.5148C12.6349 9.9016 12.75 10.3173 12.75 10.75C12.75 12.821 11.071 14.5 9 14.5Z"
                              fill="#030901"
                            />
                          </svg>
                        </div>
                        <div>
                          Just-launched tokens (less then 24h old) with high
                          potential
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <circle cx="9" cy="9" r="9" fill="#D9D9D9" />
                            <path
                              d="M11.9044 7.70953L11.8222 7.89809C11.7621 8.03614 11.5712 8.03614 11.511 7.89809L11.4288 7.70953C11.2823 7.37332 11.0185 7.10563 10.6892 6.95919L10.436 6.84657C10.2991 6.78567 10.2991 6.58643 10.436 6.52554L10.675 6.41921C11.0128 6.269 11.2814 5.99141 11.4253 5.64377L11.5097 5.44001C11.5686 5.29799 11.7647 5.29799 11.8235 5.44001L11.9079 5.64377C12.0519 5.99141 12.3205 6.269 12.6582 6.41921L12.8973 6.52554C13.0342 6.58643 13.0342 6.78567 12.8973 6.84657L12.6441 6.95919C12.3148 7.10563 12.0509 7.37332 11.9044 7.70953ZM12.3333 11.6668V8.55303C12.1248 8.62673 11.9004 8.66683 11.6666 8.66683C11.3023 8.66683 10.9608 8.56943 10.6666 8.39926V10.6668H9.99996V8.3335H10.5607C10.0218 7.97519 9.66663 7.36249 9.66663 6.66683C9.66663 6.43307 9.70673 6.20868 9.78043 6.00016H5.99996C5.81587 6.00016 5.66663 6.1494 5.66663 6.3335V11.6668C5.66663 11.8509 5.81587 12.0002 5.99996 12.0002H12C12.1841 12.0002 12.3333 11.8509 12.3333 11.6668ZM7.33329 9.3335H7.99996V10.6668H7.33329V9.3335ZM8.66663 7.3335H9.33329V10.6668H8.66663V7.3335Z"
                              fill="#030901"
                            />
                          </svg>
                        </div>
                        <div>
                          Social volume spikes (Twitter/Reddit chatter
                          exploding)
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <circle cx="9" cy="9" r="9" fill="#D9D9D9" />
                            <path
                              d="M7.33541 6.08447H8.58542V9.83447H7.33541V11.0845H6.50208V9.83447H5.25208V6.08447H6.50208V4.83447H7.33541V6.08447ZM11.5021 8.1678H12.7521V11.9178H11.5021V13.1678H10.6688V11.9178H9.41875V8.1678H10.6688V6.91781H11.5021V8.1678Z"
                              fill="#030901"
                            />
                          </svg>
                        </div>
                        <div>
                          Whale movements (Smart money buying before the crowd)
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="px-6 py-3 bg-lime-400 text-black rounded-full text-sm font-semibold hover:bg-lime-300 transition">
                        Start winning today
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[30%]">
                  {/* <div className="space-y-4">
                            {features.map((text, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <FontAwesomeIcon
                                  icon={faCheckCircle}
                                  className="text-green-500 mt-1"
                                  size="lg"
                                />
                                <p className="text-gray-800 text-base text-[12px]">{text}</p>
                              </div>
                            ))}
                            <div>
                              <button className="px-6 py-3 bg-lime-400 text-black rounded-full text-sm font-semibold hover:bg-lime-300 transition">
                                Scan Any Token
                              </button>
                            </div>
                          </div> */}
                </div>
              </div>
            </div>

            <div className="border-[#575656c2]  border-l border-r max-w-7xl mx-auto ">
              <div className="card-container flex items-start">
                <div className="card border-[#282A2C] border relative max-w-[33.33%]  overflow-hidden shadow-lg bg-overlay-gradiant">
                  <img
                    src="./asset/images/logo/gradiant-overlay.png"
                    alt=""
                    className="absolute"
                  />
                  <div className="relative top-65 px-3">
                    <div className="flex flex-col gap-5">
                      <div className="max-w-auto m-0">
                        <p className="font-semibold text-base text-white">
                          Track your favorite Meme coins effortlessly
                        </p>
                      </div>
                      <div className="max-w-auto m-0">
                        <p className="text-base font-extralight text-white">
                          Monitor your watchlist 24/7, alerting you to price
                          fluctuations, emerging trends, and potential
                          breakouts—so you never miss an opportunity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-[#282A2C] border max-w-[33.33%] relative">
                  <img
                    src="./asset/images/logo/gradiant-overlay.png"
                    alt=""
                    className="absolute z-10 w-full h-full"
                  />
                  <main className="flex items-center absolute w-full overflow-visible justify-center bg-black p-6">
  <div className="overflow-hidden h-[190px] w-full relative">
    <div
      ref={containerRef}
      className="flex gap-4 cursor-grab active:cursor-grabbing mt-5"
    >
      {cards.map((card, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={card.id}
            className={`w-[150px] h-[150px] rounded-xl text-white pt-8 pb-8 px-6 flex-shrink-0 relative transition-all duration-300 ease-in-out
              ${
                card.type === "green"
                  ? "bg-gradient-to-b from-green-500 to-green-600"
                  : "bg-gradient-to-b from-red-500 to-red-600"
              }
              ${
                isActive
                  ? "scale-105 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                  : "scale-100 border border-gray-700 shadow"
              }
            `}
          >
            {/* Camera-style corners */}
            {isActive && (
              <>
                <span className="absolute top-0 left-0 w-4 h-4 m-[-10px] border-t-2 border-l-2 border-green-400" />
                <span className="absolute top-0 right-0 w-4 h-4 m-[-10px]  border-t-2 border-r-2 border-green-400" />
                <span className="absolute bottom-0 left-0 w-4 m-[-10px] h-4 border-b-2 border-l-2 border-green-400" />
                <span className="absolute bottom-0 right-0 w-4 m-[-10px] h-4 border-b-2 border-r-2 border-green-400" />
              </>
            )}

            {/* Content */}
            <div className="flex items-center justify-between text-sm font-semibold mb-3">
              <span>{card.title}</span>
              <span className="opacity-70 text-xs">ⓘ</span>
            </div>
            <div className="text-3xl font-bold mt-6">{card.value}</div>
            <div className="absolute bottom-3 right-3 text-xs bg-black/50 px-2 py-0.5 rounded-md">
              {card.change}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</main>

                  <div className="relative top-65 px-3 z-20">
                    <div className="flex flex-col gap-5">
                      <div className="max-w-auto m-0">
                        <p className="font-semibold text-base text-white">
                          Instantly Decode Any Token’s Potential
                        </p>
                      </div>
                      <div className="max-w-auto m-0">
                        <p className="text-base font-extralight text-white">
                          Scans 20+ critical metrics like dev activity, exchange
                          listings, social engagement and more…
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-[#282A2C] border card-bg relative max-w-[33.33%]">
                <motion.img
  src="./asset/images/logo/iMockup - iphone 14.png"
  alt=""
  className="absolute top-[70px] left-35"
  animate={{ y: [0, -20, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

                  <img
                    src="./asset/images/logo/gradiant-overlay.png"
                    alt=""
                    className="absolute z-10 w-full h-full"
                  />
                  <div className="relative top-65 px-3 z-20">
                    <div className="flex flex-col gap-5">
                      <div className="max-w-auto m-0">
                        <p className="font-semibold text-base text-white">
                          Sentiment Tracker - Real-Time Market Mood Analysis
                        </p>
                      </div>
                      <div className="max-w-auto m-0">
                        <p className="text-base font-extralight text-white">
                          Buy Zones (when accumulation starts) Danger Zones
                          (when FOMO peaks before dumps) Trend Predictions...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[400px]"></div>
              <div className="flex items-center justify-center">
                <p className="text-center mb-10">
                  💎 Trade like the top 1% — join the thousands using MagicVest
                  to outsmart <br /> the memecoin market
                </p>
              </div>
            </div>
          </div>
          <div className="border-[#575656c2] border-b border-l border-r max-w-7xl mx-auto px-10">
            <div className="flex items-center gap-2 pt-10 ">
              <div className="line-back-forhead"></div>
              <img
                src="./asset/images/logo/memlocate.png"
                alt=""
                width="80px"
              />
              <div className="line-back-forhead"></div>
            </div>

            <div className="text-[49px] mt-20 font-semibold leading-tight text-center text-white">
              Be an investment pro. Stop getting <br /> fooled by projects with
              no potential
            </div>
            <div className="flex flex-col items-center justify-center w-full  flex justify-center">
              <p className="text-center mt-5 w-[46%]">
                Pros don’t gamble—they analyze whales, liquidity, team,
                engagement Your portfolio deserves better than reckless bets
                Safety Score contract verified? Dev trustworthy? Real potential
                whales accumulating? organic community? Clear signals 🟢 Buy /
                🔴 Avoid
              </p>
              <button className="px-6 py-3 mt-5 bg-lime-400 text-black rounded-full text-sm font-semibold hover:bg-lime-300 transition">
                Start to track now
              </button>
            </div>
            <div className="mt-12">
              <img
                src="/asset/images/logo/browser.png"
                alt="Dashboard"
                className="rounded-xl shadow-xl border border-[#1e1e1e]"
              />
            </div>
            <div className="">
              <div className="pt-10 pb-20 flex items-center flex-col justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="728"
                  height="56"
                  viewBox="0 0 728 56"
                  fill="none"
                >
                  <path
                    d="M0.650146 52.9881C0.650146 52.2596 0.939551 51.5609 1.4547 51.0457C1.96983 50.5306 2.66852 50.2412 3.39704 50.2412C4.12557 50.2412 4.82425 50.5306 5.33939 51.0457C5.85454 51.5609 6.14394 52.2596 6.14394 52.9881C6.14394 53.7166 5.85454 54.4154 5.33939 54.9305C4.82425 55.4456 4.12557 55.735 3.39704 55.735C2.66852 55.735 1.96983 55.4456 1.4547 54.9305C0.939551 54.4154 0.650146 53.7166 0.650146 52.9881ZM361.135 3.55012C361.135 2.8216 361.425 2.12291 361.94 1.60778C362.455 1.09263 363.154 0.803223 363.882 0.803223C364.61 0.803223 365.31 1.09263 365.825 1.60778C366.339 2.12291 366.629 2.8216 366.629 3.55012C366.629 4.27865 366.339 4.97732 365.825 5.49247C365.31 6.00762 364.61 6.29702 363.882 6.29702C363.154 6.29702 362.455 6.00762 361.94 5.49247C361.425 4.97732 361.135 4.27865 361.135 3.55012ZM2.88207 52.9881V44.7485H3.91202V52.9881H2.88207ZM19.8764 27.7541H347.403V28.784H19.8764V27.7541ZM363.367 11.7898V3.55012H364.397V11.7898H363.367ZM347.403 27.7541C356.22 27.7541 363.367 20.6062 363.367 11.7898H364.397C364.397 21.1758 356.789 28.784 347.403 28.784V27.7541ZM2.88207 44.7485C2.88207 35.3624 10.4904 27.7541 19.8764 27.7541V28.784C11.0599 28.784 3.91202 35.932 3.91202 44.7485H2.88207Z"
                    fill="white"
                    fillOpacity="0.05"
                  />
                  <path
                    d="M727.115 52.9881C727.115 52.2596 726.825 51.5609 726.311 51.0457C725.795 50.5306 725.096 50.2412 724.368 50.2412C723.64 50.2412 722.94 50.5306 722.425 51.0457C721.911 51.5609 721.621 52.2596 721.621 52.9881C721.621 53.7166 721.911 54.4154 722.425 54.9305C722.94 55.4456 723.64 55.735 724.368 55.735C725.096 55.735 725.795 55.4456 726.311 54.9305C726.825 54.4154 727.115 53.7166 727.115 52.9881ZM366.629 3.55012C366.629 2.8216 366.341 2.12291 365.825 1.60778C365.31 1.09263 364.611 0.803223 363.882 0.803223C363.154 0.803223 362.455 1.09263 361.941 1.60778C361.425 2.12291 361.135 2.8216 361.135 3.55012C361.135 4.27865 361.425 4.97732 361.941 5.49247C362.455 6.00762 363.154 6.29702 363.882 6.29702C364.611 6.29702 365.31 6.00762 365.825 5.49247C366.341 4.97732 366.629 4.27865 366.629 3.55012ZM724.883 52.9881V44.7485H723.853V52.9881H724.883ZM707.889 27.7541H380.361V28.784H707.889V27.7541ZM364.398 11.7898V3.55012H363.367V11.7898H364.398ZM380.361 27.7541C371.546 27.7541 364.398 20.6062 364.398 11.7898H363.367C363.367 21.1758 370.976 28.784 380.361 28.784V27.7541ZM724.883 44.7485C724.883 35.3624 717.274 27.7541 707.889 27.7541V28.784C716.705 28.784 723.853 35.932 723.853 44.7485H724.883ZM363.882 50.2412C363.154 50.2412 362.455 50.5306 361.941 51.0457C361.425 51.5609 361.135 52.2596 361.135 52.9881C361.135 53.7166 361.425 54.4154 361.941 54.9305C362.455 55.4456 363.154 55.735 363.882 55.735C364.611 55.735 365.31 55.4456 365.825 54.9305C366.341 54.4154 366.629 53.7166 366.629 52.9881C366.629 52.2596 366.341 51.5609 365.825 51.0457C365.31 50.5306 364.611 50.2412 363.882 50.2412ZM363.367 36.5088V52.9881H364.398V36.5088H363.367Z"
                    fill="white"
                    fillOpacity="0.05"
                  />
                </svg>

                <div className="flex items-center w-[838px] mt-10 justify-between mx-auto">
                  <div className="flex items-center justify-center flex-col gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M21.1382 23.5246H4.22768C3.64397 23.5246 3.17078 23.0514 3.17078 22.4677V3.44338C3.17078 2.85967 3.64397 2.38647 4.22768 2.38647H21.1382C21.7219 2.38647 22.1951 2.85967 22.1951 3.44338V22.4677C22.1951 23.0514 21.7219 23.5246 21.1382 23.5246ZM7.39839 6.61409V10.8417H11.626V6.61409H7.39839ZM7.39839 12.9555V15.0693H17.9674V12.9555H7.39839ZM7.39839 17.1831V19.2969H17.9674V17.1831H7.39839ZM13.7398 7.671V9.78481H17.9674V7.671H13.7398Z"
                        fill="#4EDF00"
                      />
                    </svg>
                    <div className="text-gray-500">Find the Hidden Gem</div>
                  </div>
                  <div className="flex items-center justify-center pl-[11px] flex-col gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M2.11401 14.0124H8.45544V22.4676H2.11401V14.0124ZM9.51235 3.44336H15.8538V22.4676H9.51235V3.44336ZM16.9107 8.72788H23.2521V22.4676H16.9107V8.72788Z"
                        fill="#4EDF00"
                      />
                    </svg>
                    <div className="text-gray-500">Analyze with Precision</div>
                  </div>
                  <div className="flex items-center justify-center flex-col gap-3 mr-[-17px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M4.12339 19.1527L8.25699 15.0192L11.2463 18.0085L16.0776 13.1773L17.9725 15.0723V9.78774H12.688L14.5829 11.6827L11.2463 15.0192L8.25699 12.0297L3.02967 17.2571C2.4443 15.9438 2.1189 14.4892 2.1189 12.9584C2.1189 7.12133 6.85083 2.3894 12.688 2.3894C18.525 2.3894 23.257 7.12133 23.257 12.9584C23.257 18.7956 18.525 23.5275 12.688 23.5275C9.16452 23.5275 6.04378 21.8034 4.12339 19.1527Z"
                        fill="#4EDF00"
                      />
                    </svg>
                    <div className="text-gray-500">
                       Take Action with Confidence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memecoins;
