"use client";

import { Suspense } from "react";
import BrandSpotlight from "./components/brandSpotlight";
import { Overlay, TextFront } from "./components/spotlightOthers";
import { Underlay } from "./components/spotlightOthers";
import { FeaturesBento } from "./components/featuresBento";
import { Testimonials } from "./components/testimonials";
import { QuickNavigation } from "./components/quickNavigation";
import WinningStratagies from "./components/winningStratagies";

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
        <div className="preview flex-column min-h-[350px] max-w-[1400px] w-full justify-center p-2 sm:p-10 items-center mx-auto">
          <WinningStratagies />
        </div>
        
        {/* <AppleCardsCarouselServices /> */}
        <div className="preview flex min-h-[350px] max-w-[1400px] w-full justify-center p-2 sm:p-10 items-center mx-auto">
          {/* <Features /> */}
          <FeaturesBento />
        </div>
        <div className="preview flex min-h-[350px] max-w-[1400px] w-full justify-center p-2 sm:p-10 items-center mx-auto">
          {/* <Features /> */}
          <Testimonials />
        </div>
        
      </main>
      <div className="fixed bottom-[0px] w-full" style={{zIndex: 100}}>
        <QuickNavigation />
        </div>
      
      <Overlay />
      
    </>
  );
}
