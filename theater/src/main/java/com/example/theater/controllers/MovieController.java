package com.example.theater.controllers;


import com.example.theater.entities.Movie;
import com.example.theater.services.Impl.MovieServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/movie")
public class MovieController {

    // Declare the service as final to ensure its immutability
    private final MovieServiceImpl movieService;

    // Use constructor-based dependency injection
    @Autowired
    public MovieController(MovieServiceImpl movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Map<String, Object>>> getAllMovies() {
        List<Movie> allMovies = movieService.getAllMovies();

        List<Map<String, Object>> movieInfoList = allMovies.stream()
                .map(movie -> {
                    Map<String, Object> movieInfo = new HashMap<>();
                    movieInfo.put("title", movie.getTitle());
                    movieInfo.put("genre", movie.getGenre());
                    movieInfo.put("runtime", movie.getRuntime());
                    return movieInfo;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(movieInfoList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable String id) {
        return movieService.getMovieById(id)
                .map(entity -> ResponseEntity.ok(entity))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
        return ResponseEntity.ok(movieService.saveMovie(movie));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Movie> updateMovie(@PathVariable String id, @RequestBody Movie movie) {
        return ResponseEntity.ok(movieService.saveMovie(movie));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMovie(@PathVariable String id) {
        movieService.deleteMovie(id);
        return ResponseEntity.noContent().build();
    }
}
