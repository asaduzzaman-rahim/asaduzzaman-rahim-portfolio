import React from "react";
import { motion } from "framer-motion";

const SkillSection = () => {
  const Skills = [
    { id: 1, skill: "HTML 5" },
    { id: 2, skill: "CSS 3" },
    { id: 3, skill: "Boostrap 5" },
    { id: 4, skill: "Tailwind CSS" },
    { id: 5, skill: "Javascript ES6" },
    { id: 6, skill: "React js" },
    { id: 7, skill: "Basic Figma" },
    { id: 8, skill: "Wordpress" },
    { id: 9, skill: "HTML 5" },
    { id: 10, skill: "CSS 3" },
    { id: 11, skill: "Boostrap 5" },
    { id: 12, skill: "Tailwind CSS" },
    { id: 13, skill: "Javascript ES6" },
    { id: 14, skill: "React js" },
    { id: 15, skill: "Basic Figma" },
    { id: 16, skill: "Wordpress" },
  ];

  return (
    <>
        <div className="flex gap-2 w-full py-2.5 overflow-hidden">
          <motion.div
            className="flex flex-shrink-0 justify-center gap-2"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {Skills.map((items, id) => {
              return (
                <h5
                  className="p-5 font-semibold bg-bgcart text-orange "
                  key={id}
                >
                  {items.skill}
                </h5>
              );
            })}
          </motion.div>
          <motion.div
            className="flex flex-shrink-0 justify-center gap-2"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {Skills.map((items, id) => {
              return (
                <h5
                  className="p-5 font-semibold bg-bgcart text-orange "
                  key={id}
                >
                  {items.skill}
                </h5>
              );
            })}
          </motion.div>
        </div>
    </>
  );
};

export default SkillSection;
