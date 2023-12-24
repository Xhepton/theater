import { Path } from "react-router-dom";
import { putBody, postBody, deleteBody, getBody, url } from "./constants"
import {getCurrentUserToken} from "../session/session";
import {homedir} from "os";


export interface CreateMovieDTO {
    title: string,
    genre: string,
    runtime: number
}

export interface PutMovieDTO {
    genre?: string,
    runtime?: number
}

export interface GetMovieDTO extends CreateMovieDTO {}

export class MovieController {
    // GET methods
    static async getMovieById(id: string): Promise<GetMovieDTO> {
        getBody.headers.Authorization = `Bearer ${getCurrentUserToken()}`;
        return (await fetch(url + "/movie/" + id, getBody)).json()
    }

    static async getAllMovies(): Promise<GetMovieDTO[]> {
        getBody.headers.Authorization = `Bearer ${getCurrentUserToken()}`;
        return await (await fetch(url + "/movie/all", getBody)).json()
    }

    // PUT methods
    static async modifyMovie(title: string, body: PutMovieDTO) {
        const {genre, runtime } = body
        putBody.headers.Authorization = `Bearer ${getCurrentUserToken()}`;
        return await (await fetch(url + "/movie/" + title, {
                ...putBody,
                body: JSON.stringify({ title, genre, runtime: Number(runtime) })
            })
        ).json()
    }

    // POST methods
    static async createNewMovie(body: CreateMovieDTO) {
        console.log(body.runtime)
        const { title, genre, runtime } = body
        postBody.headers.Authorization = `Bearer ${getCurrentUserToken()}`
        const response = await (await fetch(url + "/movie", {
                ...postBody,
                body: JSON.stringify({ title, genre, runtime: Number(runtime) })
            })
        ).json()

        return response
    }

    // DELETE methods
    static async deleteMovieById(id: string) {
        deleteBody.headers.Authorization = `Bearer ${getCurrentUserToken()}`;
        return (await fetch(url + "/Movies/" + id, {
                ...deleteBody
            })
        )
    }

}