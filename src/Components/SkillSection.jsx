import React from 'react'
import {motion} from "framer-motion"


const SkillSection = () => {
    
    const Skills = [
        {id:1 , skill: "HTML 5"},
        {id:2 , skill: "CSS 3"},
        {id:3 , skill: "Boostrap 5"},
        {id:4 , skill: "Tailwind CSS"},
        {id:5 , skill: "Javascript ES6"},
        {id:6 , skill: "React js"},
        {id:7 , skill: "Basic Figma"},
        {id:8 , skill: "Wordpress"},
    ]

  return (
    <>
    <div className='w-full py-2.5 overflow-hidden'>
        <motion.div className='flex justify-center gap-9'
        animate={{x:["0%", "-100%"]}}
        transition={{
            ease:"linear",
            duration:15,
            repeat: Infinity
        }}
        >
            {
                Skills.map((items, id)=>{
                    return(
                        <h5 className='p-5 font-semibold bg-bgcart text-orange '
                        key={id}>{items.skill}</h5>
                    )
                })
            }    
        </motion.div> 
    </div>
    </>
  )
}

export default SkillSection
