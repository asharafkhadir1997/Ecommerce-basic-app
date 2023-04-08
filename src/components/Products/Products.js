import React from "react";
import "./Products.css";
import { productItems } from "../data";
import { useDispatch } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Products() {
  const dispatch = useDispatch();
  const addtocartHandler = (a, b) => {
    dispatch({ type: "addtocart", id: a, price: b });
  };

  return (
    <div>
      <div className="products_contianer">
        {productItems.map((items) => {
          return (
            <div className="products_card" key={items.id}>
              <img
                className="product_image"
                src={items.imagelink}
                alt="Dress fashion"
              />
              <p className="product_title">{items.title}</p>
              <p className="product_price">Price : ${items.price}</p>
              <button
                className="product_button"
                onClick={() => addtocartHandler(items.id, items.price)}
              >
                <ShoppingCartOutlinedIcon />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
