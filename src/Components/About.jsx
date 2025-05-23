import React from "react";
import { FaEnvelope, FaPhoneAlt, FaDownload } from "react-icons/fa";

function About() {
  return (
    <section className=" text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Profile Image with Gradient Border */}
        <div className="relative">
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 p-1">
            <img
              src="/your-image.jpg" // Replace with your profile image path
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6">
          <div>
            <p className="text-green-400 font-semibold mb-1">About Me</p>
            <h2 className="text-4xl font-bold mb-4">
              Who is <span className="text-green-300">Hosain Imtiaz?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Helping businesses grow with creative marketing and digital
              strategies. I'm a passionate digital strategist who turns ideas
              into impact using data, storytelling, and creative design. Let's
              build your digital success.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-400 text-xl" />
              <div>
                <p className="text-sm text-gray-400">Email Us At</p>
                <p className="text-lg font-medium">hello@hosain.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-400 text-xl" />
              <div>
                <p className="text-sm text-gray-400">Phone Number</p>
                <p className="text-lg font-medium">+880 1234 567890</p>
              </div>
            </div>
          </div>

          {/* Experience and Resume */}
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <div className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 p-6 rounded-2xl text-center">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm text-gray-100">Years Experience</p>
            </div>
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition"
              download
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
