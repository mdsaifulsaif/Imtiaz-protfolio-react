import React from "react";
import Lottie, { useLottie } from "lottie-react";
import lotianimation1 from "../assets/Animation - 1748008591102.json";

function LottiAnimation1() {
  return (
    <div className="w-[300px] h-[300px]">
      <Lottie animationData={lotianimation1} />
    </div>
  );
}

export default LottiAnimation1;
