import React from 'react'
import HeadingCart from './HeadingCart'
import Flex from "./Flex"
import Section from './Section'
import Container from './Container'
import Button from "./Button"

import AsaduzzamanRahim from "../assets/Asaduzzaman Rahim Formal Photo 01.png"
import { FaCloudDownloadAlt } from "react-icons/fa";


const AboutSection = () => {
  return (
    <>
    <Section>
        <Container>
            <div>
            {/* Section Heading Part Start  */}
                <HeadingCart 
                heading="About"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
                />
            </div>    
            {/* Section Heading Part End  */}     

            {/* About Section Part Start  */}
                <Flex className=" flex-wrap justify-center items-center  gap-y-[30px] gap-x-[10px] pt-[40px] pb-[100px]">
            {/* About Photo Section Start  */}
                    <div className='h-auto w-100 p-4 bg-FourColor hover:bg-FiveColor rounded-2xl flex justify-center items-center transition-all duration-900'>
                        <img className='rounded-xl' src={AsaduzzamanRahim} alt="Asaduzzaman Rahim Formal Photo" />
                    </div>
            {/* About Photo Section End  */}

            {/* About Content Section Start  */}
                    <div className='max-w-[630px] mx-auto '>
                        <p className="text-xl text-center lg:text-left px-2 text-white leading-[35px] ">I'm Asaduzzaman Rahim, a passionte <b>Fronted Developer</b> specialzing in React.js and modern UI design. <br /> I build responsive, high-performance website and web applications that not only look grest but alsodeliver real business results. My focus is on clean code, user-friendly interfaces and scalable architecture. <br /> I have experience developing e-commerce platforms and dynamic web applications using React.js, Tailwind CSS and Firebase <br /> I believe in continuous learning and always strive to improve my skills to create better digital experiences. <br /><br /><i>"Let's build something impactful together."</i> </p>
                        <Button className="mt-[40px] flex items-center  gap-[10px]"> <FaCloudDownloadAlt /> Download CV</Button>
                    </div>
            {/* About Content Section End  */}
                </Flex>
            {/* About Section Part End  */}
        </Container>    
    </Section>  
    </>
  )
}

export default AboutSection
