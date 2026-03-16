import React from 'react'
// import { motion } from "motion/react"

import Container from './Container'
import Flex from './Flex'
import Button from "./Button"

// import { useTypewriter } from 'react-simple-typewriter' 
import { Typewriter } from 'react-simple-typewriter'
import { Element } from 'react-scroll'



import AsaduzzamanRahim from "../assets/Asaduzzaman Rahim.png"
import SocialIconSection from './SocialIconSection'

const Benar = () => {

    // const [text] = useTypewriter({
    //             words: ["Frontend Developer", "Javascript Developer", "React Developer"],
    //             loop: true,
    //     });




  return (
    <>
    <Element name='section1'>

        <div className="overflow-hidden">
                {/* <div className="pointer-events-none absolute right-[-150px] top-3 h-72 w-72 rounded-full bg-purple-500/50 blur-2xl hidden md:block"></div> */}
                <div className="pointer-events-none absolute left-[-150px] bottom-3 h-72 w-72 rounded-full bg-purple-500/50 blur-2xl lg:hidden"></div>
        </div>
        <div className='overflow-hidden '>
            <section className=" pt-[180px] pb-[10px] lg:pb-[40px] ">
                <Container>
                    <Flex className="lg:justify-between justify-center !items-center flex-col-reverse lg:!flex-row lg:items-end gap-y-[20px] lg:text-start text-center">

                        {/* ** Contant Part Start  */}

                        <div className="  px-4 md:px-0 ">
                            <span className="text-2xl font-semibold tracking-[1px] text-white">Hi I am</span>
                            <h1 className='lg:text-[56px]  text-[35px] font-semibold pt-4 tracking-[3px] text-white'>Asaduzzaman Rahim</h1>
                            <div className='py-4'>
                                <span className='lg:text-5xl text-3xl font-bold bg-gradient-to-r from-[rgb(135,80,247)] to-white bg-clip-text text-transparent '>
                                    <Typewriter
                                        words={["Frontend Developer", "Javascript Developer", "React Developer", "Web Designer"]}
                                        loop={true}
                                        cursor={true}
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                                <h2 className='text-[18px] md:text-xl md:max-w-[640px]  text-white pt-5 '>Grow your small business with website. WordPress and Web Design is my passion and profession. let's connect..</h2>
                            </div>

                            {/* Icon Part Start  */}
                                <div>
                                    <SocialIconSection className="justify-center lg:justify-start" />    
                                </div>                    
                            {/* Icon Part End  */}

                            {/* Button Part Start  */}

                            <Flex className='pt-[60px] pb-[60px] justify-center lg:justify-start gap-6'>
                                <Button>Hire Me</Button>
                                <button className="font-bold text-white px-[40px] py-[12px] rounded-[5px] cursor-pointer border-1 border-whiteDark hover:bg-primary transition-all duration-900 hover:border-primary hover:shadow-2xl">Download CV</button>
                            </Flex>

                            {/* Button Part End  */}

                            {/* Poster Part Start  */}

                            <Flex className="bg-[#0b0410] py-3  md:p-6 !flex-nowrap lg:justify-between gap-3 justify-center lg:w-[534px] z-10">
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
                        <div className='z-10 overflow-hidden'>
                            <div className=' w-[370px] md:w-[470px] h-[676px] p-5 bg-FourColor  hover:bg-primary rounded-2xl flex justify-center  transition-all duration-900 '>
                                <img className='h-[660px]' src={AsaduzzamanRahim} alt="Asaduzzaman Rahim Photo" />
                            </div>
                        </div>
                    {/* Image Part End  */}


                    </Flex>
                </Container>
            </section>
        </div>
        
    </Element>
    </>
  )
}

export default Benar
