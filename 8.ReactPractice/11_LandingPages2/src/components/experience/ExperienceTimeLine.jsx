import React from "react";

const experiences = [
  {
    company: "ZealousWeb Technologies Pvt Ltd",
    role: "Full Stack Developer",
    period: "2022 - Present",
    desc: "Leading the frontend team and architectural decisions.",
  },
  {
    company: "Optimence",
    role: "Gen AI and Full Stack Developer",
    period: "2020 - 2022",
    desc: "Developed high-performance web applications using React and Node.js.",
  },
  {
    company: "MS Projects",
    role: "Web Developer Trainee",
    period: "2018 - 2020",
    desc: "Assisted in building MVP features and debugging core services.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <div className="relative">
        <div className="absolute right-3 md:right-0 top-0 h-full w-[1px] bg-gray-300"></div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex justify-end items-center w-full"
            >
              <div className="w-[calc(100%-3rem)] md:w-[90%] mr-12 p-8 bg-[#f8f8f8] rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group relative">
                <div className="absolute top-1/2 -right-12 w-12 h-[1px] bg-gray-300 hidden md:block"></div>

                <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-bold mt-2 text-app-dark-bg">
                  {exp.role}
                </h3>
                <h4 className="text-lg font-medium text-gray-600 mb-4">
                  {exp.company}
                </h4>
                <p className="text-base text-gray-500 leading-relaxed">
                  {exp.desc}
                </p>
              </div>

              <div className="absolute right-0 translate-x-1/2 z-20 flex items-center justify-center w-6 h-6 bg-white border-2 border-app-dark-bg rounded-full group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 bg-app-dark-bg rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
