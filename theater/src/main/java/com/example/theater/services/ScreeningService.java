package com.example.theater.services;

import com.example.theater.entities.Screening;

import java.util.List;
import java.util.Optional;

public interface ScreeningService {

    List<Screening> getAllScreenings();

    Optional<Screening> getScreeningById(int id);

    Screening saveScreening(Screening screening);

    void deleteScreening(int id);
}
