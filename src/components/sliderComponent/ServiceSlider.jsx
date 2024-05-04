import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import allData from "../../api/api";
import { motion } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const ServiceSlider = () => {
  const splideOptions = {
    gap: "0.1rem",
    height: "100%",
    rewind: true,
    perPage: 3,
    perMove: 1,
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      1024: {
        perPage: 3,
      },
    },
  };

  const { serviceList, serviceRequestList } = allData();

  useEffect(() => {
    serviceRequestList();
  }, []);

  const [transforms, setTransforms] = useState([]);

  useEffect(() => {
    // Update transforms array when serviceList changes
    setTransforms(new Array(serviceList.length).fill({ x: 0, y: 0 }));
  }, [serviceList]);

  const handleMouseMove = (index, e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    setTransforms((prevTransforms) => {
      const newTransforms = [...prevTransforms];
      newTransforms[index] = {
        x: rX,
        y: rY,
      };
      return newTransforms;
    });
  };

  const handleMouseLeave = (index) => {
    setTransforms((prevTransforms) => {
      const newTransforms = [...prevTransforms];
      newTransforms[index] = {
        x: 0,
        y: 0,
      };
      return newTransforms;
    });
  };

  return (
    <div className="container mx-auto mt-10 mb-10">
      <Fade cascade direction="slide" duration={1200}>
        <Splide options={splideOptions} aria-label="My Favorite Images">
          {serviceList.map((servicedata, i) => {
            const { x, y } = transforms[i] || { x: 0, y: 0 }; // Handle undefined case
            return (
              <SplideSlide key={i}>
                <div className="grid w-full place-content-center bg-gradient-to-br  px-4 py-12 text-slate-900">
                  <motion.div
                    onMouseMove={(e) => handleMouseMove(i, e)}
                    onMouseLeave={() => handleMouseLeave(i)}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateX(${x}deg) rotateY(${y}deg)`,
                    }}
                    className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
                  >
                    <Link to={'/about'}>
                      <div
                        style={{
                          transform: "translateZ(75px)",
                          transformStyle: "preserve-3d",
                        }}
                        className="absolute inset-4 grid place-content-center rounded-xl  "
                      >
                        <FiMousePointer
                          style={{
                            transform: "translateZ(75px)",
                          }}
                          className="mx-auto text-4xl"
                        />
                        <p
                          style={{
                            transform: "translateZ(50px)",
                          }}
                          className="text-center text-2xl font-bold"
                        >
                          {servicedata.serviceName}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </Fade>
    </div>
  );
};

export default ServiceSlider;
