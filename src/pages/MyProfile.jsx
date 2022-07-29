import React from "react";
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import background from "../image/blake-connally-IKUYGCFmfw4-unsplash.jpg";
import profile from "../image/profile1.png";
import { ButtonLarge } from "../components/Button";
import Header from "../components/Header";
import { Link } from 'react-router-dom';

export default function MyProfile() {
  return (
    // header
    <div className="bg-screen ">
      <Header />

      <div className=" mt-5 mx-2 md:mx-auto  md:w-3/4 lg:w-3/5 xl:w-1/2 ">
        {/* background profile */}
        <img
          src={background}
          className="h-36 w-full object-cover "
          alt="background profil"
        />

        <div className=" border-x-2 border-b-2 border-blue-700 ">
          {/* nama dan foto profile */}
          <div className="text-center -mt-16 mb-2">
            <img
              src={profile}
              className="w-28 sm:w-36 mx-auto"
              alt="foto profile"
            />
            <h2 className="text-2xl fc-blackpm">Mirzam Avicena</h2>
            <p className="text-sm fc-blackpm">Software Engineer</p>
          </div>

          {/* contact   */}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto mb-3">
              <div className="flex sm:h-14 sm:items-center  mt-3 sm:border-2 sm:border-r-black">
                <div className="flex sm:mx-auto">
                  <HiOutlineMail color="black" className="text-2xl " />
                  <p className="ml-1 fc-blackpm text-md sm:text-end ">
                    sikakikiri@gmail.com
                  </p>
                </div>
              </div>
              <div className=" sm:h-14 sm:flex sm:items-center  mt-3">
                <div className="flex sm:mx-auto">
                  <HiLocationMarker
                    color="black"
                    className="text-2xl sm:ml-2 md:ml-0"
                  />
                  <p className="ml-1 sm:mr-2 md:mr-0 fc-blackpm text-md">
                    Semarang, Indonesia
                  </p>
                </div>
              </div>
              <div className=" flex sm:h-14 sm:items-center  mt-3 sm:border-2 sm:border-l-black">
                <div className="flex sm:mx-auto">
                  <HiPhone color="black" className="text-2xl " />
                  <p className="ml-1 fc-blackpm text-md ">082138793602</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 ">
        <Link to="/editprofile"><ButtonLarge label="Edit Profile" /></Link>
      </div>

      <div className="mt-12">
        <p className="text-center fc-blackpm">Copyright&copy;2022</p>
      </div>
    </div>
  );
}
