import React from 'react'
import Flex from "./Flex"

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";



const SocialIconSection = ({className}) => {

    const Icon = [
          {id: 1, icon: <FaFacebookSquare />, link: "https://www.facebook.com/rahim.asaduzzaman"},
          {id: 2, icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rahimasaduzzaman/"},
          {id: 3, icon: <FaGithub />, link: "https://www.github.com/asaduzzaman-rahim"},
          {id: 4, icon: <FaSquareInstagram />, link: "https://www.instagram.com/asaduzzaman_rahim_"},
          {id: 5, icon:  <SiGmail />, link: "mailto:rahim.asaduzzaman@gmail.com"}                         
    ]

  return (
    <>
      <Flex className={`${className}   gap-6`}>
        {Icon.map((items) => {
            return (
            <button
                className="text-white transition-all duration-300 text-2xl h-8 w-8 p-1 rounded-[10px] border-1 border-white cursor-pointer flex items-center justify-center hover:bg-primary hover:border-primary "
                onClick={() => window.open(items.link, "_blank")}
                key={items.id} > {items.icon} </button>
            );
        })}
        </Flex> 
    </>
  )
}

export default SocialIconSection
