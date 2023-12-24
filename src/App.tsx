import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Homepage} from "./Views/Homepage";
import React from "react";
import {LoginPage} from "./Views/LoginPage";
import {RegistrationPage} from "./Views/RegistrationPage";
import {CreateMovie, FetchMovieData, FetchMoviesForUser} from "./controller/fetchers/Fetchers";

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
        </Routes>
      </BrowserRouter>
  );
}

export default App;
