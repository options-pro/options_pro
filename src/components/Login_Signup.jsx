// import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function DemoCarousel(props) {
  return (
    <div className="loginsignup">
      <Carousel>
        <div>
          <h1>Hello world</h1>
        </div>
        <div>
          <h1>Signup</h1>
        </div>
      </Carousel>
    </div>
  );
}

export default DemoCarousel;
