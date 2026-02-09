import React from "react";
import TestimonialCard from "./ui/TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      clientName: "Yash Patel",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nemo debitis corrupti architecto, earum modi nostrum delectus, velit ",
    },
    {
      clientName: "Meet Thakkar",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nemo debitis corrupti architecto, earum modi nostrum delectus, velit ",
    },
    {
      clientName: "Meet Thakkar",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nemo debitis corrupti architecto, earum modi nostrum delectus, velit ",
    },
  ];

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 text-[#212121]">
       
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center md:text-center ">
          What they say{" "}
          <span className="font-source font-normal italic">About me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((test, index) => (
            <TestimonialCard
              key={index}
              clientName={test.clientName}
              review={test.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
