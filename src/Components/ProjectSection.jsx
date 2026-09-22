import React from 'react'
import Section from './Section'
import Container from './Container'
import Flex from './Flex'
import HeadingCart from './HeadingCart'

import { Project } from '../ContantPart/AllProjectPart'

import { GoArrowUpRight } from "react-icons/go";
import { Element } from 'react-scroll'



const ProjectSection = () => {


  return (
    <>
    <Element name='section4'>
        <Section className="!bg-SixColor">
            <Container>
                <div>
                    <HeadingCart heading="My Recent Works" details="RECENT PROJECTS" />
                </div>
            <div>

                    {
                        Project.map((items)=>{
                            return(
                            <Flex key={items.id} className={`max-w-[1130px] mx-auto justify-center rounded-[15px] flex-col-reverse lg:flex-row lg:justify-between lg:!items-center gap-[35px] overflow-hidden px-[15px] py-[30px] xl:py-[50px] xl:pl-[35px] xl:pr-[45px] mb-0 md:mb-[25px] my-10 bg-ThereColor sticky`}>
                                <div className='lg:max-w-[380px] max-w-[600px] pl-5 lg:pl-0'>
                                    <span className='text-primary font-medium mb-[15px]'>{items.Short}</span>
                                    <h2 className='text-[22px] text-white md:text-[25px] lg:text-3xl leading-1.2  font-semibold py-5'>{items.Name}</h2>
                                    <p className='text-white  text-[16px]'>{items.Overview}</p>

                                    <ul className='py-1 text-white mt-10 grid gap-2.5'>
                                    {
                                        items.Features.map((itemFeatures)=>{
                                            return(
                                                    <li key={itemFeatures.id} >✔ {itemFeatures.focuses}</li>
                                            )
                                        })
                                    }
                                                </ul>
                                    <ul className=" flex flex-wrap gap-3 mt-[30px] mb-[50px]  ">
                                    {
                                        items.Technology.map((itemsTech)=>{
                                            return(
                                                <li key={itemsTech.id} className='p-3.5 rounded-4xl leading-1 bg-FiveColor text-white'>{itemsTech.Name}</li>
                                            )
                                        })
                                    }
                                    </ul>   

                                    <button onClick={()=> window.open(items.LiveLink, "_blank")} 
                                    className='text-white text-[16px] flex items-center gap-4 cursor-pointer'> View Live Project 
                                    <GoArrowUpRight className='text-2xl' /> </button>

                                </div>   
                                <div className='p-4 max-w-[590px] overflow-hidden rounded-2xl bg-[#10171c] hover:bg-primary transition-all duration-1300'>
                                    <img src={items.Benar} alt="Benar Image" />    
                                </div>  
                            </Flex>    
        
                            )
                        })
                    }
                </div>
                <div className='flex justify-center pt-9'>
                    <button onClick={()=>  window.open("https://github.com/asaduzzaman-rahim?tab=repositories", "_blank")}
                    className='text-white p-4 bg-FiveColor rounded-xl cursor-pointer transtion-all duration-900 hover:bg-primary'
                    >More Project Github Repo</button>
                </div>

                
                
            </Container>    
        </Section>        
    </Element> 
    </>
  )
}

export default ProjectSection
