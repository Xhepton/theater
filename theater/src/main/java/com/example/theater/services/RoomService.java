package com.example.theater.services;

import com.example.theater.entities.Room;

import java.util.List;
import java.util.Optional;

public interface RoomService {

    List<Room> getAllRooms();

    Optional<Room> getRoomById(String id);

    Room saveRoom(Room room);

    void deleteRoom(String id);
}
