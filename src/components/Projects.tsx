"use client";
import React, { useState } from "react";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title: "Chatbot College Info Portal",
    description:
      "AI-powered chatbot built with Flask to answer student queries with 40% higher accuracy.",
    tech: ["Python", "Flask", "HTML", "CSS"],
    image: "/images/projects/download.jpeg",
    link: "https://github.com/Mithrasri-Kadarla/Chatbot_clg.git",
  },
  {
    title: "Distributed Customer Segmentation",
    description:
      "Scalable ML pipeline for personalized marketing, boosting engagement by 25%.",
    tech: ["Python", "Scikit-learn", "Pandas", "Power BI"],
    image: "/images/projects/distributed.png",
    link: "https://github.com/Mithrasri-Kadarla/Distributed-customer-segmentation.git",
  },
  {
    title: "Credit Card Approval System",
    description:
      "Flask-based ML model predicting approval decisions using applicant profiles.",
    tech: ["Python", "Flask", "HTML", "CSS"],
    image: "/images/projects/creditcard.jpeg",
    link: "https://github.com/Mithrasri-Kadarla/Credit-card-Approval.git",
  },
  {
    title: "HR Analytics with Predictive Insights",
    description:
      "Predictive dashboards analyzing attrition to optimize employee retention.",
    tech: ["Python", "SQL", "Power BI", "Matplotlib"],
    image: "/images/projects/hr.jpeg",
    link: "https://github.com/Mithrasri-Kadarla/HR-Analytics.git",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleCards = () => [
    projects[index],
    projects[(index + 1) % projects.length],
    projects[(index + 2) % projects.length],
  ];

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-6 bg-gradient-to-b from-[#91C8E4] via-[#FFFBDE]/60 to-[#91C8E4]/30 overflow-hidden"
    >
      <h2 className="text-5xl font-extrabold text-center text-[#4682A9] mb-16" data-aos="fade-up">
         Featured Projects
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative max-w-7xl mx-auto flex items-center" data-aos="fade-up">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute -left-12 z-20 p-4 bg-[#4682A9] hover:bg-[#749BC2] text-white rounded-full shadow-xl hidden md:flex"
        data-aos="fade-left" >
          <FaChevronLeft size={22} />
        </button>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto w-full px-12" data-aos="fade-up">
          {getVisibleCards().map((project, index) => (
            <div
              key={index}
              className="relative group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(70,130,169,0.3)] transition-transform duration-500 hover:-translate-y-3 hover:shadow-[0_0_45px_rgba(70,130,169,0.5)]"
            data-aos="fade-up">
              {/* Image */}
              <div className="relative h-56 overflow-hidden" data-aos="fade-up">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-aos="fade-up"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4682A9]/70 via-transparent to-transparent opacity-80" />
                <h3 className="absolute bottom-4 left-5 text-2xl font-semibold text-white drop-shadow-lg" data-aos="fade-up">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#2c3e50] text-sm font-medium leading-relaxed mb-5"data-aos="fade-up">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"data-aos="fade-up">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold text-[#4682A9] bg-[#FFFBDE]/70 rounded-full border border-[#91C8E4]/50 shadow-sm"
                      data-aos="fade-up"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-[#4682A9] rounded-full shadow-lg hover:bg-[#749BC2] transition-all"
                >
                  View Project <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute -right-12 z-20 p-4 bg-[#4682A9] hover:bg-[#749BC2] text-white rounded-full shadow-xl hidden md:flex" data-aos="fade-right"
        >
          <FaChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
