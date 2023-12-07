package com.example.theater.controllers;


import com.example.theater.entities.Screening;
import com.example.theater.services.Impl.ScreeningServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/screening")
public class ScreeningController {

    // Declare the service as final to ensure its immutability
    private final ScreeningServiceImpl screeningService;

    // Use constructor-based dependency injection
    @Autowired
    public ScreeningController(ScreeningServiceImpl screeningService) {
        this.screeningService = screeningService;
    }

    @GetMapping
    public ResponseEntity<List<Screening>> getAllScreenings() {
        return ResponseEntity.ok(screeningService.getAllScreenings());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Screening> getScreeningById(@PathVariable int id) {
        return screeningService.getScreeningById(id)
                .map(entity -> ResponseEntity.ok(entity))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Screening> createScreening(@RequestBody Screening screening) {
        return ResponseEntity.ok(screeningService.saveScreening(screening));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Screening> updateScreening(@PathVariable int id, @RequestBody Screening screening) {
        return ResponseEntity.ok(screeningService.saveScreening(screening));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteScreening(@PathVariable int id) {
        screeningService.deleteScreening(id);
        return ResponseEntity.noContent().build();
    }
}

