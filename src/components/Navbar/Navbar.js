import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./Navbar.module.css";
import { useDispatch } from "react-redux";


function Navbar() {
  const cartNumber = useSelector(state => state.count);
  const logoutbutton = useSelector((state) => state.alreadylogin);
  // const cartid = useSelector((state) => state.productId);
  const navbarname = useSelector((state) => state.navbarname);
  const dispatch = useDispatch();
  const logoutclick =()=>{
    dispatch({type:"logout"})
  }
  return (
    <div>
      <nav className={classes.navbar}>
        <div className={classes.navbar_item1}>
          <NavLink to="/home">EXPRESS BUY</NavLink>
        </div>
        <div className={classes.navbar_item2}>
          <NavLink to="/products">PRODUCTS</NavLink>
        </div>
        <div className={classes.navbar_item3}>
          {cartNumber ? (
            <NavLink to="/cart">CART({cartNumber})</NavLink>
          ) : (
            <NavLink to="/cart">CART</NavLink>
          )}
        </div>
        <div className={classes.navbar_item4}>
          <NavLink to="/login">{navbarname}</NavLink>
        </div>
        {logoutbutton ? <></> :
        <div className={classes.navbar_item4} onClick={logoutclick}>
          <NavLink to="/login">Logout</NavLink>
        </div>
        }
      </nav>
    </div>
  );
}

export default Navbar;
