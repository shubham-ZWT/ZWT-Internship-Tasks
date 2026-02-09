import React from "react";
import HomeHero from "../components/home/HomeHero";
import AboutMe from "../components/home/AboutMe";
import Testimonials from "../components/Testimonials";
import Experties from "../components/Experties";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutMe />
      <Experties />
      <Cards/>
      <Testimonials />
    </>
  );
}
