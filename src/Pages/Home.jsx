import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { useLoaderData } from "react-router";

import { Helmet } from "react-helmet-async";
import Hero from "../Components/Hero";
import BioSection from "../Components/BioSection";
import About from "../Components/About";
import EducationExperience from "../Components/EducationExperience";
import WhatIDo from "../Components/WhatIDo";

function Home() {
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Job House | Home</title>
      </Helmet>
      <Hero></Hero>
      <BioSection></BioSection>
      <About></About>
      <WhatIDo></WhatIDo>
      <EducationExperience></EducationExperience>
      <h1>home</h1>
    </div>
  );
}

export default Home;
