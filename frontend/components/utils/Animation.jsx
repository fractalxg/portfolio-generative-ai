import { motion } from "framer-motion";

export const Rotate = ({ children }) => {
  return (
    <motion.div
      variants={{
        hover: { rotate: 45 },
      }}
      whileHover="hover"
      transition={{ duration: 0.3 }}
      style={{ transformOrigin: "center" }}
    >
      {children}
    </motion.div>
  );
};
