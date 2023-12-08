class RoomService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getAllRooms(token) {
        console.log(token)
        const response = await fetch(`${this.baseUrl}/api/room`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching rooms: ${response.status}`);
        }

        const data = await response.json();
        return data;
    }

    async saveRoom(room, token) {
        console.log(token)
        const response = await fetch(`${this.baseUrl}/api/room`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(room),
        });

        if (!response.ok) {
            throw new Error(`Error saving room: ${response.status}`);
        }

        const savedRoom = await response.json();
        return savedRoom;
    }
}

export default RoomService;
