"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "২০১৫ থেকে সাজেক ভ্যালীতে নিয়মিত সেবা প্রদান করে আসছি",
    description:
      "সুজলা-সুফলা, শস্য-শ্যামলা, আমাদের এই সোনার বাংলা। প্রকৃতি সুন্দর্যের পসরা সাজিয়ে আছে এই বাংলায়। সম্প্রতি সময়ে মানুষ অধিক কর্মমূখী ও নগর কেন্দ্রীক হওয়ায় এতটুকু সময় পেলেই শহরের যান্ত্রিকতা ছেড়ে মাটির কাছে, প্রকৃতির কাছে যেতে চায়। যার ফলে দেশিয় পর্যটন কেন্দ্রগুলোতে পর্যটকদের সমাগম বাড়ছে প্রতিনিয়ত। বাংলাদেশের অন্যতম জনপ্রিয় পর্যটন কেন্দ্র মেঘের রাজ্য সাজেক ভ্যালী।",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/abt1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Sajek Valley" />
      </div>
    ),
  },
  {
    title: "আমাদের অভিজ্ঞতা",
    description:
      " আমরা Trip7Teen ২০১৫ সাল থেকে মেঘের রাজ্য সাজেক ভ্যালীতে সুনামের সাথে ট্যুর অপারেট এবং অন্যান্য সকল সার্ভিস প্রোভাইড করে আসছি। শুধুমাত্র এই সাজেক ভ্যালীতেই ট্যুর পরিচালনার অভিজ্ঞতা ৫০০ এরও অধিক। আমাদের সাথে এখন অবধি ভ্রমণ করেছেন প্রায় ২০০০০ এর অধিক পর্যটক। জনপ্রিয় সাইট গুগলে আছে ১১০০০ এর অধিক রিভিউ। ",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/abt2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Sajek Valley" />
      </div>
    ),
  },
  {
    title: "সাজেক ভ্যালীর পর্যটন",
    description:
      "সাজেক ভ্যালী বাংলাদেশের সবচেয়ে উঁচুতে অবস্থিত পর্যটন কেন্দ্রগুলোর মধ্যে অন্যতম। সাজেকের মেঘে ঢাকা পাহাড়ের সৌন্দর্য এবং স্থানীয় চাকমা ও মারমা সম্প্রদায়ের সাংস্কৃতিক বৈচিত্র্য পর্যটকদের কাছে আকর্ষণীয়। সাজেক ভ্যালীতে ভ্রমণের জন্য আপনি আমাদের মাধ্যমে ট্যুর প্যাকেজ বেছে নিতে পারেন। আমরা সর্বোচ্চ নিরাপত্তা এবং সেবা নিশ্চিত করি।",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/abt3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Sajek Valley" />
      </div>
    ),
  },
  {
    title: "আমাদের লক্ষ্য",
    description:
      "প্রায় প্রতিদিনই আমাদের মাধ্যমে অনেক পর্যটক সাজেক ভ্রমণ এবং অন্যান্য সেবা নিয়ে থাকেন। আপনার ভ্রমণ আনন্দময় এবং নিরাপদ করাই আমাদের একমাত্র লক্ষ্য।",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/abt2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Sajek Valley" />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <StickyScroll content={content} />
    </div>
  );
}
