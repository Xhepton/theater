package com.example.theater.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.theater.entities.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}
