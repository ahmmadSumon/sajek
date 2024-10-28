import { FocusCards } from "../components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "বাস",
      src: "/Bus.jpg",
    },
    {
      title: "স্থানীয় পরিবহন",
      src: "/local.jpg",
    },
    {
      title: "কক্ষ",
      src: "/room.jpg",
    },
    {
      title: "খাবার",
     src: "/food.jpg",
    },
    {
      title: "হেলিকপ্টার",
      src: "/Helecopter-1.jpg",
    },
    {
      title: "গাড়ি ভাড়া",
      src: "/rent.jpg",
    },
    {
        title: "হেলিকপ্টার",
        src: "/Helecopter-1.jpg",
      },
      {
        title: "গাড়ি ভাড়া",
        src: "/rent.jpg",
      },
      
     
  ];

  return <FocusCards cards={cards} />;
}
