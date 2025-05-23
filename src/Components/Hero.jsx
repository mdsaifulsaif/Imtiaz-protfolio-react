import { FaRocket } from "react-icons/fa";

export default function Hero() {
  return (
    <section className=" text-white min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 py-16 gap-10">
      <div className="w-full lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="bg-white bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-white px-4 py-2 rounded-xl inline-block mb-4">
            Hi, I'm Hosain Imtiaz
          </span>
          <br />
          <span className="text-white">- Your Digital Growth Strategist</span>
        </h1>
      </div>

      <div className="w-full lg:w-1/2 text-gray-200 text-base sm:text-lg leading-relaxed text-left lg:text-right">
        <p className="text-white ">
          Helping businesses scale with data-driven marketing, creative
          strategies, and compelling content. Let’s turn clicks into conversions
          and ideas into impact.
        </p>
        <div className="mt-6 flex justify-start lg:justify-end">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2">
            <FaRocket />
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
