'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Testimonial data
const testimonials = [
  {
    quote: "I've already spotted two trending products before they popped. MagicVest makes it easy to act fast and test early.",
    name: "Maximilien Triora",
    title: "MagicVest user",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "I used to check five different tools. Now I just use MagicVest. Saves time and gives better insights.",
    name: "Bixente",
    title: "MagicVest user",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Being able to analyze tokens quickly is crazy powerful. You just get the full picture instantly.",
    name: "Examy",
    title: "MagicVest user",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "MagicVest gives me everything in one place — token analysis, trends, alerts. It's become my daily go-to.",
    name: "Stelio",
    title: "MagicVest user",
    rating: 4.5,
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Love the fact that I can match token performance with market trends. It's super useful to see patterns.",
    name: "Alex Shane",
    title: "MagicVest user",
    rating: 4.5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "The UI is super smooth, and the data is actually useful. No fluff, just what you need to invest smarter.",
    name: "Lisa",
    title: "MagicVest user",
    rating: 4.5,
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// Card UI
const TestimonialCard = ({ testimonial }: any) => (
  <div className="max-w-[500px] bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-600  mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
    <div className="flex items-center">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-200"
      />
      <div>
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <p className="text-gray-500 text-sm">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

// Infinite scroll row
const InfiniteMarquee = ({
  testimonials,
  direction = 'left',
  speed = 50,
}: {
  testimonials: any[];
  direction: 'left' | 'right';
  speed?: number;
}) => {
  const xFrom = direction === 'left' ? '0%' : '-100%';
  const xTo = direction === 'left' ? '-100%' : '0%';

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: [xFrom, xTo] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: 'linear',
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`${direction}-${i}`} testimonial={t} />
        ))}
      </motion.div>
    </div>
  );
};

// Main Component
export default function Testimonials() {
  return (
    <div className="border-[#d7d6d6] border-b bg-white">
      <div className="border-[#d7d6d6] mt-[-9px] border-l border-r max-w-7xl mx-auto flex items-center flex-col justify-center">
        <div className="max-w-[68rem] w-full pt-20 pb-10 border-[#d7d6d6] border-l border-r text-center">
          {/* Stats */}
          <div className="flex gap-20 justify-center mb-16">
            <div className="flex gap-2">
              <img src="/asset/images/logo/users.svg" alt="Users" />
              <div>
                <div className="text-lg font-bold text-black">10,000+ users</div>
                <div className="text-sm text-black">Already use MagicVest</div>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="/asset/images/logo/star.svg" alt="Reviews" />
              <div>
                <div className="text-lg font-bold text-black">4.9/5 based on +100 reviews</div>
                <div className="text-sm text-black">Customer satisfaction</div>
              </div>
            </div>
          </div>

          {/* Infinite Scroll Testimonials */}
          {/* Infinite Scroll Testimonials */}
<section className="space-y-10 py-8 relative">
  {/* Fade gradients */}
  <div className="pointer-events-none absolute top-0 left-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent"></div>
  <div className="pointer-events-none absolute top-0 right-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent"></div>

  {/* Top row (scrolls left) */}
  <InfiniteMarquee testimonials={testimonials.slice(0, 3)} direction="left" speed={60} />

  {/* Bottom row (scrolls right) */}
  <InfiniteMarquee testimonials={testimonials.slice(3)} direction="right" speed={60} />
</section>


          {/* CTA */}
          <div className="flex w-full justify-between items-end px-10 mt-20">
            <div className="flex flex-col items-start">
              <div className="text-[40px] font-semibold leading-tight text-black">
                They loved it, why not you?
              </div>
              <p className="max-w-[450px] text-[18px] mt-2 leading-normal text-start text-black">
                Join over 10,000 investors who trust MagicVest to spot opportunities, flag scams, and win early. Will you be next?
              </p>
            </div>

            <button className="px-6 py-3 bg-lime-400 text-black rounded-full text-sm font-semibold hover:bg-lime-300 transition">
              Scan Any Token
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
