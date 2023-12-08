import React, { useState, useEffect } from 'react';
import MovieService from './MovieService';
import {tokenstate} from "../Auth/AuthForm";

const MovieForm = () => {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState({
        title: '',
        genre: '',
        runtime: 0,
    });

    const movieService = new MovieService('http://localhost:9090');

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const token = tokenstate;
            const fetchedMovies = await movieService.getAllMovies(token);

            setMovies(fetchedMovies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
    };

    const handleSaveMovie = async (e) => {
        e.preventDefault();

        try {
            const token = tokenstate;
            const savedMovie = await movieService.saveMovie(newMovie, token);

            setMovies((prevMovies) => [...prevMovies, savedMovie]);
            setNewMovie({
                title: '',
                genre: '',
                runtime: 0,
            });
        } catch (error) {
            console.error('Error saving movie:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSaveMovie}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={newMovie.title}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Genre:
                    <input
                        type="text"
                        name="genre"
                        value={newMovie.genre}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Runtime:
                    <input
                        type="number"
                        name="runtime"
                        value={newMovie.runtime}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="submit">Save Movie</button>
            </form>

            <ul>
                {movies.map((movie) => (
                    <li key={movie.title}>{movie.title} - {movie.genre} - {movie.runtime} minutes</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieForm;
