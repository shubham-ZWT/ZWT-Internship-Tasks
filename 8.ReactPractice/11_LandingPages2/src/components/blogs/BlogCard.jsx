import React from "react";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BlogCard({ title, excerpt, date, slug }) {
  return (
    <div className="flex flex-col border p-6 gap-4">
      <div className="border-b">
        <h2>Blog Image here</h2>
      </div>

      <div>
        <h3 className="text-xl text-left">{title}</h3>
        <p className="text-justify">{excerpt}</p>
      </div>

      <Link to={`/blogs/${slug}`}>
        <Button name={"Read More"} icon={<FaArrowRight />} />
      </Link>

      <p className="text-left">Published Date : {date}</p>
    </div>
  );
}
