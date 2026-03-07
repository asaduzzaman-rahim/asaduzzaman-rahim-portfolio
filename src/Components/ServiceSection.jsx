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
            <Flex className="!flex-wrap gap-[30px] justify-center pt-[80px]">
                <ServiceCart 
                IconPart={<FaReact/>}
                HeadingPart="Frontend Development" 
                DetailsPart="Building responsive and interactive user interfaces using React.js and modern Javascript"/>
                <ServiceCart 
                IconPart={<FaWordpress/>}
                HeadingPart="Responsive Website Design" 
                DetailsPart="Creating fully responsive, mobile-first websites that work smoothly across all devices."/>
                <ServiceCart 
                IconPart={<FaReact/>}
                HeadingPart="React Web Application" 
                DetailsPart="Beveloping scalable single-page applications with clean architecture and reusable components."/>
                <ServiceCart 
                IconPart={<FaWordpress/>}
                HeadingPart="API Integration & Firebase" 
                DetailsPart="Integrating REST APIs and Firebase for authentication, real-time database and dynamic content management."/>

            </Flex>
            {/* Service Cart Section End  */}

        </Container>
     </Section> 
    </>
  )
}

export default ServiceSection
