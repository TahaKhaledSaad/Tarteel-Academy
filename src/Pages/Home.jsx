import React from "react";
import LandingPage from "./LandingPage";
import Courses from "./Courses";
import About from "./About";
import WhyChoosing from "./WhyChoosing";

function Home() {
  return (
    <div>
      <LandingPage />
      <Courses />
      <About />
      <WhyChoosing />
    </div>
  );
}

export default Home;
