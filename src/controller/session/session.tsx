import { GetUserDto } from "../api/UserController";

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") ?? "") as GetUserDto
}

export function clearCurrentUser() {
    localStorage.setItem("currentUser", "")
}

export function setCurrentUser(newData: GetUserDto) {
    localStorage.setItem("currentUser", JSON.stringify(newData))
}