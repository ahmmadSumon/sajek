import { HoverEffect } from "../components/ui/card-hover-effect";
import Image from "next/image";

export function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "Package 1",
    description:
      "সাজেক ও খাগড়াছড়ি ভ্রমণ – সাজেক ০১ রাত",
    link: "/sajek-valley-tour",
    image: "/house.jpg",
    price: "৳৬৮০০ টাকা থেকে শুরু",
  },
  {
    title: "Package 2",
    description:
      "সাজেক ও খাগড়াছড়ি ভ্রমণ – সাজেক ০২ রাত",
    link: "/sajek-valley-tour",
    image: "/house.jpg",
    price: "৳৯৫০০ টাকা থেকে শুরু",
  },
  {
    title: "Package 3",
    description:
      "সাজেক ও খাগড়াছড়ি ভ্রমণ – ০১ রাত সাজেক ০১ রাত খাগড়াছড়ি",
    link: "/sajek-valley-tour",
    image: "/house.jpg",
    price: "৳৯৫০০ টাকা থেকে শুরু",
  },
  {
    title: "Package 4",
    description:
      "সাজেক ও খাগড়াছড়ি ভ্রমণ – ০১ রাত সাজেক ০১ রাত খাগড়াছড়ি",
    link: "/sajek-valley-tour",
    image: "/house.jpg",
    price: "৳১১০০০ টাকা থেকে শুরু",
  },
 
];
