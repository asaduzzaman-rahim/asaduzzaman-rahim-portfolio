import React from "react";
import Section from "./Section";
import Container from "./Container";
import Flex from "./Flex";
import HeadingCart from "./HeadingCart";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Element } from "react-scroll";
import Slider from "react-slick";

import { TextData } from "../ContantPart/AllTestimonials";

const TestimonialsSection = () => {


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
    <Element name="section5">
      <Section className=" overflow-hidden ">
        <Container> 
          <div className="pb-9">
            <HeadingCart heading="Testimonial"/>
          </div>
          <Slider {...settings}>
            {
            TextData.map((items) => {
              return (
                <div
                  key={items.id}
                  className="bg-ThereColor w-full mx-suto p-[25px] rounded-2xl shadow-xl"
                >
                  <p className="mb-[35px] text-white ">{items.Description}</p>
                  <Flex className="items-center gap-4">
                    <img src={items.ClintPhoto} alt="" />
                    <div className="text-white">
                      <h3 className="text-xl mb-1.5">{items.ClintName}</h3>
                      <h5 className="text-sm ">{items.ClintPosition}</h5>
                    </div>
                  </Flex>
                </div>
              );
            })}
          </Slider>
        </Container>
      </Section>      
    </Element>

    </>
  );
};

export default TestimonialsSection;
