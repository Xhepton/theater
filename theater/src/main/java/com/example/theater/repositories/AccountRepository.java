package com.example.theater.repositories;

import com.example.theater.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Movie, String> {
}
