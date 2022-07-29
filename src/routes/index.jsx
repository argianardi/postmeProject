import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { TokenContext } from "../utils/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeAfterLogin from "../pages/HomeAfterLogin";
import HomeBeforeLogin from "../pages/HomeBeforeLogin";
import MyProfile from "../pages/MyProfile";
import PostWithComment from "../pages/PostWithComment";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import EditProfile from "../pages/EditProfile";

const App = () => {
  const [token, setToken] = useState(null);
  const jwtToken = useMemo(() => ({ token, setToken }), [token]);

  useEffect(() => {
    const getToken = localStorage.getItem("token") || "0";
    setToken(getToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken}`;
  }, [token]);

  if (token) {
    return (
      <TokenContext.Provider value={jwtToken}>
        <BrowserRouter>
          <Routes>
            <Route path="afterlogin" element={<HomeAfterLogin />} />
            <Route path="/" element={<HomeBeforeLogin />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="comment" element={<PostWithComment />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="editprofile" element={<EditProfile />} />
            <Route path="*" element={<div>404 Error not Found</div>} />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    );
  }
};
export default App;
