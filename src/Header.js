import React from "react";
import { AiOutlineVerticalLeft , AiOutlineVerticalRight } from "react-icons/ai";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
const Header = () => {
  return (
    <>

          <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={4}
      >
        <Slider>
  
          <Slide index={0}>
          <img src="./images/school.jpeg" className="carrouselImage" alt="sliderImage" />
          </Slide>
          <Slide index={1}> <img src="./images/assembly.jpeg" className="carrouselImage" alt="sliderImage" /></Slide>
          <Slide index={2}> <img src="./images/vacc.jpeg" className="carrouselImage" alt="sliderImage" /></Slide>
          <Slide index={3}> <img src="./images/vacc2.jpeg" className="carrouselImage" alt="sliderImage" /></Slide>
        </Slider>
        <div
        style={{position:'absolute', bottom:30 , left:50}}
        >  <ButtonBack><AiOutlineVerticalRight
        size={29}
        
        /></ButtonBack>
        <ButtonNext><AiOutlineVerticalLeft
    
        size={29}
      
        /></ButtonNext></div>
      
      </CarouselProvider>
    </>
  );
};

export default Header;
