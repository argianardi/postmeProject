import React from "react";
import { ButtonLarge } from "../components/Button";
import Input from "../components/Input";
import { Link } from 'react-router-dom';

export default function EditProfile() {
  return (
    <div className="bg-screen h-screen">
      <div className="">
        <h2 className="pb-12 md:pb-9 pt-2 text-center text-bluepm text-3xl font-bold">
          Edit Profile
        </h2>
        <form>
          <div className="mb-6 text-center">
            <Input type="text" placeholder="Update your name" />
          </div>
          <div className="mb-6 text-center">
            <Input type="text" placeholder="Update your username" />
          </div>
          <div className="mb-6 text-center">
            <Input type="tel" placeholder="Update your number phone" />
          </div>
          <div className="mb-6 text-center">
            <Input type="email" placeholder="Update your email" />
          </div>
          <div className="mb-6 text-center">
            <Input type="text" placeholder="Update your address" />
          </div>
          <div className="mb-6 text-center">
            <Input type="password" placeholder="Update your password" />
          </div>
        </form>
      </div>
      <div className="text-center mt-5 ">
        <Link to="/profile"><ButtonLarge label="Save Updates" /></Link>
      </div>
    </div>
  );
}
