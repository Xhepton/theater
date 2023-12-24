package com.example.theater.controllers;

import com.example.theater.entities.Movie;
import com.example.theater.entities.Room;
import com.example.theater.services.Impl.RoomServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/room")
public class RoomController {

    // Declare the service as final to ensure its immutability
    private final RoomServiceImpl roomService;

    // Use constructor-based dependency injection
    @Autowired
    public RoomController(RoomServiceImpl roomService) {
        this.roomService = roomService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Map<String, Object>>> getAllRooms() {
        List<Room> allRooms = roomService.getAllRooms();

        List<Map<String, Object>> roomInfoList = allRooms.stream()
                .map(room -> {
                    Map<String, Object> roomInfo = new HashMap<>();
                    roomInfo.put("roomName", room.getRoomName());
                    roomInfo.put("rowCount", room.getRowCount());
                    roomInfo.put("colCount", room.getColCount());
                    return roomInfo;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(roomInfoList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Room> getRoomById(@PathVariable String id) {
        return roomService.getRoomById(id)
                .map(entity -> ResponseEntity.ok(entity))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Room> createRoom(@RequestBody Room room) {
        return ResponseEntity.ok(roomService.saveRoom(room));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Room> updateRoom(@PathVariable String id, @RequestBody Room room) {
        return ResponseEntity.ok(roomService.saveRoom(room));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoom(@PathVariable String id) {
        roomService.deleteRoom(id);
        return ResponseEntity.noContent().build();
    }
}

