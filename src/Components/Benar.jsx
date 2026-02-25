import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Button from "./Button"

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";


const Benar = () => {
  return (
    <>
        <section className="pt-[30px] pb-[70px]">
            <Container>
                <Flex className="lg:justify-between justify-center items-center gap-y-20 lg:text-start text-center">

                    {/* ** Contant Part Start  */}

                    <div className="bg-benar">
                        <span className="lg:text-2xl font-semibold tracking-[1px] text-whiteDark">Hi I am</span>
                        <h1 className='lg:text-[60px] md:text-[50px] text-[35px] font-bold pt-5 tracking-[3px] text-whiteDark'>Asaduzzaman Rahim</h1>
                        <div className='py-5'>
                            <span className='lg:text-5xl md:text-4xl text-3xl font-black text-orange '>Frontend Developer</span>
                        </div>

                        {/* Icon Part Start  */}

                        <Flex className=" justify-center  lg:justify-start gap-5">
                            <FaFacebookSquare className='text-whiteDark text-2xl h-8 w-8 p-1 rounded-[10px] border-1 border-whiteDark'/>
                            <FaLinkedin className='text-whiteDark text-2xl h-8 w-8 p-1 rounded-[10px] border-1 border-whiteDark'/>
                            <FaGithub className='text-whiteDark text-2xl h-8 w-8 p-1 rounded-[10px] border-1 border-whiteDark'/>
                            <FaSquareInstagram className='text-whiteDark text-2xl h-8 w-8 p-1 rounded-[10px] border-1 border-whiteDark'/>
                            <SiGmail className='text-whiteDark text-2xl h-8 w-8 p-1 rounded-[10px] border-1 border-whiteDark'/>
                        </Flex>

                        {/* Icon Part End  */}

                        {/* Button Part Start  */}

                        <Flex className='pt-[60px] pb-[80px] justify-center lg:justify-start gap-6'>
                            <Button>Hire Me</Button>
                            <Button className="!bg-none border-1 border-whiteDark hover:text-orange hover:border-orange hover:shadow-2xl">Download CV</Button>
                        </Flex>

                        {/* Button Part End  */}

                        {/* Poster Part Start  */}

                        <Flex className="bg-bgcart p-3  md:p-6 !flex-nowrap lg:justify-between justify-center lg:w-[534px]">
                            <div className='w-[150px] border-r-1 border-x-whiteDark'>
                                <h5 className='text-2xl font-extrabold tracking-[3px] text-orange'>1+</h5>
                                <p className='text-[20px]  font-bold text-whiteDark mt-[12px]'>Experience</p>
                            </div>
                            <div className='w-[150px] border-r-1 border-x-whiteDark'>
                                <h5 className='text-2xl font-extrabold tracking-[3px] text-orange'>10+</h5>
                                <p className='text-[20px]  font-bold text-whiteDark mt-[12px]'>Product Done</p>
                            </div>
                            <div className='w-[150px]'>
                                <h5 className='text-2xl font-extrabold tracking-[3px] text-orange'>5+</h5>
                                <p className='text-[20px] font-bold text-whiteDark mt-[12px]'>Happy Clients</p>
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
