import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Homepage} from "./Views/Homepage";
import React from "react";
import {LoginPage} from "./Views/LoginPage";
import {RegistrationPage} from "./Views/RegistrationPage";
import {
    CreateMovie, CreateRoom,
    FetchMovieData,
    FetchMoviesForUser,
    FetchRoomData,
    FetchRoomsForUser
} from "./controller/fetchers/Fetchers";
import {UserPage} from "./Views/UserPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/login" Component={LoginPage} />
            <Route path={"/register"} Component={RegistrationPage} />
            <Route path={"/movies"} Component={FetchMoviesForUser} />
            <Route path={"/movie/:id"} Component={FetchMovieData} />
            <Route path={"/createMovie/"} Component={CreateMovie} />
            <Route path={"/rooms"} Component={FetchRoomsForUser} />
            <Route path={"/room/:id"} Component={FetchRoomData} />
            <Route path={"/createRoom/"} Component={CreateRoom} />
            <Route path={"/user/"} Component={UserPage} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
