"use client";

import Link from "next/link";
import React from "react";

const ScrollBackgroundSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden mt-20 flex items-center justify-center">
     
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: "url('/house.jpg')",
          zIndex: -1,
        }}
      />

      {/* Overlay content layer */}
      <div className="relative flex justify-center items-center max-w-5xl mx-auto py-5">
        <div className="py-8 px-8 bg-opacity-80 rounded-lg shadow-lg text-center justify-center items-center bg-orange-800 w-full md:w-[100%] md:flex flex-row">
          <div className="w-full md:w-[50%]">
            <h1 className="text-4xl text-start font-bold mb-4 text-white">
              সাজেক ভ্যালী ভ্রমণ গাইড
            </h1>
            <p className="text-white text-start">
              সাজেক ভ্যালী এর ভৌগলিক অবস্থান রাঙ্গামাটি জেলার সর্বউত্তরে মিজোরাম সিমান্তে। সাজেক ভ্যালী মেঘের
              জন্য বিখ্যাত বলে এটাকে মেঘের রাজ্যও বলা হয়, আবার অনেকে এটাকে বাংলা ভূস্বর্গ হিসেবেও অবিহিত করেন...
            </p>
          </div>
          <div className="w-full md:w-[50%] flex justify-center items-center mt-6 md:mt-0">
            <div className="relative inline-flex group">
              <div
                className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#FFDD44] via-[#FFC107] to-[#FF9800] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
              ></div>
              <Link
                href="/aboutus"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black/80 transition-all duration-200 bg-yellow-400 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
              >
                বিস্তারিত
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBackgroundSection;
