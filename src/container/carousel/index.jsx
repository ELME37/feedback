import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Root, ContainerSlide, ContainerFeedback, Feedback, Name, Position, ActiveDot, CustomDot} from './carousel.styled';

export default function Carousel ({ slides }) {
    const [activeDotIndex, setActiveDotIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
        customPaging: i => (
          i === activeDotIndex ? <ActiveDot /> : <CustomDot />
        ),
        beforeChange: (current, next) => {
          setActiveDotIndex(next);
        }
      }

    return (
        <Root >
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <ContainerSlide key={index} className='toto'>
                      <ContainerFeedback>
                        <Feedback>{slide.feedback}</Feedback>
                        <Name>{slide.name}</Name>
                        <Position>{slide.position}</Position>
                      </ContainerFeedback>
                    </ContainerSlide>
                ))}
            </Slider>
        </Root>
    );
};