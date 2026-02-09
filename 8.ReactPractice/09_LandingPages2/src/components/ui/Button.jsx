import React from "react";

export default function Button({ name, icon }) {
  return (
    <button className="group border px-3 py-1 rounded-full flex justify-between items-center gap-2 cursor-pointer">
      {name}
      <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">
        {icon}
      </span>
    </button>
  );
}
