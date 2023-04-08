import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productItems } from "../data";
import "./Cart.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Cart = () => {
  const itemsId = useSelector((state) => state.productId);
  const totalPrice = useSelector((state) => state.price);
  const itemsNumbers = useSelector((state) => state.count);
  const [ordred, setOrdered] = useState(false);
  const dispatch = useDispatch();

  const clearFunction = () => {
    dispatch({ type: "clearcart" });
    setOrdered(true);
  };
  const clearCartHandler = () => {
    return dispatch({ type: "clearcart" });
  };
  const orderplacedHandler = () => {
    if (totalPrice === 0) {
      return;
    } else {
      return clearFunction();
    }
  };

  return (
    <div className="cart_container">
      {ordred && (
        <h2 style={{ display: "flex", justifyContent: "center", gap: "20" }}>
          <CheckCircleOutlineIcon />
          Order Successfully
        </h2>
      )}
      <div className="product_list">
        {productItems.map((items) => {
          if (itemsId.includes(items.id)) {
            return (
              <div>
                <div className="product_list_container">
                  <img
                    className="product_image"
                    src={items.imagelink}
                    alt="product in cart"
                  />
                  <div className="product_item_description">
                    <p>Product : {items.title}</p>
                    <p>Price : ${items.price}</p>
                    
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="product_checkout">
        <h4>CHECKOUT</h4>
        <hr></hr>
        <div className="price_text">
          <p>No of items : {itemsNumbers}</p>
          <p>Total Price : $ {totalPrice}</p>
          <p>Discount :$0</p>

          <p>Final Price: $ {totalPrice}</p>
        </div>
        <p onClick={orderplacedHandler} className="product_checkout_button">
          PAY ($ {totalPrice})
        </p>
        <p onClick={clearCartHandler} className="product_clearcart_button">
          Clear cart
        </p>
      </div>
    </div>
  );
};

export default Cart;
