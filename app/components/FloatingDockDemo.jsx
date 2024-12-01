import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconHome,
  IconPackage,
  IconBuildingCottage,
  IconTools,
  IconArticle,
  IconPhoneCall,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link"; // Added import for Link

export function FloatingDockDemo() {
  const links = [
    {
      title: "হোম",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "ট্যুর প্যাকেজ",
      icon: (
        <IconPackage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "রিসোট গ্যালারী",
      icon: (
        <IconBuildingCottage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "সেবা সমূহ",
      icon: (
        <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "ব্লগ",
      icon: (
        <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "যোগাযোগ",
      icon: (
        <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    (<div className="flex items-center justify-center  w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links.map(link => ({
          ...link,
          href: <Link href={link.href}>{link.href}</Link>, // Removed the a tag
        }))} />
    </div>)
  );
}
