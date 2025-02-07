"use client";

import { Suspense } from "react";
import BrandSpotlight from "./components/brandSpotlight";

import { Overlay, TextBack, TextFront } from "./components/spotlightOthers";
import { Underlay } from "./components/spotlightOthers";
import { Services } from "./components/services";
import { AppleCardsCarouselServices } from "./components/AppleCardsCarouselServices";
import { Features } from "./components/features";

export default function Home() {
  return (
    <>
      <header>{/* <h1>Brand Spotlight</h1> */}</header>
      <main className="h-screen">
        <div className="w-full h-full ">
          <Underlay />
          {/* <TextBack /> */}
          <Suspense fallback={null}>
            <BrandSpotlight />
          </Suspense>
          <TextFront />
        </div>
        <AppleCardsCarouselServices />
        <div className="preview flex min-h-[350px] max-w-[1400px] w-full justify-center p-2 sm:p-10 items-center mx-auto">
          <Features />
        </div>
      </main>
      <Overlay />
    </>
  );
}
