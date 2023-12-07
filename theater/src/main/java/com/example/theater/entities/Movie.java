package com.example.theater.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.Set;


@Entity
public class Movie {

    @Id
    @Column(nullable = false, updatable = false)
    private String title;

    @Column(nullable = false)
    private String genre;

    @Column(nullable = false)
    private Integer runtime;

    @OneToMany(mappedBy = "movieTitle")
    private Set<Screening> movieTitleScreenings;

    public String getTitle() {
        return title;
    }

    public void setTitle(final String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(final String genre) {
        this.genre = genre;
    }

    public Integer getRuntime() {
        return runtime;
    }

    public void setRuntime(final Integer runtime) {
        this.runtime = runtime;
    }

    public Set<Screening> getMovieTitleScreenings() {
        return movieTitleScreenings;
    }

    public void setMovieTitleScreenings(final Set<Screening> movieTitleScreenings) {
        this.movieTitleScreenings = movieTitleScreenings;
    }

}
