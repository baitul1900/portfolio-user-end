import React from "react";
import Layout from "../Layout/Layout";
import HeroComponent from "../components/HomeComponent/HeroComponent";
import AboutMeText from "../components/HomeComponent/AboutMeText";
import ServiceSlider from "../components/sliderComponent/ServiceSlider";
import { BlogComponent } from "../components/BlogCard/blog-component";


const HomePage = () => {
  return (
    <Layout>
      <HeroComponent/>
      <AboutMeText/>
      <ServiceSlider/>
      <BlogComponent isHomePage={true}/>
    </Layout>
  );
};

export default HomePage;
