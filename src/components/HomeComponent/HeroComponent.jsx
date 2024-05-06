import { ReactTyped } from "react-typed";
import ButtonEncrypted from "../EncryptedButton/ButtonEncrypted";
import { Fade } from "react-awesome-reveal";

const HeroComponent = () => {
  const skills = [
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
    "More on..."
  ].filter(Boolean);

  return (
    <section className="mt-28">
      <div className="container mx-auto">
        <div className="my-intro-text">
          <Fade direction="down" cascade duration={1000}>
            <h1>Hello</h1>
            <h1>I'm Antu</h1>
            <p className="mt-6">
              Crafting immersive digital experiences with the MERN stack 🚀, I leverage{" "}
              <span className="bg-yellow-400">
                <ReactTyped
                  strings={skills}
                  loop={true}
                  typeSpeed={100}
                  backSpeed={50}
                />
              </span>{" "}
              to bring dynamic web applications to life.
            </p>
          </Fade>

          <ButtonEncrypted />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
