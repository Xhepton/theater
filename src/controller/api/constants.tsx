import {useState} from "react";
import {getCurrentUserToken} from "../session/session";

export const url = "http://localhost:9090/api"
let myToken: string = "Token is not updated";

export const getBody = {
    method: 'GET',
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${myToken}`
    }
}
export const putBody = {
    method: 'PUT',
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${myToken}`
    }
}

export const postBody = {
    method: 'POST',
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${myToken}`
    }
}

export const postLoginBody = {
    method: 'POST',
    headers: {
        'content-type': 'application/json;charset=UTF-8',
    }
}

export const deleteBody = {
    method: 'DELETE',
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${myToken}`
    }
}