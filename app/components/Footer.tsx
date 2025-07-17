'use client'
import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="bg-[#FBFDF8] py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 px-4">
        {/* Logo & Contact Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/asset/images/logo/magivest_logo.png"
              alt="MagicVest Logo"
              width={120}
              height={32}
              priority
            />
          </div>
          <p className="text-sm text-gray-600 max-w-sm">
            MagicVest aims for a user-friendly interface, ensuring ease of navigation and feature comprehension.
          </p>
          <p className="text-sm text-gray-600">contact@Magicvest.ai</p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#"><Image src="/x.svg" alt="X" width={28} height={28} /></a>
            <a href="#"><Image src="/linkedin.svg" alt="LinkedIn" width={28} height={28} /></a>
            <a href="#"><Image src="/instagram.svg" alt="Instagram" width={28} height={28} /></a>
            <a href="#"><Image src="/youtube.svg" alt="YouTube" width={28} height={28} /></a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Mission</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Get a Demo</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
            <ul className="space-y-2">
              <li><a href="#">Shop Analytics</a></li>
              <li><a href="#">Find the best Landing Pages</a></li>
              <li><a href="#">Save & Share ads</a></li>
              <li><a href="#">Keyword Search</a></li>
              <li><a href="#">Ads & Creative</a></li>
              <li><a href="#">Find the Scaling Websites</a></li>
              <li><a href="#">Free Trendtrack Chrome...</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Use cases</h3>
            <ul className="space-y-2">
              <li><a href="#">For Dropshipper</a></li>
              <li><a href="#">For Media Buyers</a></li>
              <li><a href="#">For Freelance</a></li>
              <li><a href="#">For DTC Owner</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Informations</h3>
            <ul className="space-y-2">
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
