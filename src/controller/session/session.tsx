import {GetUserDto, GetUserTokenDto} from "../api/UserController";

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") ?? "") as GetUserDto
}

export function getCurrentUserToken() {
    return sessionStorage.getItem("myToken") ?? ""
}

export function clearCurrentUser() {
    localStorage.setItem("currentUser", "")
}

export function setCurrentUser(newData: GetUserDto, newToken: string) {
    sessionStorage.setItem("myToken", newToken)
    localStorage.setItem("currentUser", JSON.stringify(newData))
}