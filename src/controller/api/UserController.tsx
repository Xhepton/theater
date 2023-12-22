import { deleteBody, getBody, patchBody, postBody, url } from "./constants"

export interface CreateUserDTO {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export interface PatchUserDTO {
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    user_role?: string
}

export interface GetUserDto {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    user_role: string | undefined,
    user_id: number,
}

export class UserController {

    // GET methods
    static async getUserById(id: string): Promise<GetUserDto> {
        return (await fetch(url + "/Users/" + id, getBody)).json()
    }

    static async getUserByEmail(email: string): Promise<GetUserDto> {
        return (await fetch(url + "/Users/email/" + email, getBody)).json()
    }

    static async getAllUsers(): Promise<GetUserDto[]> {
        return (await fetch(url + "/Users", getBody)).json()
    }


    // POST methods
    static async createNewUser(body: CreateUserDTO): Promise<GetUserDto> {
        return await (await fetch(url + "/v1/auth/signup", {
                ...postBody,
                body: JSON.stringify(body)
            })
        ).json()
    }

    // PATCH methods
    static async modifyUser(id: string, body: PatchUserDTO) {
        return (await fetch(url + "/Users/" + id, {
                ...patchBody,
                body: JSON.stringify(body)
            })
        )
    }

    // DELETE methods
    static async deleteUserById(id: string) {
        return (await fetch(url + "/Users/" + id, {
                ...deleteBody
            })
        )
    }

}