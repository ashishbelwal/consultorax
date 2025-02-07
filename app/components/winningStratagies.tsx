import React from "react";
import { AuroraText } from "./ui/aurora-text";
import { MarketingStruggles } from "./marketingStruggles";
import { ThreeCardMarketing } from "./threeCardMarketing";

const WinningStratagies = () => {
  return (
    <>
      <div className="w-full h-full pt-20">
        <h2
          style={{ lineHeight: 1.2 }}
          className="max-w-7xl  text-center mx-auto text-3xl md:text-5xl font-medium text-neutral-800 my-4 dark:text-neutral-200 relative"
        >
          Do you also face <AuroraText>Startup Struggle</AuroraText>
        </h2>
        {/* <p className="text-sm lg:text-base text-center my-4 text-neutral-500 font-normal dark:text-neutral-300">
          90% of startups fail—not because of a bad product, but due to poor
          positioning, lack of market research, and ineffective marketing.
        </p> */}
        <MarketingStruggles />

        <h2
          style={{ lineHeight: 1.2 }}
          className="max-w-7xl  text-center mx-auto text-3xl md:text-5xl font-medium text-neutral-800 my-4 dark:text-neutral-200 relative"
        >
          You need a <AuroraText>Personalize Winning Strategy</AuroraText>
        </h2>

        <p className="text-sm lg:text-base text-center my-4 text-neutral-500 font-normal dark:text-neutral-300">
          90% of startups fail—not because of a bad product, but due to poor
          positioning, lack of market research, and ineffective marketing.
        </p>
        <div className="flex justify-between align-between">
        <ThreeCardMarketing
          title={"Competitive Analysis & Business Audit"}
          description={
            "Find out exactly where you stand in the market and how to outperform competitors."
          }
          imageUrl={
            "/card1.jpg"
          }
          url={"#"}
        />
        <ThreeCardMarketing
          title={"Market Positioning and Differentiation"}
          description={
            "Craft a unique positioning strategy so your startup stands out and attracts the right audience."
          }
          imageUrl={
            "/card2.jpg"
          }
          url={"#"}
        />
        <ThreeCardMarketing
          title={"Go-To-Market Stratagy (GTM) Execution Plan"}
          description={
            "Launch with confidence using a structured, data-driven marketing strategy."
          }
          imageUrl={
            "/card3.jpg"
          }
          url={"#"}
        />
        </div>
      </div>
    </>
  );
};

export default WinningStratagies;
