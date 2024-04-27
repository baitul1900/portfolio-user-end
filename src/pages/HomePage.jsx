import React from "react";
import Layout from "../Layout/Layout";
import HeroComponent from "../components/HomeComponent/HeroComponent";
import AboutMeText from "../components/HomeComponent/AboutMeText";
import ServiceSlider from "../components/sliderComponent/ServiceSlider";


const HomePage = () => {
  return (
    <Layout>
      <HeroComponent/>
      <AboutMeText/>
      <ServiceSlider/>
    </Layout>
  );
};

export default HomePage;
