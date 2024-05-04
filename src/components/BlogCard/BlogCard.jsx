import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import allData from "../../api/api";
import Skeleton from "react-loading-skeleton";
import { Fade } from "react-awesome-reveal";

const BlogCard = ({ isHomePage }) => {
  const { blogList, blogListRequest } = allData();

  useEffect(() => {
    (async () => {
      await blogListRequest();
    })();
  }, []);

  return (
    <div className="blog-card-container container mx-auto mb-10">
      <Fade cascade damping={0.1} duration={1200} direction="bottom">
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogList === null ? (
            <Skeleton count={3} height={"300px"} />
          ) : (
            blogList.slice(0, isHomePage ? 3 : undefined).map((blog, id) => {
              const createdAtDate = new Date(blog.createdAt);
              const formattedDate = `${createdAtDate.getDate()}/${
                createdAtDate.getMonth() + 1
              }/${createdAtDate.getFullYear()}`;

              return (
                <Link to={`/blog/${blog.id}`} key={id}>
                  <div className="blog-card bg-neutral-300 h-full cursor-pointer rounded-md">
                    <div className="overflow-hidden">
                      <img
                        src={blog["image"]}
                        className="w-full lg:h-96 object-cover overflow-hidden  hover:scale-105 duration-300 rounded-t-md"
                        alt="blog-image"
                      />
                    </div>
                    <div className="blog-card-body p-4">
                      <div className="grid grid-cols-2 mb-4">
                        <div>
                          <p className="blog-card-author">
                            Author: <strong>{blog["author"]}</strong>
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="blog-card-date">
                            Date : <strong>{formattedDate}</strong>
                          </p>
                        </div>
                      </div>
                      <h3 className="blog-card-title">{blog["title"]}</h3>
                      <p className="blog-card-text">
                        {blog["shortDes"]}
                      </p>

                      <Link to={`/blog/${blog.id}`}>
                        <button className="blog-card-btn">Read More</button>
                      </Link>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </Fade>
    </div>
  );
};

export default BlogCard;
