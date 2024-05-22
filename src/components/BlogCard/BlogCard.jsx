import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { formatDate, turncateText } from "../../utility/utility";
import { FiPlus } from "react-icons/fi";
import allData from "../../api/api";

const BlogCard = () => {
  const { blog, totalPages, currentPage, fetchBlog } = allData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await fetchBlog();
      setLoading(false);
    })();
  }, [fetchBlog, currentPage]);

  const handlePageChange = async (page) => {
    setLoading(true);
    await fetchBlog(page);
    setLoading(false);
  };

  if (loading) {
    return (
      <div>
        <Skeleton count={10} height={400} />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1  gap-6 mt-12">
        {blog.map((blog, i) => {
          return (
            <div key={i}>
              <div className="Blog_cards">
                <img
                  src={blog.image}
                  alt="image"
                  className="w-full BlogCardImages"
                />
                <div className="BlogDetailsButton">
                  <Link to={`blog-details/${blog["_id"]}`}>
                    <div className="rounded-full bg-indigo-400 text-center Blog_details_button shadow-lg shadow-indigo-500/50">
                      <FiPlus size={40} className="p-2 text-lime-50" />
                    </div>
                  </Link>
                </div>

                <div className="BlogCardDetails">
                  <div className="flex justify-between items-baseline mt-4">
                    <div className="BlogCardAuthor bg-stone-600 opacity-80 rounded-full  p-4">
                      <p className="authorName">{blog["author"]}</p>
                    </div>

                    <div>
                      <p className="text-gray-300">
                        {formatDate(blog["createdAt"])}
                      </p>
                    </div>
                  </div>

                  <h4 className="mt-5">{turncateText(blog.title, 20)}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="join mt-32 flex flex-col items-center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <input
            key={page}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label={` ${page}`}
            checked={page === currentPage}
            onChange={() => handlePageChange(page)}
          />
        ))}
      </div>
    </>
  );
};

export default BlogCard;
