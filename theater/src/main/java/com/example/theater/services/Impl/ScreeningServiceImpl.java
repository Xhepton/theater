package com.example.theater.services.Impl;

import com.example.theater.entities.Screening;
import com.example.theater.repositories.ScreeningRepository;
import com.example.theater.services.ScreeningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScreeningServiceImpl implements ScreeningService {

    // Declare the repository as final to ensure its immutability
    private final ScreeningRepository screeningRepository;

    // Use constructor-based dependency injection
    @Autowired
    public ScreeningServiceImpl(ScreeningRepository screeningRepository) {
        this.screeningRepository = screeningRepository;
    }

    public List<Screening> getAllScreenings() {
        return screeningRepository.findAll();
    }

    public Optional<Screening> getScreeningById(int id) {
        return screeningRepository.findById(id);
    }

    public Screening saveScreening(Screening screening) {
        return screeningRepository.save(screening);
    }

    public void deleteScreening(int id) {
        screeningRepository.deleteById(id);
    }
}
            