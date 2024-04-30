import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const AboutMeText = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-text span");

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "900";
        this.style.color = "rgb(34, 41, 56)"; // Darker color

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "rgb(42, 50, 67)"; // Darker color
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "rgb(42, 50, 67)"; // Darker color
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "100";
        this.style.color = "rgb(21, 26, 36)"; // Even darker color

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "100";
          leftNeighbor.style.color = "rgb(21, 26, 36)"; // Even darker color
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "100";
          rightNeighbor.style.color = "rgb(21, 26, 36)"; // Even darker color
        }
      });
    });
  }, []);

  return (
    <div className="container mx-auto my-32">
      <Fade direction="side" cascade duration={1000}>
      <div className="grid place-content-center ">
        <h2 className="hover-text text-center  font-thin text-dark-300">
          <Text>
            As a dynamic front-end developer, I thrive on crafting captivating
            user experiences that seamlessly blend creativity with
            functionality. With a keen eye for design and a passion for clean,
            efficient code, I bring energy and innovation to every project I
            undertake. Beyond front-end development, I delve into the world of
            back-end technologies, leveraging Node.js, Express, and MongoDB to
            build robust, scalable solutions. My dedication to mastering both
            front-end and back-end realms allows me to deliver comprehensive
            solutions that exceed expectations. Whether I'm architecting
            intuitive user interfaces or optimizing database performance, I
            approach each task with enthusiasm and a commitment to excellence.
            With a strong foundation in web development principles, I
            continuously seek opportunities to expand my skill set and stay at
            the forefront of industry trends. As a collaborative team member, I
            thrive in environments that foster creativity, communication, and
            growth. With a blend of technical expertise and a passion for
            innovation, I'm ready to tackle any challenge and elevate digital
            experiences to new heights.
          </Text>
        </h2>
      </div>
      </Fade>
    </div>
  );
};

const Text = ({ children }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          className="hover-text"
          style={{
            transition: "0.35s font-weight, 0.35s color",
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export default AboutMeText;
