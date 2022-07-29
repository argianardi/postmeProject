import React from "react";
import { useState } from "react"
import "../styles/index.css"
import Header from "../components/Header";
import antman from '../image/antman.jpg'
import doctorstrange from '../image/doctorstrange.jpg'
import avenger from '../image/avenger.jpg'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiComment } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { ButtonSmall } from "../components/Button";
import { Link } from "react-router-dom"

const HomeAfterLogin = () => {
    const [postList, setPostList] = useState([])
    const [form, setForm] = useState({
        todo: "",
        status: false,
      });
    
      const resetInput = () => {
        setForm({
          todo: "",
          status: false,
        });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.index || form.index === 0) {
            const newPost = postList.map((e, i) => {
              if (i === form.index) {
                return form;
              } else {
                return e;
              }
            });
            setPostList(newPost);
          } else {
            setPostList([...postList, form]);
          }
          resetInput();
        };
    
  return (
      <div className="bg-screen w-full h-auto">
        <Header/>
        
        <div className="card border-4-white rounded-md mt-12 mb-3 bg-white w-96 h-auto mx-auto justify-center md:w-2/4 lg:w-3/4">
          
          <div className="flex flex-row justify-between">
            <div>
                <h1 className='font-semibold text-4xl pl-4 pt-4 pb-2 text-bluepm'>Post For You</h1>
                <h6 className="pl-4 text-sm text-bluepm">Wednesday, July 26th 2022</h6>
            </div>
            <div className="pt-6 pr-4 mx-2 lg:flex flex-row">
            <form method="post"
            onSubmit={handleSubmit}><input className="p-3 w-32 mr-2 lg:w-96 " placeholder="Your post here..."/></form>
            <ButtonSmall label="Post"/></div>
          </div>
          <Link to="/comment">  
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
          </Link>
        </div>
        <Link to="/comment">
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
        </Link>
        <Link to="/comment">
        <div className="card border-4-white rounded-md mx-auto my-3 bg-white w-96 h-auto justify-center md:w-2/4 lg:w-3/4">
        {postList.map((e, i) => {
            return (
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

            )
        })}
          
        </div>
        </Link>
      </div>
  
   
  );
}

export default HomeAfterLogin