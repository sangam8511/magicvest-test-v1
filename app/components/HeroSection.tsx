"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image"; // Import the Image component

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-sub", {
        y: 30,
        opacity: 0,
        delay: 0.8,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-btn", {
        y: 20,
        opacity: 0,
        delay: 1.2,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-badges > div", {
        opacity: 0,
        y: 20,
        delay: 1.6,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".hero-image", {
        opacity: 0,
        y: 30,
        delay: 2,
        duration: 1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="bg-black text-white min-h-screen px-4 sm:px-6">
      <div className="border-[#272727] border-l border-r max-w-7xl mx-auto">
        <section className="max-w-6xl border-[#272727] border-l border-r mx-auto pt-20 text-center px-4 sm:px-8">

          {/* Headings */}
          <h1 className="hero-line text-3xl sm:text-4xl md:text-5xl lg:text-[49px] font-semibold leading-tight">
            The Only AI That <span className="text-lime-400">Predicts</span> Pumps
          </h1>
          <h2 className="hero-line text-3xl sm:text-4xl md:text-5xl lg:text-[49px] font-semibold leading-tight">
            AND <span className="text-lime-400">Detects</span> Rug Pulls
          </h2>

          {/* Subtext */}
          <p className="hero-sub text-gray-400 text-base sm:text-lg mt-4 mb-8">
            Spots explosive Memecoin opportunities before the crowd<br className="hidden sm:block" />
            —so you enter early, exit smart, and maximize gains.
          </p>

          {/* CTA Button */}
          <div className="hero-btn flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            <button className="relative rotate-border-btn text-black text-sm font-semibold px-6 py-3 rounded-xl z-10 bg-lime-400 hover:bg-lime-300 transition-colors duration-200">
              Start to track now
            </button>
          </div>

          {/* Testimonials */}
          <div className="hero-badges flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-300">
            <div className="flex -space-x-2">
              <Image 
                src="/asset/images/logo/Ellipse 1707.png" 
                width={32} 
                height={32} 
                alt="User"
                className="rounded-full border-2 border-black"
              />
              <Image 
                src="/asset/images/logo/Ellipse 1708.png" 
                width={32} 
                height={32} 
                alt="User"
                className="rounded-full border-2 border-black"
              />
              <Image 
                src="/asset/images/logo/Ellipse 1709.png" 
                width={32} 
                height={32} 
                alt="User"
                className="rounded-full border-2 border-black"
              />
              <Image 
                src="/asset/images/logo/Ellipse 1710.png" 
                width={32} 
                height={32} 
                alt="User"
                className="rounded-full border-2 border-black"
              />
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2">
              <div>⭐⭐⭐⭐⭐</div>
              <div className="text-gray-400 text-center sm:text-left">
                Trusted by 20,000+ ecom players & teams
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12">
            <Image
              src="/asset/images/logo/browser.png"
              alt="Dashboard"
              width={800}
              height={450}
              className="hero-image w-full max-w-4xl mx-auto rounded-xl shadow-xl border border-[#1e1e1e]"
              priority // Important for above-the-fold images
            />
          </div>
        </section>
      </div>
    </div>
  );
}