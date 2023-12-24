import React, {useState} from "react";
import { MoviesPage } from "../../Views/MoviesPage";
import { WaitingPage } from "../../Views/WaitingPage";
import {CreateMovieDTO, GetMovieDTO, MovieController} from "../api/MovieController";
import { getCurrentUser } from "../session/session";
import { NewMoviePage } from "../../Views/NewMoviePage";
import {useParams} from "react-router-dom";
import {MoviePage} from "../../Views/MoviePage";
import {GetRoomDTO, RoomController} from "../api/RoomController";
import {RoomsPage} from "../../Views/RoomsPage";
import {RoomPage} from "../../Views/RoomPage";
import {NewRoomPage} from "../../Views/NewRoomPage";

export function FetchMoviesForUser() {
    var [movies, updateMovies] = useState<GetMovieDTO[]>()
    var data = getCurrentUser()
    if (movies === undefined) {
        MovieController.getAllMovies().then((value) => updateMovies(value))
    }
    return (movies === undefined ? <WaitingPage /> :
            <MoviesPage IDs={movies.map((movie) => movie.title)} />
    )
}

export function FetchMovieData() {
    const { id } = useParams()
    const [data, updateData] = React.useState<GetMovieDTO>()
    if (data === undefined) {
        MovieController.getMovieById(id ?? "").then((value) => updateData(value))
    }
    return data === undefined ? <WaitingPage /> :
        <MoviePage movieData={
            {
                title: data.title,
                genre: data.genre,
                runtime: data.runtime,
            }
        } />
}

export function CreateMovie() {
    return (
        <NewMoviePage />
    )
}

export function FetchRoomsForUser() {
    var [rooms, updateRooms] = useState<GetRoomDTO[]>()
    var data = getCurrentUser()
    if (rooms === undefined) {
        RoomController.getAllRooms().then((value) => updateRooms(value))
    }
    return (rooms === undefined ? <WaitingPage /> :
            <RoomsPage IDs={rooms.map((room) => room.roomName)} />
    )
}

export function FetchRoomData() {
    const { id } = useParams()
    const [data, updateData] = React.useState<GetRoomDTO>()
    if (data === undefined) {
        RoomController.getRoomById(id ?? "").then((value) => updateData(value))
    }
    return data === undefined ? <WaitingPage /> :
        <RoomPage roomData={
            {
                roomName: data.roomName,
                rowCount: data.rowCount,
                colCount: data.colCount,
            }
        } />
}

export function CreateRoom() {
    return (
        <NewRoomPage />
    )
}