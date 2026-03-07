import React from "react";
import Section from "./Section";
import Container from "./Container";
import Flex from "./Flex";
import HeadingCart from "./HeadingCart";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Icon from "../assets/1.png";

import Slider from "react-slick";

const TestimonialsSection = () => {
  const TextData = [
    {
      id: 1,
      Description:
        "Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business.",
      ClintPhoto: Icon,
      ClintName: "Md Mohidul Isman",
      ClintPosition: "Faculty, Web and Software",
    },
    {
      id: 2,
      Description:
        "Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business.",
      ClintPhoto: Icon,
      ClintName: "Md Mohidul Isman",
      ClintPosition: "Faculty, Web and Software",
    },
    {
      id: 3,
      Description:
        "",
      ClintPhoto: Icon,
      ClintName: "Fardin Hassan Rocky",
      ClintPosition: "Founder at RequinBD",
    },
    {
      id: 4,
      Description:
        "I had the pleasure of working with 'Asaduzzaman Rahim' during his 4-month internship in Operation Management at Requin BD, Throughout his time with us. Asaduzzaman consistently demonstrated exceptional dedication, professionalism and a proactive approach to every task he undertook. He showcased strong analytical skills, seamlessy managing operational challenges and always finding efficient solutions to improve workflows, his ability to collaborate with team members and communicate effectively made him a valuable asset or our organization. Asaduzzaman's coomitment to excellence and his eagerness to learn were truly commendable, I am confident he will bring the same level of enthusisam and expertise to any future opportunity. I highly recommend him and am excited to see all that he will achieve in his career ",
      ClintPhoto: Icon,
      ClintName: "Md ",
      ClintPosition: "Facu",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
      <Section className=" overflow-hidden">
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
                  className="bg-ThereColor max-w-[625px] mx-suto p-[25px] rounded-2xl shadow-xl"
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
    </>
  );
};

export default TestimonialsSection;
