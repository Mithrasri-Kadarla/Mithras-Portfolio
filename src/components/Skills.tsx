"use client";
import { useState, useEffect } from "react";
import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaChartLine,
  FaBug,
  FaUsers,
  FaClock,
  FaCode,
} from "react-icons/fa";

import {
  SiFlask,
  SiScikitlearn,
  SiNumpy,
  SiMysql,
  SiNetlify,
  SiVercel,
  SiC,
  SiPandas,
} from "react-icons/si";

type CategoryKey = "programming" | "fullstack" | "ml" | "tools" | "softskills";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryKey>("programming");

  const categories: Record<
    CategoryKey,
    {
      title: string;
      items: { name: string; icon: React.ReactNode }[];
    }
  > = {
    programming: {
      title: "Programming Languages",
      items: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: "C", icon: <SiC className="text-[#00599C]" /> },
      ],
    },

    fullstack: {
      title: "Full-Stack Development",
      items: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#3C873A]" /> },
        { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      ],
    },

    ml: {
      title: "ML & Data Analytics",
      items: [
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
        { name: "Pandas", icon: <SiPandas className="text-[#150458]" /> },
        { name: "NumPy", icon: <SiNumpy className="text-[#013243]" /> },
        { name: "SQL", icon: <SiMysql className="text-[#00758F]" /> },
        { name: "Power BI", icon: <FaChartLine className="text-[#F2C811]" /> },
      ],
    },

    tools: {
      title: "API & Tools",
      items: [
        { name: "Flask", icon: <SiFlask className="text-black" /> },
        { name: "REST APIs", icon: <FaCode className="text-gray-600" /> },
        { name: "GitHub", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "VS Code", icon: <FaCode className="text-[#0078D7]" /> },
        { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
        { name: "Vercel", icon: <SiVercel className="text-black" /> },
      ],
    },

    softskills: {
      title: "Soft Skills",
      items: [
        { name: "Rapid Prototyping", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Debugging", icon: <FaBug className="text-[#E34F26]" /> },
        { name: "Collaboration", icon: <FaUsers className="text-[#4682A9]" /> },
        { name: "Time Management", icon: <FaClock className="text-[#91C8E4]" /> },
      ],
    },
  };

  const categoryKeys = Object.keys(categories) as CategoryKey[];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCategory((prev) => {
        const currentIndex = categoryKeys.indexOf(prev);
        const nextIndex = (currentIndex + 1) % categoryKeys.length;
        return categoryKeys[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="skills"
      className="w-full py-14 sm:py-20 px-4 sm:px-10 bg-gradient-to-b from-[#A8E6FF] via-[#91C8E4] to-[#749BC2] text-[#1F3C88] flex flex-col items-center"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 tracking-wide fancy-heading">
        My <span className="text-white">Skills</span>
      </h2>

      <div className="flex flex-col md:flex-row bg-white/20 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden w-full max-w-6xl border border-white/30">

        {/* LEFT CATEGORY LIST */}
        <div className="w-full md:w-1/3 bg-[#4682A9]/80 p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 text-white">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`w-full text-left text-base sm:text-lg font-semibold py-3 px-4 rounded-xl transition-all ${
                selectedCategory === key
                  ? "bg-white text-[#4682A9] shadow-md"
                  : "hover:bg-white/20"
              }`}
            >
              {categories[key].title}
            </button>
          ))}
        </div>

        {/* RIGHT SKILL CARDS */}
        <div className="w-full md:w-2/3 bg-white/10 p-6 sm:p-10 grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8 justify-center">
          {categories[selectedCategory].items.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/20 rounded-2xl p-4 sm:p-6 h-28 sm:h-32 hover:scale-105 transition-transform border border-white/30"
            >
              <div className="text-3xl sm:text-5xl mb-2">{skill.icon}</div>
              <p className="text-xs sm:text-sm font-semibold text-[#1F3C88]">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
