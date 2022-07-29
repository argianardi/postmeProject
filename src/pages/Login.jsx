import logo from "../image/ori.png";
import Input from "../components/Input";
import { ButtonLarge } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { TokenContext } from "../utils/context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };

    axios
      .post("https://postme.site/login", body)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", token);
        setToken(token);
        alert("Login Sukses");
        navigate("/afterlogin");
      })
      .catch((error) => {
        alert("login failed");
      })
      .finally(() => {});
  };

  return (
    <>
      <div className="bg-screen h-screen ">
        <div
          className="pt-20 mx-auto w-9/12 xxs:w-8/12 xs:w-7/12
         sm:w-3/5 md:w-6/12 lg:w-5/12 xl:w-5/12 flex justify-between items-center"
        >
          <h2 className="text-bluepm text-xl xxs:text-2xl xs:text-3xl sm:text-4xl xl:text-5xl font-bold">
            Login to
          </h2>
          <img
            className=" w-28 xxs:w-32 xs:w-36 sm:w-52 md:w-56 lg:w-60 xl:w-72"
            src={logo}
            alt="logo"
          />
        </div>

        <form
          className="mb-7 mt-10 text-center flex flex-col gap-10"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            type="text"
            placeholder="Phone, email, or username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <ButtonLarge label="Login" />

          <p className="text-center text-blackpm mt-7 lg:text-xl">
            Dont't have an account?
            <Link to="/signup">
              {" "}
              <button className="ml-1 hover:text-green-900 text-blue-800">
                Sign Up
              </button>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
