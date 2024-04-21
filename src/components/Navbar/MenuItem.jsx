import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 10, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const MenuItem = () => {
  const links = [
    { path: "/blog", text: "Blog",  },
    { path: "/projects", text: "Projects",  },
    { path: "/services", text: "Services", }
  ];

  return (
    <motion.ul>
      {links.map((link, index) => (
        <motion.li
          key={index}
          variants={variants}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={link.path} className="flex items-center justify-between nav-links-all">
            <div className="icon-placeholder"  />
            <div className="text-placeholder" >
              {link.text}
            </div>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MenuItem;
