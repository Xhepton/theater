package com.example.theater.repositories;

import com.example.theater.entities.Screening;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScreeningRepository extends JpaRepository<Screening, Integer> {
}
            