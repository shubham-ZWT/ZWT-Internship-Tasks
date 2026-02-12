import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function Card({ projectName, projectDes }) {
  return (
    <div className="flex flex-row">
      {/* image div */}
      <div>
        <h2 className="text-7xl">Porject UI Image</h2>
      </div>

      {/* content */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <h2 className="text-5xl ">{projectName}</h2>
          <div className="flex cursor-pointer group">
            <p className="text-lg">Github</p>
            <span className="text-2xl group hover:translate">
              <FiArrowUpRight />
            </span>
          </div>
        </div>
        <p>{projectDes}</p>

        {/* stack used */}
        <div></div>
      </div>
    </div>
  );
}
