import React from "react";
import Layout from "../Layout/Layout";
import HeroComponent from "../components/HomeComponent/HeroComponent";
import AboutMeText from "../components/HomeComponent/AboutMeText";


const HomePage = () => {
  return (
    <Layout>
      <HeroComponent/>
      <AboutMeText/>
    </Layout>
  );
};

export default HomePage;
