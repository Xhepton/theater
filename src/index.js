import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AuthForm from "./AuthForm";
import MovieForm from "./MovieForm";
import RoomForm from "./RoomForm";
import ScreeningForm from "./ScreeningForm";

const inputs = [{
  name: "username",
  placeholder: "username",
  type: "text"
},{
  name: "password",
  placeholder: "password",
  type: "password"
},{
  type: "submit",
  value: "Submit",
  className: "btn" 
}]

const props = {
  name: 'loginForm',
  method: 'POST',
  action: '/perform_login',
  inputs: inputs
}

const params = new URLSearchParams(window.location.search)

ReactDOM.render(
    <React.StrictMode>
      <AuthForm />
      <MovieForm />
      <RoomForm />
        <ScreeningForm />
    </React.StrictMode>,
    document.getElementById('root')
);