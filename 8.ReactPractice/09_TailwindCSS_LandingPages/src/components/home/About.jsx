import React from "react";
import { GiWindow } from "react-icons/gi";
export default function About() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-16 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          <div className="col-span-1">
            <p className="text-sm uppercase tracking-widest font-semibold bg-gray-200 p-2 rounded-2xl w-fit text-gray-600">
              About Horizon
            </p>
          </div>

          <div className="md:col-span-2 ">
            <p className="text-lg md:text-xl text-gray-800 leading-normal">
              Horizon Courts was founded on a simple belief: that tennis should
              be accessible, social, and played at the highest standard. Our
              facility serves as a premier destination for athletes of all ages,
              blending state-of-the-art infrastructure with a welcoming
              atmosphere. Whether you are here for a competitive league or a
              casual weekend set, we ensure every match feels like a grand slam
              experience.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 py-8">
          <div className="cols-span-1 bg-[#0d1b2d] text-white flex flex-col p-4 rounded-2xl gap-3">
            <div className="text-3xl">
              <GiWindow />
            </div>
            <div>
              <p className="font-thin opacity-90">
                At Horizon, we believe progress is a journey, not a destination.
                <span className="text-gray-400">
                  Our holistic approach to training focuses on technical
                  precision, mental agility, and physical endurance.
                </span>{" "}
                We don't just teach you how to hit a ball; we teach you how to
                master the court.
              </p>
            </div>
          </div>

          <div className="col-span-1">
            {" "}
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/about/about1.jpg"
                alt="About Horizon"
                className="w-full h-64 object-cover"
              />

              <div className="absolute bottom-4 left-4 text-white z-10">
                <p className="text-lg  drop-shadow-md">Make your own move</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          <div className="cols-span-1 bg-[#f7f9fd] flex flex-col p-4 rounded-2xl gap-3">
            <div>
              <h4 className="text-5xl text-black opacity-80">100+</h4>
              <p>Certified Coaches & Trainers</p>
            </div>
            <div>
              <p>
                Our programs are designed to foster growth at every level. We
                take pride in building a vibrant ecosystem where seasoned pros
                mentor rising stars, ensuring the legacy of the sport continues
                to thrive within our walls.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-16 px-5 ">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl  text-[#0c192a]">
              A few more facts about us in numbers
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 w-full max-w-7xl">
            <div className="flex flex-col items-center text-center">
              <h4 className="text-4xl md:text-5xl ">12,000+</h4>
              <p className="text-gray-600 mt-2 font-medium uppercase tracking-wide text-sm">
                Hours of play annually
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <h4 className="text-4xl md:text-5xl">89%</h4>
              <p className="text-gray-600 mt-2 font-medium uppercase tracking-wide text-sm">
                Player Retention Rate
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <h4 className="text-4xl md:text-5xl">1,200+</h4>
              <p className="text-gray-600 mt-2 font-medium uppercase tracking-wide text-sm">
                Active Members
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <h4 className="text-4xl md:text-5xl">125+</h4>
              <p className="text-gray-600 mt-2 font-medium uppercase tracking-wide text-sm">
                Annual Tournaments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
