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
import image1 from "./image1.jfif";
const Header = () => {
  console.log(image1);
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={4}
      >
        <Slider>
          <Slide index={0}>
            <img src={image1} className="carrouselImage" alt="sliderImage" />
          </Slide>
          <Slide index={1}>
            <img
              src="./images/schoolWebsite/static/media/assembly.jpeg"
              className="carrouselImage"
              alt="sliderImage"
            />
          </Slide>
          <Slide index={2}>
            <img
              src="./images/vacc.jpeg"
              className="carrouselImage"
              alt="sliderImage"
            />
          </Slide>
          <Slide index={3}>
            <img
              src="./images/vacc2.jpeg"
              className="carrouselImage"
              alt="sliderImage"
            />
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
