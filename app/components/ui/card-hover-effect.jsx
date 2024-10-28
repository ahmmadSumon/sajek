"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Hydration safe setup
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null; // Return null until component mounts

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8  py-10", className)}>
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative group block p-4 h-full w-full rounded-2xl overflow-hidden border border-transparent hover:border-gray-700 bg-neutral-900"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#985340] dark:bg-slate-800/80 block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <div className="flex flex-col md:flex-row gap-6 items-start relative z-20">
            {/* Left side - Image */}
            <div className="relative w-full md:w-1/2">
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={250}
                className="rounded-lg object-cover w-full h-[200px]  "
              />
              <span className="absolute bottom-2 right-2 bg-yellow-400 text-black font-bold text-sm px-3 py-1 rounded">
                {item.price}
              </span>
            </div>
            {/* Right side - Information */}
            <div className="flex flex-col justify-between w-full py-5 md:w-1/2">
              <CardTitle >{item.title}</CardTitle>
              <CardDescription className='text-white'>{item.description}</CardDescription>
              <Link
                href={item.link}
                className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-full text-center hover:bg-yellow-600"
              >
              
বিস্তারিত
              </Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-white font-bold tracking-wide text-lg", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("text-zinc-400 tracking-wide leading-relaxed text-sm mt-2", className)}>
      {children}
    </p>
  );
};
