// General Imports
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
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
  const [currentVideo, setCurrentVideo] = useState([]);
  const [videoResults, setVideoResults] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    console.log(keys.googleAPIKey);
  });

  function goToCurrentVideo(newVideoObject) {
    console.log("newVideoObject", newVideoObject);
    setCurrentVideo(newVideoObject);
    navigate("/video");
  }

  async function getVideoResults(searchQuery) {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=${keys.googleAPIKey}&part=snippet`
      );
      let suggestedVideos = response.data.items;
      console.log("inital axios call", suggestedVideos);
      setVideoResults(suggestedVideos);
      navigate("/search");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="app">
      <Navbar />
      <SearchBar getVideoResults={getVideoResults} />
      <Routes>
        <Route
          path="/search"
          element={
            <SearchPage
              goToCurrentVideo={goToCurrentVideo}
              videoResults={videoResults}
            />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/video"
          element={<VideoPage currentVideo={currentVideo} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
