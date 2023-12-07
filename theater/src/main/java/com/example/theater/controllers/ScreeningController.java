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
    private final ScreeningServiceImpl screeningServiceImpl;

    // Use constructor-based dependency injection
    @Autowired
    public ScreeningController(ScreeningServiceImpl screeningServiceImpl) {
        this.screeningServiceImpl = screeningServiceImpl;
    }

    @GetMapping
    public ResponseEntity<List<Screening>> getAllScreenings() {
        return ResponseEntity.ok(screeningServiceImpl.getAllScreenings());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Screening> getScreeningById(@PathVariable int id) {
        return screeningServiceImpl.getScreeningById(id)
                .map(entity -> ResponseEntity.ok(entity))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Screening> createScreening(@RequestBody Screening screening) {
        return ResponseEntity.ok(screeningServiceImpl.saveScreening(screening));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Screening> updateScreening(@PathVariable int id, @RequestBody Screening screening) {
        return ResponseEntity.ok(screeningServiceImpl.saveScreening(screening));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteScreening(@PathVariable int id) {
        screeningServiceImpl.deleteScreening(id);
        return ResponseEntity.noContent().build();
    }
}

