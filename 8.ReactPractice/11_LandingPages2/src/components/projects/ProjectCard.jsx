import React from "react";
import Card from "./Card";

export default function ProjectCard() {
  const projects = [
    {
      title: "Meet Recall",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odit nihil blanditiis, mollitia eaque voluptatum saepe, doloremque, cumque unde reprehenderit laudantium ex vel quidem! Repellat perferendis consectetur voluptates possimus alias.",
    },
    {
      title: "Study Flash Cards",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odit nihil blanditiis, mollitia eaque voluptatum saepe, doloremque, cumque unde reprehenderit laudantium ex vel quidem! Repellat perferendis consectetur voluptates possimus alias.",
    },
    {
      title: "AI Powered Support System",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odit nihil blanditiis, mollitia eaque voluptatum saepe, doloremque, cumque unde reprehenderit laudantium ex vel quidem! Repellat perferendis consectetur voluptates possimus alias.",
    },
  ];
  return (
    <div className="w-full px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {projects.map((project) => (
          <Card projectName={project.title} projectDes={project.description} />
        ))}
      </div>
    </div>
  );
}
