import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconCalendar,
  IconMail,
  IconBrandWhatsapp
} from "@tabler/icons-react";
import Image from "next/image";

export function QuickNavigation() {
  const links = [
    {
      title: "Book a free consultation",
      icon: (
        <IconCalendar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Event+Title&dates=20250207T100000Z/20250207T110000Z&details=Event+Details&location=Event+Location",
      target: "_blank"
    },

    {
      title: "Drop a mail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:pundhirruchi8@gmail.com",
    },
    {
      title: "Quick connect on Whatapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/<+91 8800749011>",
    },
    
  ];
  return (
    <div className="flex items-center justify-center h-[160px] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
