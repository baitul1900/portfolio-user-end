import React from "react";
import profileImage from "../../assets/image/Antu-removebg.png";
import { ReactTyped } from "react-typed";
import { Fade } from "react-awesome-reveal";
import ButtonEncrypted from "../EncryptedButton/ButtonEncrypted";
import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <section
  className="mt-28"
  
>
  <div className="container mx-auto">
    <div className="my-intro-text">
      <h1>Hello</h1>
      <h1>I'm Antu</h1>
      <p className="mt-6">
        Crafting immersive digital experiences with the MERN stack 🚀, I leverage{" "}
        <span className="bg-yellow-400">
          <ReactTyped
            strings={[
              "MongoDB",
              "Express.js",
              "React.js",
              "Node.js",
              "HTML",
              "CSS",
              "JavaScript",
              "Tailwind CSS",
              "Framer Motion",
              "Git",
              "GitHub",
              "VS Code",
              "Netlify",
              "Heroku",
              "More on...",
            ]}
            loop={true}
            typeSpeed={100}
            backSpeed={50}
          />
        </span>{" "}
        to bring dynamic web applications to life.
      </p>

      {/* contact button here */}
      <ButtonEncrypted />
      {/* contact button here end */}
    </div>
  </div>
</section>
  );
};

export default HeroComponent;
