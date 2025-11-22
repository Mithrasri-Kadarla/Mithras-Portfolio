"use client";
import React, { useState } from "react";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

  const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const getVisibleCards = () => [
    projects[index],
    projects[(index + 1) % projects.length],
    projects[(index + 2) % projects.length],
  ];

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-6 bg-gradient-to-b from-[#91C8E4] via-[#FFFBDE]/60 to-[#91C8E4]/30"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#4682A9] mb-16">
        Featured Projects
      </h2>

      <div className="relative max-w-7xl mx-auto flex items-center">

        {/* LEFT BUTTON – desktop only */}
        <button
          onClick={prevSlide}
          className="absolute -left-12 z-20 p-4 bg-[#4682A9] hover:bg-[#749BC2] text-white rounded-full shadow-xl hidden md:flex"
        >
          <FaChevronLeft size={22} />
        </button>

        {/* ---------------------- MOBILE VIEW (SWIPER) ---------------------- */}
        <div className="block md:hidden w-full">
          <Swiper
            direction="horizontal"
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            style={{ overflow: "visible" }}
          >
            {projects.map((p, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-lg mx-6">
                  <div className="relative h-56">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4682A9]/70" />
                    <h3 className="absolute bottom-4 left-5 text-2xl font-semibold text-white">
                      {p.title}
                    </h3>
                  </div>

                  <div className="p-6">
                    <p className="text-[#2c3e50] text-sm leading-relaxed mb-5">
                      {p.description}
                    </p>

                    <a
                      href={p.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-[#4682A9] rounded-full shadow-md hover:bg-[#749BC2]"
                    >
                      View Project <FaExternalLinkAlt size={14} />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ---------------------- DESKTOP VIEW (3 CARDS) ---------------------- */}
        <div className="hidden md:grid grid-cols-3 gap-12 w-full px-12">
          {getVisibleCards().map((project, idx) => (
            <div
              key={idx}
              className="relative group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-3"
            >
              <div className="relative h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4682A9]/70" />
                <h3 className="absolute bottom-4 left-5 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-[#2c3e50] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-[#4682A9] rounded-full shadow-md hover:bg-[#749BC2]"
                >
                  View Project <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON – desktop only */}
        <button
          onClick={nextSlide}
          className="absolute -right-12 z-20 p-4 bg-[#4682A9] hover:bg-[#749BC2] text-white rounded-full shadow-xl hidden md:flex"
        >
          <FaChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
