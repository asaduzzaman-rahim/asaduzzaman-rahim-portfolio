import React from "react";
import Section from "./Section";
import Container from "./Container";
import Flex from "./Flex";
import HeadingCart from "./HeadingCart";

import Icon from "../assets/1.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      id: 1,
      Description:
        "Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business.",
      ClintPhoto: Icon,
      ClintName: "Md Mohidul Isman",
      ClintPosition: "Faculty, Web and Software",
    },
    {
      id: 1,
      Description:
        "Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business.",
      ClintPhoto: Icon,
      ClintName: "Md Mohidul Isman",
      ClintPosition: "Faculty, Web and Software",
    },
    {
      id: 1,
      Description:
        "Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business.",
      ClintPhoto: Icon,
      ClintName: "Md Mohidul Isman",
      ClintPosition: "Faculty, Web and Software",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
        },
      },
    ],
  };
  return (
    <>
      <Section className="bg-SixColor">
        <Container>
          <div className="pb-9">
            <HeadingCart heading="Testimonial"/>
          </div>
          <Slider {...settings}>
            {TextData.map((items, id) => {
              return (
                <div
                  key={id}
                  className="bg-ThereColor max-w-[625px] mx-suto p-[25px] rounded-2xl shadow-xl"
                >
                  <p className="mb-[35px] text-white">{items.Description}</p>
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
