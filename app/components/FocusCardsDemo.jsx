import { FocusCards } from "../components/ui/focus-cards";
import Link from "next/link"; // Added import for Link

export function FocusCardsDemo() {
  const cards = [
    {
      title: "বাস",
      src: "/Bus.jpg",
      link: "/", // Added link property
    },
    {
      title: "স্থানীয় পরিবহন",
      src: "/local.jpg",
      link: "/", // Added link property
    },
    {
      title: "কক্ষ",
      src: "/room.jpg",
      link: "/", // Added link property
    },
    {
      title: "খাবার",
     src: "/food.jpg",
     link: "/", // Added link property
    },
    {
      title: "হেলিকপ্টার",
      src: "/Helecopter-1.jpg",
      link: "/", // Added link property
    },
    {
      title: "গাড়ি ভাড়া",
      src: "/rent.jpg",
      link: "/", // Added link property
    },
    {
        title: "হেলিকপ্টার সার্ভিস",
        src: "/Helecopter-1.jpg",
        link: "/", // Added link property
      },
      {
        title: "গাড়ি ভাড়া সার্ভিস",
        src: "/rent.jpg",
        link: "/", // Added link property
      },
      
     
  ];

  return <FocusCards cards={cards.map(card => ({
    ...card,
    link: <Link href={card.link}></Link>, // Replaced a tag with Link
  }))} />;
}

