import React from "react";
import { FaEnvelope } from "react-icons/fa";
import LottiAnimation1 from "./LottiAnimation1";

function CallToAction() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 md:max-h-[80vh] overflow-hidden">
      {/* Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Elevate Your Digital Presence?
        </h2>
        <p className="text-lg font-medium text-white/90">
          Let&apos;s work together to create impactful marketing strategies that
          drive success.
        </p>
        <a
          href="mailto:saiful20232024ele@gmail.com"
          className="mt-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          <FaEnvelope />
          Get in Touch
        </a>
        {/* <button className="mt-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition">
          <FaEnvelope />
          Get in Touch
        </button> */}
      </div>

      {/* Lottie Animation */}
      <div className="flex-1 max-w-[400px] w-full">
        <LottiAnimation1 />
      </div>
    </div>
  );
}

export default CallToAction;
