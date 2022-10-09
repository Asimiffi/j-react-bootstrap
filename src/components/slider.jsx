import React from "react";
import imageA from "../images/slider1.webp";
import imageB from "../images/slider2.webp";
import imageC from "../images/slider3.webp";
import imageD from "../images/slider4.webp";
import imageE from "../images/slider5.webp";


const slider = () => {
  return (
    <div>
        <section>
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imageA} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imageB} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imageC} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imageD} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imageE} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    
    </div>
    </section>
        
       
      </div>
  );
};

export default slider;
