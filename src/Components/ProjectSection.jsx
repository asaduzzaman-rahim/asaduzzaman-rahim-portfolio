import React from 'react'
import Section from './Section'
import Container from './Container'
import Flex from './Flex'
import HeadingCart from './HeadingCart'

import { GoArrowUpRight } from "react-icons/go";

import BenarImg from "../assets/project-5.png"


const ProjectSection = () => {
  return (
    <>
     <Section className="!bg-SixColor">
        <Container>
            <div>
                <HeadingCart heading="My Recent Works" details="RECENT PROJECTS" />
            </div>
            <Flex className="max-w-[1130px]  rounded-[15px] flex-col-reverse lg:flex-row lg:justify-between lg:!items-center gap-[35px] overflow-hidden px-[15px] py-[30px] xl:py-[50px] xl:pl-[35px] xl:pr-[45px] mb-0 md:mb-[25px] my-10 bg-ThereColor ">
                <div className='max-w-[380px] pl-5 lg:pl-0'>
                    <span className='text-primary font-medium mb-[15px]'>React Product</span>
                    <h2 className='text-[22px] text-white md:text-[25px] lg:text-3xl leading-1.2 lg:leading-1.2 font-semibold py-5'>Ecommerce Application</h2>
                    <p className='text-white text-[16px]'>Project was about precision and information. That’s all. Our design tem helps clients achieve their marketing Trager and branding that appeals to a website</p>

                    <ul className='mt-10 text-white grid gap-2.5'>
                        <li>We provide the most reasonable.</li>
                        <li>We provide the most reasonable.</li>
                        <li>We provide the most reasonable.</li>
                        <li>We provide the most reasonable.</li>
                    </ul>

                    <ul className="mt-[30px] mb-[50px] md:mb-[100px] flex gap-3 ">
                        <li className='p-3.5 rounded-4xl leading-1 bg-FiveColor text-white'>React</li>
                        <li className='p-3.5 rounded-4xl leading-1 bg-FiveColor text-white'>Tailwind CSS</li>
                        <li className='p-3.5 rounded-4xl leading-1 bg-FiveColor text-white'>Fairbase</li>
                    </ul>

                    <button className='text-white text-[16px] flex items-center gap-4 cursor-pointer'>
                     View Live Project <GoArrowUpRight className='text-2xl' /> </button>

                </div>  
                <div className='p-4 max-w-[590px] overflow-hidden rounded-2xl bg-[#10171c]'>
                    <img src={BenarImg} alt="Benar Image" />    
                </div>  
            </Flex>    
        </Container>    
    </Section> 
    </>
  )
}

export default ProjectSection
