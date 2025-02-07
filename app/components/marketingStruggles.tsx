
import { MorphStrugles } from "./MorphStrugles";


export function MarketingStruggles() {
  return (
    <div className="z-10 flex-column items-center justify-center h-[50vh]">
      {/* <TextReveal text="Does your startup struggle with any of these?" /> */}
      <div className=" flex  justify-center" style={{marginTop: 50}}>
      <MorphStrugles />
      </div>
    </div>
  );
}
