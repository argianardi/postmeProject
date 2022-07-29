import React, { useState, useContext, useEffect } from "react";
import "../styles/index.css";
import logo from "../image/ori.png";
import { ButtonSmall } from "./Button";
import { Link, useLocation } from "react-router-dom";
import { TokenContext } from "../utils/context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let location = useLocation();
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("0");
    navigate("/login");
    alert("You have been logout");
  };

  return (
    <div className="h-18 bg-white sticky top-0 flex justify-between">
      <Link to="/">
        <img className="w-36 p-6 lg:w-2/12" src={logo} alt="logo" />
      </Link>
      <div className="p-3 flex">
        {location.pathname !== "/profile" && location.pathname !== "/" && (
          <Link to="/profile">
            <h2 className="mr-4 mt-2 text-blackpm text-lg font-semibold">
              My Profile
            </h2>
          </Link>
        )}

        {token ? (
          <div className="ml-4">
            <ButtonSmall onClick={() => handleLogout()} label="Logout" />
          </div>
        ) : (
          <Link to="/login">
            <ButtonSmall label="Login" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
