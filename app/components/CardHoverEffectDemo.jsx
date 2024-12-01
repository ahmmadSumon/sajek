"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import  HoverEffect  from './ui/card-hover-effect';

export const CardHoverEffectDemo= () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark when the component has mounted on the client side
  }, []);

  if (!isClient) {
    return null; // Return nothing during SSR
  }

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect
        items={projects.map((project, index) => ({
          ...project,
          key: `project-${index}`,
        }))}
      />
    </div>
  );
}

export const projects = [
  {
    title: "Package 1",
    description: "সাজেক ও খাগড়াছড়ি ভ্রমণ – সাজেক ০১ রাত",
    link: "/package1",
    image: "/house.jpg",
    price: "৳৬৮০০ টাকা থেকে শুরু",
  },
  {
    title: "Package 2",
    description: "সাজেক ও খাগড়াছড়ি ভ্রমণ – সাজেক ০২ রাত",
    link: "/package2",
    image: "/house.jpg",
    price: "৳৯৫০০ টাকা থেকে শুরু",
  },
  {
    title: "Package 3",
    description: "সাজেক ও খাগড়াছড়ি ভ্রমণ – ০১ রাত সাজেক ০১ রাত খাগড়াছড়ি",
    link: "/package3",
    image: "/house.jpg",
    price: "৳৯৫০০ টাকা থেকে শুরু",
  },
  {
    title: "Package 4",
    description: "সাজেক ও খাগড়াছড়ি ভ্রমণ – ০১ রাত সাজেক ০১ রাত খাগড়াছড়ি",
    link: "/package4",
    image: "/house.jpg",
    price: "৳১১০০০ টাকা থেকে শুরু",
  },
];


