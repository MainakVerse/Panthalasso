"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import dj from "../../../public/dj.png";

export function BentoGridThirdDemo() {
  return (
    <section className="relative bg-black overflow-hidden py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0c4a6e0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[40rem] w-[40rem] bg-blue-600/20 rounded-full blur-[128px]" />
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Updated heading section */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
            Supercharge Your Telegram Presence
          </h2>
          <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
            Transform your ideas into powerful AI-driven bots with our cutting-edge platform
          </p>
        </div>

        {/* Bento grid */}
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-blue-400/[0.2] p-2  items-center space-x-2 bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex-shrink-0" />
        <div className="w-full h-4 rounded-full bg-blue-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-blue-400/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-black"
      >
        <div className="w-full  h-4 rounded-full bg-blue-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-blue-400/[0.2] p-2 items-center space-x-2 bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex-shrink-0" />
        <div className="w-full  h-4 rounded-full bg-blue-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-blue-400/[0.2] p-2  items-center space-x-2 bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const _variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <Image alt="Smart" width={2000} height={120} src={dj}/>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl p-4 dark:bg-black border-blue-400/[0.2] border  flex flex-col items-center justify-center"
      >
        <Image
          src="https://plus.unsplash.com/premium_photo-1678937608953-f4821e42dcdb?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 "
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-blue-500 mt-4">
          Business Analytics
        </p>
        <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Beginner
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl p-4 bg-black border border-blue-400/[0.3]  flex flex-col items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3432&auto=format&fit=crop"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-blue-500 mt-4">
          Data Pipelines
        </p>
        <p className="border border-blue-500 bg-blue-600 dark:bg-blue-900/20 text-white text-xs rounded-full px-2 py-0.5 mt-4">
          Pro
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl p-4 bg-black border-blue-400/[0.2] border  flex flex-col items-center justify-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1542185400-f1c993ecbea2?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-blue-500 mt-4">
          Enterprise Chatbot Solution
        </p>
        <p className="border border-blue-500 bg-blue-800 dark:bg-blue-900/20 text-white text-xs rounded-full px-2 py-0.5 mt-4">
          Elite
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-blue-400/[0.2] p-2  items-start space-x-2 bg-black"
      >
        <Image
          src="https://plus.unsplash.com/premium_photo-1678937610952-94d467ca3b02?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-blue-400">
          We build powerful business data analytics dashboards to enhance your business needs...
        </p>
      </motion.div>
      
    </motion.div>
  );
};
const items = [
  {
    title: "AI Driven Analytics",
    description: (
      <span className="text-sm">
        Integrate powerful Analytics capabilities into your Website.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Data Optimization",
    description: (
      <span className="text-sm">
        Set up intelligent optimization rules which reduces bottleneck.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Engineered Prompts",
    description: (
      <span className="text-sm">
        Create context-aware prompts using state-of-the-art prompt engineering.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "User Analytics",
    description: (
      <span className="text-sm">
        Track and analyze your page&apos;s performance and user interactions.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Multi-language Support",
    description: (
      <span className="text-sm">
        Deploy your chatbot in multiple languages with AI translation.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-blue-500" />,
  },
];
