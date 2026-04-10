import React from "react";
import { motion } from "framer-motion";

import FigmaIcon from "../assets/figma.png"
import JavascriptIcon from "../assets/js.png"
import WPIcon from "../assets/wp.png"
import ReactIcon from "../assets/react.png"
import Html from "../assets/Icon Photo/Html.png"
import CSS from "../assets/Icon Photo/CSS.png"
import Bootstrap from "../assets/Icon Photo/Boostrap 5.png"
import TailwindCSS from "../assets/Icon Photo/Tailwind CSS photo.png"

const SkillSection = () => {
  const Skills = [
    { id: 1, skill: "HTML 5", Icon: Html },
    { id: 2, skill: "CSS 3", Icon:  CSS},
    { id: 3, skill: "Boostrap 5", Icon:  Bootstrap},
    { id: 4, skill: "TailwindCSS", Icon:  TailwindCSS},
    { id: 5, skill: "Javascript", Icon:  JavascriptIcon},
    { id: 6, skill: "React js", Icon:  ReactIcon},
    { id: 7, skill: "Basic Figma", Icon:  FigmaIcon},
    { id: 8, skill: "Wordpress", Icon:  WPIcon},
    { id: 9, skill: "HTML 5", Icon: Html },
    { id: 10, skill: "CSS 3", Icon:  CSS},
    { id: 11, skill: "Boostrap 5", Icon:  Bootstrap},
    { id: 12, skill: "TailwindCSS", Icon:  TailwindCSS},
    { id: 13, skill: "Javascript", Icon:  JavascriptIcon},
    { id: 14, skill: "React js", Icon:  ReactIcon},
    { id: 15, skill: "Basic Figma", Icon:  FigmaIcon},
    { id: 16, skill: "Wordpress", Icon:  WPIcon},

  ];

  return (
    <>
        <div className="flex gap-7 w-full mt-5 bg-FourColor overflow-hidden transform rotate-[-5deg] !z-100">
          <motion.div
            className="flex flex-shrink-0 justify-center gap-7"
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
                <div className=" flex items-center gap-3 py-5  text-center "  key={id}>
                  <img className=" w-[40px] mx-auto " src={items.Icon} alt="" />
                  <h5 className="text-xl font-semibold  text-white " >{items.skill}</h5>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            className="flex flex-shrink-0 justify-center gap-7"
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
                <div className=" flex items-center gap-3 py-5 text-center "  key={id}>
                  <img className=" w-[40px] mx-auto " src={items.Icon} alt="" />
                  <h5 className="text-xl font-semibold  text-white " >{items.skill}</h5>
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
