import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";


function Homepage() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Homepage;
