
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
 // Assuming MenuItem is a default export

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = () => (
  <motion.ul variants={variants} className="z-20">
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];

export default Navigation;
