"use client";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceEducationPath() {
  return (
    <section
      className="relative w-full py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#91C8E4]/40 to-[#FFFBDE] flex flex-col items-center"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl sm:text-4xl font-bold text-[#4682A9] mb-10"
        data-aos="fade-up"
      >
        My Journey
      </h2>

      {/* Main Wrapper */}
      <div className="relative w-full max-w-4xl">

        {/* Timeline Line */}
        <div className="
          absolute 
          left-6 sm:left-1/2
          transform sm:-translate-x-1/2
          w-1 h-full 
          bg-gradient-to-b from-[#4682A9] to-[#F9A826] 
          rounded-full
        "></div>

        <div className="space-y-16">

          {/* EXPERIENCE NODE */}
          <div className="relative flex flex-col sm:flex-row sm:justify-start">
            
            {/* Content */}
            <div className="w-full sm:w-1/2 sm:pr-8 text-left sm:text-right sm:ml-0 ml-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#4682A9] flex items-center sm:justify-end gap-2">
                <Briefcase className="text-[#4682A9]" /> Experience
              </h3>

              <p className="mt-2 text-sm text-gray-700">
                <span className="font-bold" data-aos="fade-right">
                  Miraki Technologies Pvt Ltd
                </span>
                , Hyderabad <br />
                <span className="text-gray-500" data-aos="fade-up">
                  Full Stack Intern | Jan 2025 – May 2025
                </span>
              </p>

              <ul
                className="text-sm text-gray-700 mt-2 leading-relaxed"
                data-aos="fade-right"
              >
                <li>• Built modules using <span className="font-semibold">React, Node.js, MongoDB</span>.</li>
                <li>• Integrated <span className="font-semibold">Instagram API</span> for live metrics.</li>
                <li>• Delivered tasks under tight deadlines.</li>
              </ul>
            </div>

            {/* Node Dot */}
            <div
              className="
                absolute 
                left-6 sm:left-1/2 
                transform sm:-translate-x-1/2 
                bg-[#4682A9] 
                w-5 h-5 sm:w-6 sm:h-6 
                rounded-full border-4 border-white shadow-lg
              "
              data-aos="fade-up"
            ></div>
          </div>

          {/* EDUCATION NODE */}
          <div className="relative flex flex-col sm:flex-row sm:justify-end">
            
            {/* Content */}
            <div className="w-full sm:w-1/2 sm:pl-8 text-left ml-12 sm:ml-0">
              <h3
                className="text-xl sm:text-2xl font-semibold text-[#F9A826] flex items-center gap-2"
                data-aos="fade-left"
              >
                <GraduationCap className="text-[#F9A826]" /> Education
              </h3>

              <p className="mt-2 text-sm text-gray-700" data-aos="fade-left">
                <span className="font-bold">SR University, Warangal</span> <br />
                <span className="text-gray-500">
                  B.Tech CSE (AIML) | CGPA: 8.76
                </span>
              </p>

              <p className="mt-3 text-sm text-gray-700" data-aos="fade-left">
                <span className="font-bold">
                  Sri Chaitanya Junior College
                </span>{" "}
                | Score: 922/1000
              </p>

              <p className="mt-1 text-sm text-gray-700" data-aos="fade-left">
                <span className="font-bold">Tejaswi High School</span> | CGPA: 10/10
              </p>
            </div>

            {/* Node Dot */}
            <div
              className="
                absolute 
                left-6 sm:left-1/2 
                transform sm:-translate-x-1/2 
                bg-[#F9A826] 
                w-5 h-5 sm:w-6 sm:h-6 
                rounded-full border-4 border-white shadow-lg
              "
              data-aos="fade-up"
            ></div>
          </div>

        </div>
      </div>
    </section>
  );
}
