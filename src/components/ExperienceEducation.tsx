"use client";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceEducationPath() {
  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-b from-[#91C8E4]/40 to-[#FFFBDE] flex flex-col items-center">
      <h2 className="text-4xl font-bold text-[#4682A9] mb-12">
        My Journey
      </h2>

      {/* Path */}
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#4682A9] to-[#F9A826] rounded-full"></div>

        <div className="space-y-16">
          {/* Experience Node */}
          <div className="relative flex justify-start">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-2xl font-semibold text-[#4682A9] flex items-center justify-end gap-2">
                <Briefcase className="text-[#4682A9]" /> Experience
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                <span className="font-bold">Miraki Technologies Pvt Ltd</span>, Hyderabad <br />
                <span className="text-gray-500">Full Stack Intern | Jan 2025 – May 2025</span>
              </p>
              <ul className="text-sm text-gray-700 mt-2 leading-relaxed">
                <li>• Built client modules using <span className="font-semibold">React, Node.js, Express, MongoDB</span>.</li>
                <li>• Integrated real-time <span className="font-semibold">Instagram API</span> for live metrics.</li>
                <li>• Owned end-to-end delivery on tight deadlines.</li>
              </ul>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#4682A9] w-6 h-6 rounded-full border-4 border-white shadow-lg"></div>
          </div>

          {/* Education Node */}
          <div className="relative flex justify-end">
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-2xl font-semibold text-[#F9A826] flex items-center gap-2">
                <GraduationCap className="text-[#F9A826]" /> Education
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                <span className="font-bold">SR University, Warangal</span> <br />
                <span className="text-gray-500">B.Tech CSE (AIML) | CGPA: 8.76</span>
              </p>
              <p className="mt-3 text-sm text-gray-700">
                <span className="font-bold">Sri Chaitanya Junior College</span> | Score: 922/1000
              </p>
              <p className="mt-1 text-sm text-gray-700">
                <span className="font-bold">Tejaswi High School</span> | CGPA: 10/10
              </p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#F9A826] w-6 h-6 rounded-full border-4 border-white shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
