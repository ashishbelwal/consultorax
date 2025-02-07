"use client";

import { Tabs } from "./ui/tabs";

export function Services() {
  const tabs = [
    {
      title: "Ad Creatives",
      value: "Ad Creatives",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-700 to-violet-900">
          <p>Ad Creatives</p>
        </div>
      ),
    },
    {
      title: "Templates",
      value: "Templates",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-red-900">
          <p>Templates</p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative ">
      <h3 className="text-4xl font-[100] text-white absolute top-[50%] left-[100] -translate-x-50% -translate-y-50% text-[100px] opacity-10 rotate-[-90deg]">
        Services
      </h3>
      <div className="h-[20rem] md:h-[50rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
