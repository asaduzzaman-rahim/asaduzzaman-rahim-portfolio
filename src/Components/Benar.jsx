import React from 'react'
// import { motion } from "motion/react"

import Container from './Container'
import Flex from './Flex'
import Button from "./Button"

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";


const Benar = () => {

    

    const Icon = [
        {id: 1, icon: <FaFacebookSquare />, link: "https://www.facebook.com/rahim.asaduzzaman"},
        {id: 2, icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rahimasaduzzaman/"},
        {id: 3, icon: <FaGithub />, link: "https://www.github.com/asaduzzaman-rahim"},
        {id: 4, icon: <FaSquareInstagram />, link: "https://www.instagram.com/asaduzzaman_rahim_"},
        {id: 5, icon:  <SiGmail />, link: "mailto:rahim.asaduzzaman@gmail.com"}                         
    ]

  return (
    <>
        <section className=" pt-[180px] pb-[70px]">
            <Container>
                <Flex className="lg:justify-between justify-center items-center lg:items-end gap-y-20 lg:text-start text-center">

                    {/* ** Contant Part Start  */}

                    <div className="bg-benar max-w-[652px]">
                        <span className="text-2xl font-semibold tracking-[1px] text-white">Hi I am</span>
                        <h1 className='lg:text-[60px] md:text-[50px] text-[40px] font-semibold pt-5 tracking-[3px] text-white'>Asaduzzaman Rahim</h1>
                        <div className='py-5'>
                            <span className='lg:text-5xl md:text-4xl text-3xl font-bold bg-gradient-to-r from-[rgb(135,80,247)] to-white bg-clip-text text-transparent '>Frontend Developer</span>
                            <h2 className='text-xl text-white pt-5'>Grow your small business with website. WordPress and Web Design is my passion and profession. let's connect..</h2>
                        </div>

                        {/* Icon Part Start  */}

                        <Flex className=" justify-center  lg:justify-start gap-5">
                            {
                                Icon.map((items, id)=>{
                                    return(
                                        <button className='text-white text-2xl h-8 w-8 p-1 rounded-[10px] border-1 border-white cursor-pointer flex items-center justify-center hover:border-primary' onClick={()=> window.open(items.link, "_blank")}
                                         key={id}>{items.icon}</button>
                                    )
                                })
                            }
                        </Flex>

                        {/* Icon Part End  */}

                        {/* Button Part Start  */}

                        <Flex className='pt-[60px] pb-[80px] justify-center lg:justify-start gap-6'>
                            <Button>Hire Me</Button>
                            <button className="font-bold text-white px-[40px] py-[12px] rounded-[5px] cursor-pointer border-1 border-whiteDark hover:bg-primary duration-75 hover:border-primary hover:shadow-2xl">Download CV</button>
                        </Flex>

                        {/* Button Part End  */}

                        {/* Poster Part Start  */}

                        <Flex className="bg-[#0b0410] py-3  md:p-6 !flex-nowrap lg:justify-between gap-3 justify-center lg:w-[534px]">
                            <div className='md:w-[150px] border-r-1 pr-4 md:pr-0 border-x-whiteDark'>
                                <h5 className='md:text-2xl font-extrabold tracking-[3px] text-primary'>1+</h5>
                                <p className='md:text-[20px]  font-bold text-white mt-[12px]'>Experience</p>
                            </div>
                            <div className='md:w-[150px] border-r-1 pr-4 md:pr-0 border-x-whiteDark'>
                                <h5 className='md:text-2xl font-extrabold tracking-[3px] text-primary'>10+</h5>
                                <p className='md:text-[20px]  font-bold text-white mt-[12px]'>Product Done</p>
                            </div>
                            <div className='md:w-[150px]'>
                                <h5 className='md:text-2xl font-extrabold tracking-[3px] text-primary'>5+</h5>
                                <p className='md:text-[20px] font-bold text-white mt-[12px]'>Happy Clients</p>
                            </div>
                        </Flex>

                        {/* Poster Part End  */}

                    </div>
              {/* ** Contant Part End  */}

                {/* Image Part Start  */}
                    <div>
                        <div className='md:h-[518px] md:w-[518px] bg-bgcart rounded-full'>

                        </div>
                    </div>
                {/* Image Part End  */}


                </Flex>
            </Container>
        </section>

    </>
  )
}

export default Benar
