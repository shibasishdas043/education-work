import React from "react";
import img from "../assets/img.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();


  return (
    <div className="navbar">
      <img
        className="img"
        src={img}
        alt="image"
        height={"50px"}
        width={"100px"}
      />
      <ul>
        <NavLink to={'/'}>
          <li>Home</li>
        </NavLink>
        <NavLink to={'/Products'}>
          <li>Products</li>
        </NavLink>
        <NavLink to={'About'}>
          <li>About</li>
        </NavLink>
        <NavLink to={'Contacts'}>
          <li>Contact</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate('/Contacts',{replace:true})}>Get Started</button>
    </div>
  );
};

export default Navbar;
