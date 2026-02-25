import React from 'react'
import HeadingCart from './HeadingCart'
import Flex from "./Flex"
import Section from './Section'
import Container from './Container'
import Button from "./Button"

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
                <Flex className=" justify-between gap-[100px] pt-[40px] pb-[100px]">
            {/* About Photo Section Start  */}
                    <div>

                    </div>
            {/* About Photo Section End  */}

            {/* About Content Section Start  */}
                    <div className='w-[630px]'>
                        <p className="leading-[35px] ">A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs.In this digital atelier.</p>
                        <Button className="mt-[40px]">Download CV</Button>
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
