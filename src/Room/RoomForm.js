import React, { useState, useEffect } from 'react';
import RoomService from './RoomService';
import { tokenstate } from '../Auth/AuthForm';

const RoomForm = () => {
    const [rooms, setRooms] = useState([]);
    const [newRoom, setNewRoom] = useState({
        roomName: '',
        colCount: 0,
        rowCount: 0,
    });

    const roomService = new RoomService('http://localhost:9090');

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        try {
            const token = tokenstate;
            const fetchedRooms = await roomService.getAllRooms(token);
            setRooms(fetchedRooms);
        } catch (error) {
            console.error('Error fetching rooms:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRoom((prevRoom) => ({ ...prevRoom, [name]: value }));
    };

    const handleSaveRoom = async (e) => {
        e.preventDefault();

        try {
            const token = tokenstate;

            // Convert string values to numbers
            const savedRoom = await roomService.saveRoom({
                ...newRoom,
                colCount: parseInt(newRoom.colCount, 10),  // Assuming it's an integer
                rowCount: parseInt(newRoom.rowCount, 10),
            }, token);

            setRooms((prevRooms) => [...prevRooms, savedRoom]);
            setNewRoom({
                roomName: '',
                colCount: 0,
                rowCount: 0,
            });
        } catch (error) {
            console.error('Error saving room:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSaveRoom}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="roomName"
                        value={newRoom.roomName}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Seats Per Column:
                    <input
                        type="number"
                        name="colCount"
                        value={newRoom.colCount}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Seats Per Row:
                    <input
                        type="number"
                        name="rowCount"
                        value={newRoom.rowCount}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="submit">Save Room</button>
            </form>

            <ul>
                {rooms.map((room) => (
                    <li key={room.id}>
                        {room.roomName} - Seats per Column: {room.colCount}, Seats per Row: {room.rowCount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomForm;
