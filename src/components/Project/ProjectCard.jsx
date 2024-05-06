import { useEffect } from "react";
import allData from "../../api/api";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({ isHomePageProject }) => {
  const { projectList, projectListRequest } = allData();

  useEffect(() => {
    (async () => {
      await projectListRequest();
    })();
  }, []);

  const renderProjectCards = () => {
    return projectList?.slice(0, isHomePageProject ? 3 : undefined).map((project) => {
      const formattedDate = new Date(project.createdAt).toLocaleDateString(
        "en-US"
      );

      return (
        <Link to={`/blog/${project.id}`} key={project.id}>
          <div className="blog-card bg-neutral-300 h-full cursor-pointer rounded-md">
            <div className="overflow-hidden">
              <img
                src={project.image}
                className="w-full lg:h-96 object-cover overflow-hidden hover:scale-105 duration-300 rounded-t-md"
                alt="blog-image"
              />
            </div>
            <div className="blog-card-body p-4">
              <div className="grid grid-cols-2 mb-4">
                <div>
                  <p className="blog-card-author">
                    Author: <strong>{project.author}</strong>
                  </p>
                </div>
                <div className="text-right">
                  <p className="blog-card-date">
                    Date: <strong>{formattedDate}</strong>
                  </p>
                </div>
              </div>
              <h3 className="blog-card-title">{project.title}</h3>
              <p className="blog-card-text">{project.shortDes}</p>
              <Link to={`/blog/${project.id}`}>
                <button className="blog-card-btn">Read More</button>
              </Link>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className="blog-card-container container mx-auto mb-10">
      <Fade cascade damping={0.1} duration={1200} direction="bottom">
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectList === null ? (
            <Skeleton count={3} height={"300px"} />
          ) : (
            renderProjectCards()
          )}
        </div>
      </Fade>
    </div>
  );
};

export default ProjectCard;
