import React from "react";
import ExperienceTimeline from "./ExperienceTimeLine";

export default function ExperienceHero() {
  return (
    <div className="w-full mt-32 md:mt-48 px-6 text-app-dark-bg">
      <div className="max-w-7xl mx-auto flex flex-col text-center items-center gap-6">
        <h1 className="font-bold text-8xl tracking-tighter ">Experience</h1>
        <p className="text-center max-w-4xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          molestiae asperiores rem quam cum laudantium corporis earum? Autem
          possimus nobis ad similique sint tempore nesciunt saepe.
        </p>
        <ExperienceTimeline />
      </div>
    </div>
  );
}
