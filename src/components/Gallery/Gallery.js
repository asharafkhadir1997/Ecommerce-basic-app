import React from "react";
import "./Gallery.css";
import {galleryItemsMens, galleryItemsWomens} from "../data";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div>
      <h1 className="gallery_title">PRODUCTS</h1>
      <h1 className="gallery_titles">MENS</h1>
      <div className="gallery_contianer">
        {galleryItemsMens.map((items) => {
          return (
            <div className="gallery_card" key={items.id}>
              <img src={items.imagelink} alt="Dress fashion" />
              <h1>{items.title}</h1>
              <Link to="/products">
                <button className="gallery_button">Shop now</button>
              </Link>
            </div>
          );
        })}
      </div>
      <h1 className="gallery_titles">WOMENS</h1>
      <div className="gallery_contianer">
        {galleryItemsWomens.map((items) => {
          return (
            <div className="gallery_card" key={items.id}>
              <img src={items.imagelink} alt="Dress fashion" />
              <h1>{items.title}</h1>
              <Link to="/products">
              <button className="gallery_button">Shop now</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
