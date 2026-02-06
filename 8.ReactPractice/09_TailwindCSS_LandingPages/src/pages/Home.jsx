import React from "react";
import HeroHome from "../components/home/HeroHome";
import About from "../components/home/About";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <HeroHome />
      </section>
      <section className="about-horizon">
        <About />
      </section>
    </>
  );
}
