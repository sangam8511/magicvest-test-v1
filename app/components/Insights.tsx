'use client';

import React from 'react';
import Image from 'next/image';

function Insights() {
  return (
    <div className="p-2">
      <div className="bg-black border-b border-[#d7d6d6] text-white rounded-3xl">
        <div className="border-l border-r border-b border-[#575656c2] max-w-7xl mx-auto px-10">
          <div className="max-w-[68rem] mx-auto w-full pt-20 pb-20 text-center border-l border-r border-[#575656c2]">
            
            {/* Trust Section */}
            <div className="flex justify-center items-center gap-4 text-sm text-gray-300">
              <div className="flex -space-x-2">
                <Image
                  src="/asset/images/logo/Ellipse 1707.png"
                  alt="User 1"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-black"
                />
                <Image
                  src="/asset/images/logo/Ellipse 1708.png"
                  alt="User 2"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-black"
                />
                <Image
                  src="/asset/images/logo/Ellipse 1709.png"
                  alt="User 3"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-black"
                />
                <Image
                  src="/asset/images/logo/Ellipse 1710.png"
                  alt="User 4"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-black"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <div>⭐⭐⭐⭐⭐</div>
                <div className="text-muted">Trusted by 20,000+ ecom players & teams</div>
              </div>
            </div>

            {/* Heading & CTA */}
            <div className="mt-10 flex flex-col gap-5 items-center">
              <h2 className="text-[40px] font-semibold leading-tight text-white">
                Are you ready to get <br />
                the insights?
              </h2>
              <p className="text-[18px] mt-2 leading-normal text-center text-white">
                From noise to clarity — decode what pumps, what dumps, and what <br />
                earns. All in real time, all in one dashboard.
              </p>
              <button className="px-6 py-3 bg-lime-400 text-black rounded-full text-sm font-semibold hover:bg-lime-300 transition">
                Start to track now
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
