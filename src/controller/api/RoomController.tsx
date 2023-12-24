import {deleteBody, getBody, postBody, putBody, url} from "./constants";
import {getCurrentUserToken} from "../session/session";
import {CreateMovieDTO, GetMovieDTO, PutMovieDTO} from "./MovieController";

export interface CreateRoomDTO {
    roomName: string,
    rowCount: number,
    colCount: number
}

export interface PutRoomDTO {
    rowCount?: number,
    colCount?: number
}

export interface GetRoomDTO extends CreateRoomDTO {}

export class RoomController {
    // GET methods
    static async getRoomById(id: string): Promise<GetRoomDTO> {
        getBody.headers.Authorization = `Bearer ${getCurrentUserToken()}`;
        return (await fetch(url + "/room/" + id, getBody)).json()
    }

    static async getAllRooms(): Promise<GetRoomDTO[]> {
        getBody.headers.Authorization = `Bearer ${getCurrentUserToken()}`;
        return await (await fetch(url + "/room/all", getBody)).json()
    }

    // PUT methods
    static async modifyRoom(roomName: string, body: PutRoomDTO) {
        const {rowCount, colCount } = body
        putBody.headers.Authorization = `Bearer ${getCurrentUserToken()}`;
        return await (await fetch(url + "/room/" + roomName, {
                ...putBody,
                body: JSON.stringify({ roomName, rowCount: Number(rowCount), colCount: Number(colCount) })
            })
        ).json()
    }

    // POST methods
    static async createNewRoom(body: CreateRoomDTO) {

        const { roomName, rowCount, colCount } = body
        postBody.headers.Authorization = `Bearer ${getCurrentUserToken()}`
        const response = await (await fetch(url + "/room", {
                ...postBody,
                body: JSON.stringify({ roomName, rowCount: Number(rowCount), colCount: Number(colCount) })
            })
        ).json()

        return response
    }

    // DELETE methods
    static async deleteRoomById(id: string) {
        deleteBody.headers.Authorization = `Bearer ${getCurrentUserToken()}`;
        return (await fetch(url + "/room/" + id, {
                ...deleteBody
            })
        )
    }
}