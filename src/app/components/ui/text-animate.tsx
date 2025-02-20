"use client";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

const rollInVariants = {
  container: {
    hidden: {},
    visible: {},
  },
  child: {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.65,
        ease: [0.65, 0, 0.75, 1],
      },
    },
  },
};

interface Props {
  text: string;
}

const TextAnimate: FC<Props> = ({ text }: Props) => {
  const ref = useRef(null);
  useInView(ref, { once: true });

  return (
    <div className="text-blue-200/80">
      {text.split(" ").map((word, index) => (
        <motion.span
          ref={ref}
          className="inline-block mr-[0.25em] whitespace-nowrap"
          aria-hidden="true"
          key={index}
          initial="hidden"
          animate="visible"
          variants={rollInVariants.container}
          transition={{
            delayChildren: index * 0.13,
            staggerChildren: 0.025,
          }}
        >
          {word.split("").map((character, index) => (
            <motion.span
              aria-hidden="true"
              key={index}
              variants={rollInVariants.child}
              className="inline-block -mr-[0.01em]"
            >
              {character}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </div>
  );
};

export { TextAnimate }; 