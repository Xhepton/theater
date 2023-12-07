package com.example.theater.services;

import com.example.theater.entities.Movie;

import java.util.List;
import java.util.Optional;

public interface MovieService {

    List<Movie> getAllMovies();

    Optional<Movie> getMovieById(String id);

    Movie saveMovie(Movie movie);

    void deleteMovie(String id);
}
