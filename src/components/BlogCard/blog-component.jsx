import { Link } from "react-router-dom"
import BlogCard from "./BlogCard"

export const BlogComponent = ({isHomePage}) => {

    return (
        <section>
            <div className="container mx-auto mb-20 sm:container">
                <h1 className="text-center text-5xl font-bold mb-10">Blog</h1>
                <BlogCard isHomePage={isHomePage}/>
                
            {/* blog page link*/}
            <Link 
                to="/blog"
                className="w-full flex justify-center"
            >
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Sell All</button>
            </Link>
            {/* blog page link*/}
            </div>

            
        </section>
    )

}