import React from "react";
import Lottie, { useLottie } from "lottie-react";
import lotianimationhero from "../assets/Animation - 1748008167320.json";

function LottieAnimationHero() {
  return (
    <div className=" md:w-[180px] md:h-[120px] ">
      <Lottie className="h-60 md:h-35 " animationData={lotianimationhero} />
    </div>
  );
}

export default LottieAnimationHero;
