import { useParams } from "react-router-dom";
import allData from "../api/api";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Layout from "../Layout/Layout";
import { formatDate } from "../utility/utility";

const BlogDetailsPage = () => {
    let {id} = useParams();

    const { blogDetails, blogById } = allData();

    useEffect(() => {
        (async () => {
            await blogById(id);
        })();
    }, [id, blogById]);


    console.log(blogDetails)


    if (!blogById || blogById["status"] === "success") {
        return <Skeleton count={10} height={400} />;
    }


    return (
        <Layout>


            <div className="container mx-auto mt-32">
                <div className="BlogDetails_div pt-10 pb-10">
                      <p>{ formatDate(blogDetails["createdAt"])}</p>  
                      <h5 className="mb-5 text-2xl font-semibold"> { blogDetails["shortDes"]}</h5>
                     <img src={blogDetails["image"]} className="w-full h-[500px] object-cover rounded-box" alt="img" />

                     <article className="all-details mt-6">
                          <h2 className="text-3xl">{blogDetails["title"]}</h2>  
                          <p dangerouslySetInnerHTML={{__html: blogDetails["des"]}}></p>  
                     </article>
                </div>
            </div>


        </Layout>
    );
};

export default BlogDetailsPage;