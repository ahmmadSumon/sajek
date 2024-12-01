import React from 'react';
import { CardHoverEffectDemo } from '../components/CardHoverEffectDemo';
import Link from 'next/link';

const Packages = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-20">
      <h2 className="text-4xl font-extrabold text-white text-center mt-24 mb-12 relative">
        <span className="bg-clip-text text-black">সাজেক ট্যুর প্যাকেজ</span>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
      </h2>
      <p className="text-xl text-center mb-8">আপনার পছন্দের প্যাকেজটি বুকিং দিন</p>
      <Link href="/booking " passHref={true}>
        <CardHoverEffectDemo />
      </Link>
    </div>
  );
};

export default Packages;
