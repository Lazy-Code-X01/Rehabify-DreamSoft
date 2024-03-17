import React from "react";

import FeaturesBig from "components/FeatureImages";
import FeaturesGrid from "components/FeatureGrid";
import Hero from "components/Hero";
import LogoCloud from "components/LogoCloud";
import Licensed from "components/Licensed";
import Faq from "components/Faq";

function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <FeaturesBig />
      <FeaturesGrid />
      <Licensed />
      <Faq />
    </>
  );
}

export default Home;
