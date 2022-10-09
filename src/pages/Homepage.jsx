import React from "react";
import "./../App.css";
import { useState, useEffect } from "react";
import Data from "../components/data";
import { AiFillStar } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import map from './../images/map.png'
import Slider from "../components/slider";
import Women from "../components/men-women-section";
import Naerang from "../components/naerang-under";
import Boys from "../components/boys-girls";
import Contact from "../components/contact";


const Homepage = () => {
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(false);
  const faqclick = (id) => {
    setClicked(!clicked);
    setIndex(id);
  };
  

  return (
    <div>
      <Slider />
      <Women />
         <Naerang/>
        <Boys/> 
    </div>
  );
};

export default Homepage;
