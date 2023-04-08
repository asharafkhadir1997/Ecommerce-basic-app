import "./Login.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import image1 from "../Images/chatting.svg"

function Login() {
  const alreadylogin = useSelector(state => state.alreadylogin);
  const loginmessage = useSelector((state) => state.message);

  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const dataChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };
  const formHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "login",
      firstname: formData.firstname.toUpperCase(),
      lastname: formData.lastname.toUpperCase(),
    });
     
      history.push("/home");
    
  };
  const logoutHandler=()=>{
    dispatch({type: "logout"});
  }

  
  return (
    <div className="loginformdiv">
      <div className="login_container">
        <div className="login_description">
          <h1>Login</h1>
          <p className="login_description_para">Welcome to Express cart.</p>
        </div>
        {alreadylogin ? (
          <div className="form_container">
            <form onSubmit={formHandler} className="form_container_form">
              <label>FirstName</label>
              <input
                type="text"
                name="firstname"
                onChange={dataChangeHandler}
                placeholder="Martin"
                required
              ></input>
              <label>LastName</label>
              <input
                type="text"
                name="lastname"
                onChange={dataChangeHandler}
                placeholder="Luther"
                required
              ></input>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={dataChangeHandler}
                placeholder="yourmail@mail.com"
                required
              ></input>
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={dataChangeHandler}
                placeholder="123@#4Ua"
                required
              ></input>

              <button className="form_button" type="submit">
                Login
              </button>
            </form>
          </div>
        ) : (
          <>
            <h1 className="logedinText">{loginmessage}</h1>
            <button className="logoutbutton" onClick={logoutHandler}>
              Logout
            </button>
          </>
        )}
      </div>
      <div>
        <img className="loginphoto" src={image1} alt="login"></img>
      </div>
    </div>
  );
}

export default Login;
