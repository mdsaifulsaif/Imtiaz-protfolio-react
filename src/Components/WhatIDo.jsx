import {
  FaBullhorn,
  FaEnvelopeOpenText,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBullhorn />,
    title: "Social Media Marketing",
    description:
      "Social media marketing expert driving brand growth through tailored strategies, trend-focused content, and impactful campaigns on Facebook, Instagram, and LinkedIn.",
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "E-mail Marketing",
    description:
      "Experienced email marketer skilled in crafting campaigns that engage audiences, boost conversions, and foster lasting customer relationships through strategic segmentation and analytics.",
  },
  {
    icon: <FaChartLine />,
    title: "Direct Marketing",
    description:
      "Specialist in targeted marketing campaigns, leveraging email, direct mail, and digital ads to deliver personalized messages, drive engagement, and achieve high ROI through data insights.",
  },
  {
    icon: <FaBriefcase />,
    title: "Office Management",
    description:
      "Efficient office executive skilled in managing operations, coordinating tasks, and streamlining processes to support teams, enhance productivity, and drive organizational success.",
  },
];

import React from "react";

function WhatIDo() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">🚀 What I Do</h2>
        <p className="text-gray-300 text-lg mb-12 text-center max-w-3xl mx-auto">
          I have over 1+ years of experience in marketing, where I have
          developed a strong understanding of digital strategies, brand
          management, and customer engagement. My expertise includes social
          media marketing, content creation, and data analysis, all of which
          have contributed to driving growth and improving brand visibility for
          my clients. I'm passionate about creating innovative solutions that
          connect brands with their target audience effectively.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 rounded-xl p-6 shadow-lg transition transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl text-white">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-white">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white">
            📄 A summary of My Resume
          </h3>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
