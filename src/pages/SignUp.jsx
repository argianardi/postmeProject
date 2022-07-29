import React, { useContext, useState } from "react";
import "../styles/index.css";
import Input from "../components/Input";
import { ButtonLarge } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../utils/context";

export default function SignUp() {
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
    axios.post("https://postme.site/register");
  };

  return (
    <>
      <div className="bg-screen h-screen">
        <h2 className="pt-6 pb-4 md:pb-4 text-center text-bluepm text-3xl lg:text-4xl font-bold">
          Sign Up
        </h2>

        <form>
          <div className="mb-5 text-center">
            <Input type="text" placeholder="Update your name" />
          </div>
          <div className="mb-5 text-center">
            <Input type="text" placeholder="Update your username" />
          </div>
          <div className="mb-5 text-center">
            <Input type="tel" placeholder="Update your number phone" />
          </div>
          <div className="mb-5 text-center">
            <Input type="email" placeholder="Update your email" />
          </div>
          <div className="mb-5 text-center">
            <Input type="text" placeholder="Update your address" />
          </div>
          <div className="mb-5 text-center">
            <Input type="password" placeholder="Update your password" />
          </div>
        </form>
        <div className="text-center">
          <Link to="/login">
            <ButtonLarge label="Create Account" />
          </Link>
        </div>
        <p className="text-center text-blackpm mt-4 lg:text-xl">
          Have an account?
          <Link to="/login">
            <button className="ml-1 hover:text-green-900 text-blue-800">
              Log In
            </button>
          </Link>
        </p>
      </div>
    </>
  );
}
