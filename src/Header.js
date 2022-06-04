import React from "react";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Image } from "react-bootstrap";
import vacc from "./vacc.jpeg";
import assembly from "./assembly.jpeg";
import school from "./school.jpeg";
import vacc2 from "./vacc2.jpeg";

const Header = () => {
  console.log(vacc, assembly);
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={4}
      >
        <Slider>
          <Slide index={0}>
            <img src={school} className="carrouselImage" alt="sliderImage" />
          </Slide>
          <Slide index={1}>
            <img src={assembly} className="carrouselImage" alt="sliderImage" />
          </Slide>
          <Slide index={2}>
            <img src={vacc} className="carrouselImage" alt="sliderImage" />
          </Slide>
          <Slide index={3}>
            <img src={vacc2} className="carrouselImage" alt="sliderImage" />
          </Slide>
        </Slider>
        <div style={{ position: "absolute", bottom: 30, left: 50 }}>
          <ButtonBack>
            <AiOutlineVerticalRight size={29} />
          </ButtonBack>
          <ButtonNext>
            <AiOutlineVerticalLeft size={29} />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </>
  );
};

export default Header;
