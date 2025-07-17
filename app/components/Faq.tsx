"use client";
import React from 'react'
import { useState } from "react";
import { Plus, X } from "lucide-react"; 

const faqs = [
    {
      question: "What exactly is MagicVest?",
      answer: `MagicVest is an AI-powered crypto intelligence tool that predicts profitable token movements before they happen—and warns you about scams before you invest. It’s like having a data scientist, on-chain analyst, and risk manager in your pocket.`,
    },
    {
      question: "How does it predict pumps and token performance?",
      answer: "MagicVest scans 250+ real-time signals across exchanges, social media, whale wallets, and smart contracts. It uses machine learning to spot trends, predict momentum, and deliver high-accuracy signals (up to 89% win rate on select altcoins).",
    },
    {
      question: "Can MagicVest really detect rug pulls?",
      answer: "Yes. Our rug pull detection system analyzes smart contracts, dev wallet behavior, liquidity locks, bot volumes, and fake social metrics. It can flag dangerous tokens 2–48 hours before a collapse, helping you avoid traps before they happen.",
    },
    {
      question: "Do I need to connect my wallet or give trading access?",
      answer: "No. MagicVest is 100% non-custodial. We don’t touch your funds or ask for exchange API keys unless you choose the autotrade option (Pro plan only). You stay in control at all times.",
    },
    {
      question: "How do the signals work?",
      answer: "You’ll receive real-time alerts via in-app dashboard. Each signal includes: Risk level (MagicScore™) Token safety analysis AI-generated pump predictio",
    },
    {
      question: "What’s the MagicScore™?",
      answer: "It’s our proprietary score based on 18+ critical factors (liquidity health, insider wallets, dev risk, volatility, sentiment, etc.). Green (61–100%) = Safe + Potential Orange (31–60%) = Caution Red (0–30%) = Risky ",
    },
    {
      question: "Does MagicVest work for any token?",
      answer: "We scan all tokens listed on DEXs and CEXs. You can search manually or let our AI feed you the best ones through: Magic Radar (brand new gems with 61%+ score) AI Trending (high-volume tokens with strong growth) Magic Dip (accumulation plays ready to explode ",
    },
    {
      question: "Where do I get alerts?",
      answer: "You can receive signals through: MagicVest dashboard  Email notifications ",
    }
  ];

function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open

  const toggleIndex = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  return (
    <div>
        <div className='max-w-7xl mx-auto flex items-start'>
            <div className='w-full'>
            <div className="mt-20  flex flex-col gap-4 items-start ">
              <div className="text-[40px] font-semibold leading-tight  text-black">
              Frequently asked <br/> questions
              </div>
              <p className="max-w-[450px] text-[18px] mt-2 leading-normal text-start text-black">
              Don’t find the anwser to your question? Contact us by clicking here.
              </p>
              <button className="px-6 py-3 bg-lime-400 text-black rounded-full text-sm font-semibold hover:bg-lime-300 transition">
                Start to track
              </button>
            </div>
            </div>
            <div className="max-w-2xl mx-auto py-12 px-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`transition-all duration-300 bg-white rounded-2xl shadow-sm mb-4 border border-gray-200 ${
              isOpen ? "shadow-md" : ""
            }`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between text-left px-6 py-5 text-base font-medium text-gray-900 focus:outline-none"
            >
              <span>{faq.question}</span>
              <div className="text-gray-500 transition-transform duration-300">
                {isOpen ? <X size={20} /> : <Plus size={20} />}
              </div>
            </button>

            {/* Content */}
            <div
              className={`px-6 pt-0 text-gray-600 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[500px] pb-5" : "max-h-0"
              }`}
            >
              {faq.answer.split("\n").map((line, i) => (
                <p key={i} className="mb-1">
                  {line}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>

        </div>
    </div>
  )
}

export default Faq