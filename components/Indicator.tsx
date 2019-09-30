import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";

interface Props {
  animate: boolean;
}

const Indicator: React.FC<Props> = ({ animate }) => {
  const { scrollY } = useViewportScroll();
  const input = [0, 2000];
  const output = [1, 0];
  const opacity = useTransform(scrollY, input, output);
  return (
    <>
      <motion.div
        style={{
          background: "red",
          position: "fixed",
          padding: "1rem",
          bottom: 0,
          left: 0,
          zIndex: 2,
          opacity: animate ? opacity : undefined
        }}
      >
        Indicator
      </motion.div>
    </>
  );
};

export default Indicator;
