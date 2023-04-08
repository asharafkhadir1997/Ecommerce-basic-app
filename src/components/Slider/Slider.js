import React, { useState } from "react";
import classes from "./Slider.module.css";
import styled from "styled-components";
import {sliderItems} from "../data";
import { Link } from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";


const SliderContainer = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.value * -100}vw);
`;

function Slider() {
  const [index,setIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction === "left"){
      setIndex(index > 0 ? index-1 : 2)
    }else {
      setIndex(index < 2 ? index + 1 : 0);
    }
  };
  return (
    <div className={classes.slides}>
      <div
        className={classes.slider_arrow_left}
        onClick={() => handleClick("left")}
      >
        <ArrowBackIosNewOutlinedIcon />
      </div>
      <SliderContainer value={index}>
        {sliderItems.map((items) => (
          <div className={classes.slider} key={items.id}>
            <div className={classes.slider_image_container}>
              <img
                className={classes.slider_image}
                src={items.imagelink}
                alt="Slider new fashion items"
              ></img>
            </div>
            <div className={classes.slider_info}>
              <h1 className={classes.slider_info_title}>{items.title}</h1>
              <p className={classes.slider_info_description}>
                {items.description}
              </p>
              <Link to="/products">
                <button className={classes.slider_info_button}>
                  {items.buttontext}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </SliderContainer>

      <div
        className={classes.slider_arrow_right}
        onClick={() => handleClick("right")}
      >
        <ArrowForwardIosOutlinedIcon />
      </div>
    </div>
  );
}

export default Slider;
