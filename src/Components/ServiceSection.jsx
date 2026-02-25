import React from 'react'
import HeadingCart from './HeadingCart'
import Container from './Container'
import Section from './Section'
import Flex from "./Flex"
import ServiceCart from "./ServiceCart"
import { FaReact } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa6";



const ServiceSection = () => {
  return (
    <>
     <Section>
        <Container>

            {/* Section Heading Part Start  */}
            <HeadingCart 
            heading="Service"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            />
            {/* Section Heading Part End  */}

            {/* Service Cart Section Start  */}
            <Flex className="flex-wrap gap-[40px] justify-center pt-[80px]">
                <ServiceCart 
                IconPart={<FaReact/>}
                HeadingPart="Frontend Development" 
                DetailsPart="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, dolores modi perspiciatis dolorem commodi reiciendis?"/>
                <ServiceCart 
                IconPart={<FaWordpress/>}
                HeadingPart="Wordpress Development" 
                DetailsPart="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, dolores modi perspiciatis dolorem commodi reiciendis?"/>
                <ServiceCart 
                IconPart={<FaReact/>}
                HeadingPart="Frontend Development" 
                DetailsPart="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, dolores modi perspiciatis dolorem commodi reiciendis?"/>
                <ServiceCart 
                IconPart={<FaWordpress/>}
                HeadingPart="Wordpress Development" 
                DetailsPart="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, dolores modi perspiciatis dolorem commodi reiciendis?"/>
                <ServiceCart 
                IconPart={<FaReact/>}
                HeadingPart="Frontend Development" 
                DetailsPart="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, dolores modi perspiciatis dolorem commodi reiciendis?"/>
                <ServiceCart 
                IconPart={<FaWordpress/>}
                HeadingPart="Wordpress Development" 
                DetailsPart="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, dolores modi perspiciatis dolorem commodi reiciendis?"/>
            </Flex>
            {/* Service Cart Section End  */}

        </Container>
     </Section> 
    </>
  )
}

export default ServiceSection
