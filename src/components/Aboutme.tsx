"use client";
import React from "react";

const AboutMe: React.FC = () => {
  return (
<section
  id="Aboutme"
  className="w-full py-16 px-8 bg-[#FFFBDE] flex flex-col items-center"
>
  {/* Centered Heading */}
  <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#91C8E4] via-[#749BC2] to-[#4682A9] mb-10 text-center">
    About Me
  </h2>

  {/* Content Row */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 w-full max-w-6xl">
    {/* Left: Passport Photo */}
    <div className="flex justify-center md:justify-end w-full md:w-1/3">
      <img
        src="/images/About/passport-size.png"
        alt="Mithrasri Kadarla"
        className="w-48 h-56 md:w-64 md:h-72 rounded-3xl border-4 border-[#4682A9] shadow-lg object-cover"
      />
    </div>

    {/* Right: About Me Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <p className="text-base md:text-lg text-[#4682A9] leading-relaxed text-justify">
        I am <strong>Mithrasri Kadarla</strong>, a passionate software engineer
        specializing in <strong>React, Next.js, and full-stack web development</strong>.
        I enjoy creating interactive and visually appealing web applications, from
        dynamic portfolios to responsive media galleries.
        <br />
        <br />
        I am continuously learning and exploring new technologies to enhance my
        problem-solving skills, while maintaining a balanced lifestyle and preparing
        for competitive exams like <strong>GATE</strong>. I aim to contribute to
        meaningful projects and collaborate with creative teams to deliver
        high-quality software solutions.
      </p>
    </div>
  </div>
</section>

  );
};

export default AboutMe;
