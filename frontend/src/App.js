// General Imports
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import keys from "./API_Keys.json";
import axios from "axios";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Page from "./pages/Page/Page";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Comment from "./components/Comment/Comment";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentList from "./components/CommentList/CommentList";
import RelatedVideos from "./components/RelatedVideos/RelatedVideos";
import Reply from "./components/Reply/Reply";
import ReplyForm from "./components/ReplyForm/ReplyForm";
import ReplyList from "./components/ReplyList/ReplyList";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchPage from "./components/SearchPage/SearchPage";
import VideoPage from "./components/VideoPage/VideoPage";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  
  
  useEffect(() => {
    console.log(keys.googleAPIKey);
  }
  )

  return (
    <div>
      <SearchPage />
      <Navbar />
      <VideoPage />
      <RelatedVideos />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
