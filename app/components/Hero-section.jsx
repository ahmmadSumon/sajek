"use client";
import React, { useEffect, useRef } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link'; // Added import for Link

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover md:object-cover"
      >
        <source src="/gg.mp4#t=9,595" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Social Media Links - Right Side Vertical */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 space-y-4 z-50 text-white text-2xl">
        <Link href="#" className="block p-2 hover:text-yellow-400"><FaFacebook /></Link>
        <Link href="#" className="block p-2 hover:text-yellow-400"><FaTwitter /></Link>
        <Link href="#" className="block p-2 hover:text-yellow-400"><FaInstagram /></Link>
        <Link href="#" className="block p-2 hover:text-yellow-400"><FaYoutube /></Link>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-xl md:text-2xl font-bold py-2">মেঘের দেশ</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 py-4">সাজেক ভ্যালীতে আপনাকে স্বাগতম</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-6xl">
            সাজেক ভ্যালী ভ্রমণের সকল তথ্য এবং সেবা প্রদানে আমরা আছি আপনার পাশে। প্রাইভেট গাড়ি ভাড়া, রিসোর্ট বুকিং, কর্পোরেট ট্যুর, ফ্যামেলী ট্যুর, কাপল ট্যুর, সলো ট্যুরের জন্য যোগাযোগ করুন আমাদের সাথে।
          </p>
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#FFDD44] via-[#FFC107] to-[#FF9800] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <Link
              href="/"
              title="+88 018 41 86 26 00"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black/80 transition-all duration-200 bg-yellow-400 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
              role="button"
            >
              +88 018 41 86 26 00
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;