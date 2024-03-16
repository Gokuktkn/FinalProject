import React from "react";
import Header from "../components/Header";
import CarouselSlider from "../components/CarouselSlider";
import { Footer } from "../components/Footer";

const MyList = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>My Lists</h1>
        <h2>Favorite movies</h2>
        <CarouselSlider></CarouselSlider>
        <h2>Movies to watch</h2>
        <CarouselSlider></CarouselSlider>
        <h2>Classic movies</h2>
        <CarouselSlider></CarouselSlider>
      </div>
      <Footer />
    </>
  );
};

export default MyList;
