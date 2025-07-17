"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";

// Reusable animated button text
const AnimatedText = ({ text }: { text: string }) => (
  <span className="btn_text inline-flex">
    {text.split("").map((char, index) => (
      <span
        key={index}
        style={{ transitionDelay: `${index * 0.01}s` }}
        className="transition-all duration-300 group-hover:-translate-y-1"
      >
        {char}
      </span>
    ))}
  </span>
);

export default function Navbar() {
  const divRef = useRef(null);
  const logoRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);

  useEffect(() => {
    gsap.from(divRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  useLayoutEffect(() => {
    if (shouldRenderMenu) {
      const tl = gsap.timeline({
        onStart: () => setIsMobileMenuOpen(true),
      });

      tl.to(logoRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      })
        .fromTo(
          mobileMenuRef.current,
          { y: "-100%", opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          }
        )
        .from(menuLinksRef.current.filter(Boolean), {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.4,
          ease: "power3.out",
          delay: 0.1,
        });
    }
  }, [shouldRenderMenu]);

  const closeMobileMenu = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsMobileMenuOpen(false);
        setShouldRenderMenu(false);
        gsap.to(logoRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      },
    });

    tl.to(menuLinksRef.current.filter(Boolean).reverse(), {
      opacity: 0,
      y: -20,
      stagger: 0.05,
      duration: 0.3,
      ease: "power2.inOut",
    }).to(
      mobileMenuRef.current,
      {
        y: "-100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
      },
      "-=0.2"
    );
  };

  const toggleMobileMenu = () => {
    isMobileMenuOpen ? closeMobileMenu() : setShouldRenderMenu(true);
  };

  return (
    <header
      ref={divRef}
      className="sticky top-0 z-50 bg-black/100 backdrop-blur text-white w-full border-b border-[#272727]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 border-[#272727] border-l border-r flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-lime-400 relative w-28 h-6 overflow-hidden">
          <div ref={logoRef} className="absolute inset-0 transition-all duration-300">
            <Link href="/">
              <Image
                src="/asset/images/logo/magivest_logo.png"
                alt="magicvest Logo"
                width={120}
                height={32}
                priority
              />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          <Link href="#">Price</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Documentation</Link>
          <Link href="#">Contact</Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-2">
          <button className="group border border-gray-500 px-4 py-1.5 rounded-lg text-sm overflow-hidden">
            <AnimatedText text="Login" />
          </button>
          <button className="group bg-white text-black px-4 py-1.5 rounded-lg text-sm font-medium overflow-hidden">
            <AnimatedText text="Sign up" />
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {shouldRenderMenu && (
        <div
          ref={mobileMenuRef}
          className="fixed top-0 left-0 w-full h-full bg-black text-white z-40 px-6 py-8 md:hidden"
        >
          <div className="flex justify-between items-center mb-6">
            <span className="uppercase font-bold">Menu</span>
            <button onClick={toggleMobileMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-5 text-sm">
            {["Price", "FAQ", "Documentation", "Contact"].map((label, i) => (
              <Link
                key={i}
                href="#"
                className="py-2 border-b border-gray-700 flex justify-between items-center"
                ref={(el) => {
                  if (el) menuLinksRef.current[i] = el;
                }}
              >
                {label}
                <span className="text-white text-xl">→</span>
              </Link>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="flex flex-col gap-3 pt-10">
            <Link
              href="#"
              className="group border border-gray-500 px-4 py-2 rounded-full text-sm text-center"
            >
              <AnimatedText text="Login" />
            </Link>
            <Link
              href="#"
              className="group bg-white text-black px-4 py-2 rounded-sm text-sm font-medium text-center"
            >
              <AnimatedText text="Sign up" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
