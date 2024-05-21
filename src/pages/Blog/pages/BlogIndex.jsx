import { Fragment } from "react";
import BlogCards from "../component/BlogCards";

const BlogIndex = () => {
    return (
        <Fragment>
            <div className="mx-11  px-4 py-12 " id="blog-container">

                {/* blog header */}
                <div className="blog-header flex items-baseline justify-between">
                    <h1>Tech  <span> Insights </span> </h1>
                    <p> Latest Trends and Tips in Web Development</p>
                </div>
                {/* blog header end */}

                {/* all card here */}
                <BlogCards/>
                {/* all card here */}

            </div>
        </Fragment>
    );
};

export default BlogIndex;