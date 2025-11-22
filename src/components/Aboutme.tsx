"use client";
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section
      id="Aboutme"
      className="w-full py-16 px-6 sm:px-8 bg-[#FFFBDE] flex flex-col items-center"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent
                   bg-clip-text bg-gradient-to-r from-[#91C8E4] via-[#749BC2] to-[#4682A9]
                   mb-10 text-center"
        data-aos="fade-up"
      >
        About Me
      </h2>

      {/* Content */}
      <div
        className="flex flex-col md:flex-row items-center justify-center 
                   gap-10 md:gap-20 w-full max-w-6xl"
      >
        {/* Left: Image */}
        <div
          className="flex justify-center w-full md:w-1/3"
          data-aos="fade-right"
        >
          <img
            src="/images/About/passport-size.png"
            alt="Mithrasri Kadarla"
            className="w-40 h-48 sm:w-48 sm:h-56 md:w-64 md:h-72 
                       rounded-3xl border-4 border-[#4682A9] 
                       shadow-lg object-cover"
          />
        </div>

        {/* Right: Text */}
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-left"
        >
          <p className="text-sm sm:text-base md:text-lg text-[#4682A9] leading-relaxed text-justify font-poppins">

            I am <strong>Mithrasri Kadarla</strong>, a passionate software
            engineer specializing in <strong>React, Next.js, and full-stack web
            development</strong>. I love building interactive, creative, and
            visually rich web experiences.
            <br />
            <br />
            I constantly explore new technologies to level up my development and
            problem-solving skills. Alongside coding, I also prepare for competitive
            exams like <strong>GATE</strong> and aim to contribute to impactful
            software projects while collaborating with inspiring teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
