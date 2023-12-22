export const url = "http://localhost:9090/api"

export const getBody = {
    method: 'GET',
    headers: {
        'content-type': 'application/json;charset=UTF-8'
    }
}
export const patchBody = {
    method: 'PATCH',
    headers: {
        'content-type': 'application/json;charset=UTF-8'
    }
}

export const postBody = {
    method: 'POST',
    headers: {
        'content-type': 'application/json;charset=UTF-8'
    }
}

export const deleteBody = {
    method: 'DELETE',
    headers: {
        'content-type': 'application/json;charset=UTF-8'
    }
}