import { useEffect } from "react";
import allData from "../../../api/api";
import Skeleton from "react-loading-skeleton";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { formatDate, turncateText } from "../../../utility/utility";

const BlogCards = () => {
  const { blogList, blogListRequest } = allData();

  useEffect(() => {
    (async () => {
      await blogListRequest();
    })();
  }, []);

  if (!blogList || blogList["status"] === "success") {
    return <Skeleton count={5} height={400} />;
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1  gap-6 mt-12">
      <div className="col-span-2 ">
        <div className="w-full">
          <div className="w-full">
            <div className="card" id="BlogCardHeader">
              <img
                src="https://ucarecdn.com/46a8390f-c5ea-4695-95ae-2d58fab42ad3/bloglineimage.jpg"
                className="bento-image w-full rounded-lg"
                alt="img"
              />

              <div className="cbody">
                <div className="feature-title-wrapper">
                  <div className="feature-center-title flex ">
                    <h1 className="mb-0 py-1 pr-3 BlogHeadSub">Innovate and</h1>
                    <img
                      src="https://ucarecdn.com/eedac098-3cee-4aad-a518-fab0a56877d5/656c4d42ccb09777eb6fd5d3_Curve.png"
                      className="curve w-8"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="feature-title-wrapper">
                  <div className="feature-center-title flex ">
                    <h1 className="mb-0 py-2 pr-3 BlogHeadSub">Inspire</h1>
                    <img
                      src="https://ucarecdn.com/eedac098-3cee-4aad-a518-fab0a56877d5/656c4d42ccb09777eb6fd5d3_Curve.png"
                      className="curve w-8"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="feature-title-wrapper">
                  <div className="feature-center-title flex">
                    <img
                      src="https://ucarecdn.com/eedac098-3cee-4aad-a518-fab0a56877d5/656c4d42ccb09777eb6fd5d3_Curve.png"
                      className="curve w-8"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {blogList.slice(0, 4).map((blog, i) => {
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
  );
};

export default BlogCards;
