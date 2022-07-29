import React from "react";
import "../styles/index.css"
import Header from "../components/Header";
import antman from '../image/antman.jpg'
import doctorstrange from '../image/doctorstrange.jpg'
import avenger from '../image/avenger.jpg'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiComment } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";


const HomeBeforeLogin = () => {
  return (
      <div className="bg-screen w-full h-auto">
        <Header/>
        <div className="card border-4-white rounded-md mt-12 mb-3 bg-white w-96 h-auto mx-auto justify-center md:w-2/4 lg:w-3/4">
          <h1 className='font-semibold text-4xl pl-4 pt-4 pb-2 text-bluepm'>Post For You</h1>
          <h6 className="pl-4 text-sm text-bluepm">Wednesday, July 26th 2022</h6>
          <div className="flex flex-row">
            <img className="pl-4 my-6 w-28" src={antman}/>
            <div className="pl-4 my-6 flex flex-col text-blackpm">
              <p className="text-lg  font-semibold">@username</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Facilis molestias a libero dolores error.</p>
              <div className="flex flex-row mt-2">
                <MdOutlineFavoriteBorder/>
                <p className="ml-1 mr-2 -mt-1">12</p>
                <BiComment/>
                <p className="ml-1 mr-2 -mt-1">45</p>
                <BiBookmark/>
                <p className="ml-1 -mt-1">15</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-4-white rounded-md mx-auto my-3 bg-white w-96 h-auto justify-center md:w-2/4 lg:w-3/4">
          <div className="flex flex-row">
            <img className="pl-4 my-6 w-28" src={doctorstrange}/>
            <div className="pl-4 my-6 flex flex-col text-blackpm">
              <p className="text-lg font-semibold">@username</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Facilis molestias a libero dolores error.</p>
              <div className="flex flex-row mt-2">
                <MdOutlineFavoriteBorder/>
                <p className="ml-1 mr-2 -mt-1">12</p>
                <BiComment/>
                <p className="ml-1 mr-2 -mt-1">45</p>
                <BiBookmark/>
                <p className="ml-1 -mt-1">15</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-4-white rounded-md mx-auto my-3 bg-white w-96 h-auto justify-center md:w-2/4 lg:w-3/4">
          <div className="flex flex-row">
            <img className="pl-4 my-6 w-28" src={avenger}/>
            <div className="pl-4 my-6 flex flex-col text-blackpm">
              <p className="text-lg font-semibold">@username</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Facilis molestias a libero dolores error.</p>
              <div className="flex flex-row mt-2">
                <MdOutlineFavoriteBorder/>
                <p className="ml-1 mr-2 -mt-1">12</p>
                <BiComment/>
                <p className="ml-1 mr-2 -mt-1">45</p>
                <BiBookmark/>
                <p className="ml-1 -mt-1">15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
   
  );
}

export default HomeBeforeLogin