import React from "react";
import { motion } from "framer-motion";

import FigmaIcon from "../assets/figma.png"
import JavascriptIcon from "../assets/js.png"
import WPIcon from "../assets/wp.png"
import ReactIcon from "../assets/react.png"

const SkillSection = () => {
  const Skills = [
    { id: 1, skill: "HTML 5", Icon: FigmaIcon },
    { id: 2, skill: "CSS 3", Icon:  JavascriptIcon},
    { id: 3, skill: "Boostrap 5", Icon:  WPIcon},
    { id: 4, skill: "Tailwind CSS", Icon:  ReactIcon},
    { id: 5, skill: "Javascript ES6", Icon:  JavascriptIcon},
    { id: 6, skill: "React js", Icon:  ReactIcon},
    { id: 7, skill: "Basic Figma", Icon:  FigmaIcon},
    { id: 8, skill: "Wordpress", Icon:  WPIcon},
    { id: 9, skill: "HTML 5", Icon: FigmaIcon },
    { id: 10, skill: "CSS 3", Icon:  JavascriptIcon},
    { id: 11, skill: "Boostrap 5", Icon:  WPIcon},
    { id: 12, skill: "Tailwind CSS", Icon:  ReactIcon},
    { id: 13, skill: "Javascript ES6", Icon:  JavascriptIcon},
    { id: 14, skill: "React js", Icon:  ReactIcon},
    { id: 15, skill: "Basic Figma", Icon:  FigmaIcon},
    { id: 16, skill: "Wordpress", Icon:  WPIcon},

  ];

  return (
    <>
        <div className="flex gap-4 w-full py-9.5  overflow-hidden">
          <motion.div
            className="flex flex-shrink-0 justify-center gap-4"
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
                <div className="px-2 py-5 h-30 w-30 rounded-xl bg-[#1b1b1b] text-center "  key={id}>
                  <img className=" w-[40%] mx-auto text-bgcart" src={items.Icon} alt="" />
                  <h5 className="pt-3 text-[16px] font-semibold  text-orange " >{items.skill}</h5>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            className="flex flex-shrink-0 justify-center gap-4"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {
            Skills.map((items, id) => {
              return (
                <div className="px-2 py-5 h-30 w-30 rounded-xl bg-[#1b1b1b] text-center "  key={id}>
                  <img className=" w-[40%] mx-auto text-bgcart" src={items.Icon} alt="" />
                  <h5 className="pt-3 text-[16px] font-semibold  text-orange " >{items.skill}</h5>
                </div>
              );
            })
            }
          </motion.div>
        </div>
    </>
  );
};

export default SkillSection;
