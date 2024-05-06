import { Link } from "react-router-dom"
import BlogCard from "./BlogCard"

export const BlogComponent = ({ isHomePage }) => {
  const pageTitle = "Blog";

  return (
    <section>
      <div className="container mx-auto mb-20 sm:container">
        <h1 className="text-center text-5xl font-bold mb-10">{pageTitle}</h1>
        <BlogCard isHomePage={isHomePage} />
        <Link to="/blog" className="w-full flex justify-center">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            View All
          </button>
        </Link>
      </div>
    </section>
  );
};
