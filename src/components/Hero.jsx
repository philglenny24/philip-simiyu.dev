import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";
import Python from "../assets/python.png";
import React from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Supabase from "../assets/supabase.png";
import Django from "../assets/django.png";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 min-h-screen bg-white">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left animate-fade-in">
        {/* Mission Tagline */}
        <p className="text-sm uppercase tracking-wide text-orange-600 font-semibold">
          Building scalable tech for real-world impact
        </p>

        {/* Name & Role */}
        <h1 className="text-4xl font-bold text-gray-900">Philip Simiyu</h1>
        <h2 className="text-5xl font-bold text-gray-800">
          <Typewriter
            words={[
              "Software Engineer",
              "AgriTech Innovator",
              "Backend Architect",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        {/* Bio */}
        <p className="text-gray-600 leading-relaxed">
          I design intuitive and engaging user experiences that elevate brands
          and delight users. I specialize in building resilient backend systems,
          optimizing developer workflows, and crafting inclusive tech for
          agriculture.
        </p>

        {/* CTA Button */}
        <button className="bg-orange-600 text-white px-6 py-2 rounded-full shadow hover:bg-orange-700 transition duration-300">
          Hire Me
        </button>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 text-xl text-gray-700 mt-6">
          <a
            href="https://www.linkedin.com/in/philip-simiyu"
            className="hover:text-orange-600 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/philglenny24"
            className="hover:text-orange-600 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Quick Stats */}
        <div className="flex justify-center md:justify-start gap-6 mt-8 text-sm text-gray-600">
          <div>
            <span className="text-xl font-bold text-black">2+</span> Years
            Experience
          </div>
          <div>
            <span className="text-xl font-bold text-black">3+</span> Projects
            Delivered
          </div>
          <div>
            <span className="text-xl font-bold text-black">2</span> Countries
            Impacted
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <img src={Python} alt="Python" className="w-12 h-12" />
          <img src={React} alt="React" className="w-12 h-12" />
          <img src={Tailwind} alt="Tailwind" className="w-12 h-12" />
          <img src={Supabase} alt="Supabase" className="w-12 h-12" />
          <img src={Django} alt="Django" className="w-12 h-12" />
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 to-orangeAccent blur-xl opacity-30 scale-110"></div>
          <img
            src={profileImage}
            alt="Philip"
            className="relative rounded-full w-64 h-64 object-cover border-4 border-orangeAccent shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
