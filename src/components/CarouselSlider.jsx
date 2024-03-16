import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard";

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <MovieCard />
        </div>
        <div>
          <MovieCard />
        </div>
        <div>
          <MovieCard />
        </div>
        <div>
          <MovieCard />
        </div>
        <div>
          <MovieCard />
        </div>
        <div>
          <MovieCard />
        </div>
        <div>
          <MovieCard />
        </div>
        <div>
          <MovieCard />
        </div>
        <div>
          <MovieCard />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlider;
