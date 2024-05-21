import Layout from "../Layout/Layout";
import HeroComponent from "../components/HomeComponent/HeroComponent";
import AboutMeText from "../components/HomeComponent/AboutMeText";
import ProjectCard from "../components/Project/ProjectCard";
import { Link } from "react-router-dom";
import { RevealBento } from "../components/Project/RevealBento";
import Main from "../components/opposite Carousel/Main";
import { BouncyCardsFeatures } from "../components/Service Component/BouncyCardsFeatures";
import BlogIndex from "./Blog/pages/BlogIndex";

const HomePage = () => {
  const pageTitleProject = "Projects";
  return (
    <Layout>
      <HeroComponent />
      <AboutMeText />
      <BouncyCardsFeatures />
      <BlogIndex />

      {/* project section is here */}
      <section>
        <div className="container mx-auto mb-20 sm:container">
          <h1 className="text-center text-5xl font-bold mb-10">
            {pageTitleProject}
          </h1>
          <ProjectCard isHomePageProject={true} />
          <Link to="/projects" className="w-full flex justify-center">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              View All
            </button>
          </Link>
        </div>
      </section>
      {/* project section is here end */}
      <Main />



      <RevealBento/>

    </Layout>
  );
};

export default HomePage;
