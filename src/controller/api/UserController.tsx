import { deleteBody, getBody, patchBody, postBody, url } from "./constants"

export interface CreateUserDTO {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export interface SignInUserDTO {
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

export interface GetUserTokenDto {
    Token: string,
}

export class UserController {

    static async signInUser(body: SignInUserDTO): Promise<{ user: GetUserDto, myToken: string }> {
        const response = await fetch(url + "/v1/auth/signin", {
            ...postBody,
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error("Failed to sign in");
        }

        const result = await response.json();
        console.log("UserControllerLog: " + result.token)
        return { user: result.user, myToken: result.token };
    }

    // POST methods
    static async createNewUser(body: CreateUserDTO): Promise<GetUserDto> {
        return await (await fetch(url + "/v1/auth/signup", {
                ...postBody,
                body: JSON.stringify(body)
            })
        ).json()
    }

}