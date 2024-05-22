import Layout from "../Layout/Layout";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard/BlogCard";

const BlogListingPage = () => {
  return (
    <Layout>
      <section className="ServiceList-section mt-32 mb-60">
        <div className="container  mx-auto h-[400px] bg-indigo-600 flex flex-col items-center justify-center">
          <Fade direction="fade" delay={200} cascade duration={1000}>
            <h1 className="lg:text-9xl md:text-9xl sm:text-4x1 text-slate-50  font-bold">
              Blog List
            </h1>
          </Fade>
          <div className="text-sm breadcrumbs mt-4">
            <ul className="lg:text-sm md:text-5xl sm:text-sm text-slate-50 font-bold">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/blog-list"}>Blog List</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto bg-slate-950 mt-52  py-16 rounded-3xl px-10">
          <h3 className="lg:text-7xl font-bold text-gray-50 border-b-2 border-indigo-300 pb-4">
            <Fade direction="down" cascade duration={1000} damping={0.5}>
            My Blog
            </Fade>
          </h3>

           <Fade direction="fade" cascade duration={1000} damping={0.5}>
          <BlogCard />
            </Fade> 
        </div>
      </section>
    </Layout>
  );
};

export default BlogListingPage;
