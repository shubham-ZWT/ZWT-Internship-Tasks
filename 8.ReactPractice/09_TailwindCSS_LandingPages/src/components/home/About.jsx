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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto ipsum reiciendis facere maxime neque unde perspiciatis
              eius recusandae asperiores vero hic consequuntur illum iste
              adipisci, voluptas eaque sint, quae quod reprehenderit repudiandae
              doloribus expedita. Distinctio, eveniet?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                <span className="text-gray-400">
                  {" "}
                  dolorum nesciunt eaque repellat sunt at id voluptatum velit?
                  Quae consequatur optio in nobis assumenda vitae
                </span>{" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                voluptate quisquam nemo fugiat rem dolores. Debitis neque ut
                quia. Minima reiciendis perspiciatis quibusdam dolorem quas,
                nemo cupiditate ab repellendus reprehenderit!
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
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                voluptates amet vitae molestiae illo quidem quo quae alias
                consequatur inventore.as
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <p>Begineer</p>
                <p>Intermediate</p>
                <p>Advance</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
