import { Path } from "react-router-dom";
import { patchBody, postBody, deleteBody, getBody, url } from "./constants"
import {getCurrentUserToken} from "../session/session";


export interface CreateMovieDTO {
    title: string,
    genre: string,
    runtime: number
}

export interface PatchMovieDTO {
    title?: string,
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

    // PATCH methods
    static async modifyMovie(id: string, body: PatchMovieDTO) {
        return await (await fetch(url + "/movie/" + id, {
                ...patchBody,
                body: JSON.stringify(body)
            })
        ).json()
    }

    // POST methods
    static async createNewMovie(body: CreateMovieDTO) {
        return await (await fetch(url + "/movie", {
                ...postBody,
                body: JSON.stringify(body)
            })
        ).json()
    }

    // DELETE methods
    static async deleteMovieById(id: string) {
        return (await fetch(url + "/Movies/" + id, {
                ...deleteBody
            })
        )
    }

}