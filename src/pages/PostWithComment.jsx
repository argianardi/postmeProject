import React from "react";
import "../styles/index.css"
import Header from "../components/Header";
import profile from '../image/profile1.png'
import romance from '../image/romance.jpg'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiComment } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";


const PostWithComment = () => {
  return (
    <div className="bg-screen w-full h-auto">
        <Header/>
        <div className="card border-4-white rounded-md mt-12 mb-3 bg-white w-96 h-auto mx-auto justify-center md:w-2/4 lg:w-3/4">
            <div className="flex flex-row">
                <img className="pl-4 my-6 w-20 h-16 " src={profile}/>
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
            <div className="flex justify-center">
                <img className="w-96 px-4 pb-4 md:w-3/4 lg:w-3/4" src={romance} alt="romance"/>
            </div>
        </div>
        <div className="card border-4-white rounded-md mb-3 bg-white w-96 h-auto mx-auto justify-center md:w-2/4 lg:w-3/4">
            <input placeholder="Commentes here..." className="border-none px-3 py-8 w-96 md:w-2/4 lg:w-3/4"/>
        </div>
        <div className="card border-4-white rounded-md mb-3 bg-white w-96 h-auto mx-auto justify-center md:w-2/4 lg:w-3/4">
            <div className="p-4 flex flex-col text-blackpm">
                <p className="text-lg  font-semibold">@username</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Facilis molestias a libero dolores error.</p>
            </div>
        </div>
        <div className="card border-4-white rounded-md mb-3 bg-white w-96 h-auto mx-auto justify-center md:w-2/4 lg:w-3/4">
            <div className="p-4 flex flex-col text-blackpm">
                <p className="text-lg  font-semibold">@username</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Facilis molestias a libero dolores error.</p>
            </div>
        </div>
        





    </div>
  );
}

export default PostWithComment