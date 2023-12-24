import React, {useState} from "react";
import { MoviesPage } from "../../Views/MoviesPage";
import { WaitingPage } from "../../Views/WaitingPage";
import {CreateMovieDTO, GetMovieDTO, MovieController} from "../api/MovieController";
import { getCurrentUser } from "../session/session";
import { NewMoviePage } from "../../Views/NewMoviePage";
import {useParams} from "react-router-dom";
import {MoviePage} from "../../Views/MoviePage";

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