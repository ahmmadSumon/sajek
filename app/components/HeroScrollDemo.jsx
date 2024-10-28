"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";
import { FocusCardsDemo } from "./FocusCardsDemo";

export function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden ">
      <ContainerScroll className="h-full  "
        titleComponent={
          <>
           <h1 className="text-3xl md:text-[4rem] py-20 font-bold mt-1 leading-none ">
            
           আমাদের সেবা সমূহ
            </h1>
            <h1 className="text-4xl font-semibold ">
            সাজেক ভ্যালী ভ্রমনে  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              
              </span>
            </h1>
            <h2 className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">আমরাই দিচ্ছি সেরা সার্ভিস </h2>
          </>
        }>
        <FocusCardsDemo/>
      </ContainerScroll>
    </div>)
  );
}
