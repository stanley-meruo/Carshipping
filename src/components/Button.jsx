
import { motion } from "framer-motion";


const Button = ({ title, type, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <button type={type} className={props.className}>
        {title}
      </button>
    </motion.div>
  );
};

export default Button;


