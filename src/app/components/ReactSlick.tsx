import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="/images/aboutus.png"
            alt="Slide 1"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="/images/aboutus.png"
            alt="Slide 2"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="/images/aboutus.png"
            alt="Slide 3"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="/images/aboutus.png"
            alt="Slide 4"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
      </Slider>
    </div>
  );
}
