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
import useAuth from "./hooks/useAuth";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./components/SearchPage/SearchPage";
import VideoPage from "./components/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { InvalidTokenError } from "jwt-decode";

function App() {
  const [user, token] = useAuth();

  const [currentVideo, setCurrentVideo] = useState([]);
  const [videoResults, setVideoResults] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [videoComments, setVideoComments] = useState([]);
  const [newComment, setNewComment] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    // console.log(keys.googleAPIKey);
  });

  function goToCurrentVideo(newVideoObject) {
    console.log("newVideoObject", newVideoObject);
    setCurrentVideo(newVideoObject);
    getRelatedVideos(newVideoObject.id.videoId);
    getVideoComments(newVideoObject.id.videoId);
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

  async function postNewComment(newComment) {
    console.log("postnewComment Triggered", newComment);
    console.log('userToken', token);

    let response = await axios.post(`http://127.0.0.1:8000/api/comments/`, newComment, {
      headers: { Authorization: "Bearer " + token },
    });

    if (response.status === 201) {
      await getVideoComments(currentVideo.id.videoId);
    }
  }

  async function getRelatedVideos(currentVideoID) {
    console.log("Get related videos triggered", currentVideoID);
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${currentVideoID}&type=video&key=${keys.googleAPIKey}&part=snippet`
      );
      let relatedVideos = response.data.items;
      console.log("Inital axios call for related videos", relatedVideos);
      setRelatedVideos(relatedVideos);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getVideoComments(videoId) {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/comments/${videoId}/`
      );

      let comments = response.data;
      console.log("Axios call for comments", comments);
      setVideoComments(comments);
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
          element={
            <VideoPage
              currentVideo={currentVideo}
              relatedVideos={relatedVideos}
              videoComments={videoComments}
              goToCurrentVideo={goToCurrentVideo}
              postNewComment={postNewComment}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
